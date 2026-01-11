import addUserIcon from '@/assets/images/新增用户.png'
import bgActiveIcon from '@/assets/images/bg_active.png'
import bgIcon from '@/assets/images/bg2.png'
import iconCloum from '@/assets/images/icon_cloum.png'
import itemActiveIcon from '@/assets/images/item_active.png'
import lIcon from '@/assets/images/L.png'
import msActiveIcon from '@/assets/images/ms_active.png'
import msIcon from '@/assets/images/ms2.png'
import touxiangIcon from '@/assets/images/touxiang.png'
import xingIcon from '@/assets/images/xing.png'
import ygActiveIcon from '@/assets/images/yg_active.png'
import ygIcon from '@/assets/images/yg2.png'
import { useStore } from '@tanstack/react-store'
import { navigationActions, navigationStore } from '../../stores/navigationStore'
import type { MenuType } from '../../stores/navigationStore'
import { modalActions } from '../../stores/modalStore'
import { userStore } from '../../stores/userStore'

export default function MingShuSidebar() {
  const userState = useStore(userStore)
  const navState = useStore(navigationStore)

  const switchMenu = (menu: MenuType) => {
    navigationActions.setActiveMenu(menu)
  }

  const showAddSubAccount = () => {
    modalActions.showAddSubAccount()
  }

  const showMyVip = () => {
    modalActions.showMemberPage()
  }

  return (
    <div
      className="flex w-[200px] flex-col bg-white px-[19px] py-[20px] shadow-[2px_0_10px_rgba(0,0,0,0.05)]"
    >
      {/* 用户信息区域 */}
      <div className="mb-[7px] flex flex-col items-center text-center">
        <div className="mb-[20px] flex justify-center">
          <img
            src={iconCloum}
            alt="logo"
            className="h-[78px] w-[30px]"
          />
        </div>

        <div className="mb-[18px] h-px w-full bg-[#f3f4f6]" />

        {/* 用户头像和信息 */}
        <div className="w-full rounded-[8px] bg-[#f8f9fa] p-[12px]">
          <div className="flex items-center justify-center">
            <img
              src={userState.userInfo?.avatar || touxiangIcon}
              alt="avatar"
              className="mr-[5px] h-[24px] w-[24px] rounded-full object-cover"
            />
            <div
              className="text-[14px] font-bold text-[#333]"
            >
              {userState.userInfo?.userName || '普通用户'}
            </div>
          </div>
          <div className="mt-[3px] text-[12px] text-[#666]">当前用户</div>
        </div>

        {/* 子账号列表 */}
        {userState.subAccounts.length > 0 && (
          <div
            className="mt-[12px] max-h-[200px] w-full overflow-y-auto rounded-[8px]"
          >
            {userState.subAccounts.map((item, index) => (
              <div
                key={item.user.userId ?? item.user.userName ?? `sub-${index}`}
                className="mx-auto mb-[10px] flex w-[70%] cursor-pointer items-center"
              >
                <img
                  src={lIcon}
                  className="w-[14px]"
                />
                <img
                  src={item.user.avatar || touxiangIcon}
                  className="mx-[8px] h-[14px] w-[14px] rounded-full"
                />
                <span className="text-[12px] text-[#4b5462]">
                  {item.user.userName || '普通用户'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 新增用户按钮 */}
        <div
          onClick={showAddSubAccount}
          className="mt-[12px] flex cursor-pointer items-center text-[12px] text-[#666]"
        >
          <img
            src={addUserIcon}
            className="mr-[5px] h-[15px] w-[15px]"
          />
          新增用户
        </div>
      </div>

      <div
        className="mb-[18px] h-px w-full bg-[#f3f4f6]"
      />

      {/* 菜单列表 */}
      <div className="mb-[20px] flex flex-col items-center">
        {[
          { key: '命书', icon: msIcon, activeIcon: msActiveIcon },
          { key: '运阁', icon: ygIcon, activeIcon: ygActiveIcon },
          { key: '宝阁', icon: bgIcon, activeIcon: bgActiveIcon }
        ].map((menu) => {
          const isActive = navState.activeMenu === menu.key
          return (
            <div
              key={menu.key}
              onClick={() => switchMenu(menu.key as MenuType)}
              style={isActive ? { backgroundImage: `url(${itemActiveIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' } : undefined}
              className="mb-[5px] flex h-[50px] w-[140px] cursor-pointer items-center justify-center rounded-[8px]"
            >
              <img
                src={isActive ? menu.activeIcon : menu.icon}
                className="mr-[15px] h-[20px] w-[20px]"
              />
              <span
                className={`text-[14px] tracking-[6px] ${isActive ? 'font-bold text-[#007aff]' : 'font-normal text-[#333]'}`}
              >
                {menu.key}
              </span>
            </div>
          )
        })}
      </div>

      {/* 会员信息 */}
      <div
        onClick={showMyVip}
        className="mb-[20px] cursor-pointer rounded-[9px] bg-[#f9fafb] p-[10px]"
      >
        <div
          className="flex items-center justify-center"
        >
          <img
            src={xingIcon}
            className="mr-[10px] h-[18px] w-[18px]"
          />
          <span className="text-[16px] font-medium text-[#000]">{userState.money}</span>
        </div>
        <div className="mt-[5px] text-center text-[12px] font-normal text-[#9da2ae]">
          我的会员
        </div>
      </div>

      {/* 客服咨询按钮 */}
      <div className="mt-auto flex justify-center">
        <button
          onClick={() => switchMenu('kefu')}
          className={`h-[46px] w-[163px] cursor-pointer rounded-[12px] border-0 text-[16px] text-white ${navState.activeMenu === 'kefu' ? 'bg-[#2662ea]' : 'bg-[#5f5f5f]'}`}
        >
          客服·咨询
        </button>
      </div>
    </div>
  )
}
