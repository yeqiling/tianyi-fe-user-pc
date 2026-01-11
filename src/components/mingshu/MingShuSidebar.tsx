import addUserIcon from '@/assets/images/新增用户.png'
import bgActiveIcon from '@/assets/images/bg_active.png'
import bgIcon from '@/assets/images/bg2.png'
import iconCloum from '@/assets/images/icon_cloum.png'
import lIcon from '@/assets/images/L.png'
import msActiveIcon from '@/assets/images/ms_active.png'
import msIcon from '@/assets/images/ms2.png'
import touxiangIcon from '@/assets/images/touxiang.png'
import xingIcon from '@/assets/images/xing.png'
import ygActiveIcon from '@/assets/images/yg_active.png'
import ygIcon from '@/assets/images/yg2.png'

interface MingShuSidebarProps {
  userInfo: {
    avatar?: string
    userName?: string
  }
  subAccounts: Array<{
    user: {
      userId: string | number
      userName?: string
    }
  }>
  money: number | string
  activeMenu: string
  onSwitchMenu: (menu: string) => void
  onAddSubAccount: () => void
  onShowMyVip: () => void
}

export default function MingShuSidebar({
  userInfo,
  subAccounts,
  money,
  activeMenu,
  onSwitchMenu,
  onAddSubAccount,
  onShowMyVip
}: MingShuSidebarProps) {
  return (
    <div
      className="flex w-[280px] flex-col border-r border-[#e0e0e0] bg-white"
    >
      {/* 用户信息区域 */}
      <div className="p-5">
        <div className="mb-5 text-center">
          <img
            src={iconCloum}
            alt="logo"
            className="h-[60px] w-[60px]"
          />
        </div>

        <div className="my-5 h-px bg-[#e0e0e0]" />

        {/* 用户头像和信息 */}
        <div className="mb-5 text-center">
          <div className="mb-2.5">
            <img
              src={userInfo?.avatar || touxiangIcon}
              alt="avatar"
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
            <div
              className="mt-2 text-sm font-bold"
            >
              {userInfo?.userName || '普通用户'}
            </div>
          </div>
          <div className="text-xs text-[#666]">当前用户</div>
        </div>

        {/* 子账号列表 */}
        {subAccounts.length > 0 && (
          <div
            className="mb-5 max-h-[200px] overflow-y-auto"
          >
            {subAccounts.map((item) => (
              <div
                key={item.user.userId}
                className="mb-1 flex cursor-pointer items-center rounded p-2 hover:bg-[#f0f0f0]"
              >
                <img
                  src={lIcon}
                  className="mr-2 w-4"
                />
                <img
                  src={touxiangIcon}
                  className="mr-2 h-6 w-6 rounded-full"
                />
                <span className="text-xs">
                  {item.user.userName || '普通用户'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 新增用户按钮 */}
        <div
          onClick={onAddSubAccount}
          className="flex cursor-pointer items-center rounded p-2.5 text-sm hover:bg-[#f0f0f0]"
        >
          <img
            src={addUserIcon}
            className="mr-2 w-5"
          />
          新增用户
        </div>
      </div>

      <div
        className="mx-5 h-px bg-[#e0e0e0]"
      />

      {/* 菜单列表 */}
      <div className="flex-1 p-5">
        {[
          { key: '命书', icon: msIcon, activeIcon: msActiveIcon },
          { key: '运阁', icon: ygIcon, activeIcon: ygActiveIcon },
          { key: '宝阁', icon: bgIcon, activeIcon: bgActiveIcon }
        ].map((menu) => (
          <div
            key={menu.key}
            onClick={() => onSwitchMenu(menu.key)}
            className={`mb-2 flex cursor-pointer items-center rounded-lg p-3 ${activeMenu === menu.key ? 'bg-[#e3f2fd] text-[#1976d2]' : 'bg-transparent text-[#333]'}`}
          >
            <img
              src={activeMenu === menu.key ? menu.activeIcon : menu.icon}
              className="mr-3 h-6 w-6"
            />
            <span
              className={`text-sm ${activeMenu === menu.key ? 'font-bold' : 'font-normal'}`}
            >
              {menu.key}
            </span>
          </div>
        ))}
      </div>

      {/* 会员信息 */}
      <div
        onClick={onShowMyVip}
        className="cursor-pointer border-t border-[#e0e0e0] p-5"
      >
        <div
          className="mb-2 flex items-center justify-center"
        >
          <img
            src={xingIcon}
            className="mr-2 h-5 w-5"
          />
          <span className="text-base font-bold">{money}</span>
        </div>
        <div className="text-center text-xs text-[#666]">
          我的会员
        </div>
      </div>

      {/* 客服咨询按钮 */}
      <div className="p-5">
        <button
          onClick={() => onSwitchMenu('kefu')}
          className={`w-full cursor-pointer rounded-lg border-0 p-3 text-sm ${activeMenu === 'kefu' ? 'bg-[#1976d2] text-white' : 'bg-[#f5f5f5] text-[#333]'}`}
        >
          客服·咨询
        </button>
      </div>
    </div>
  )
}
