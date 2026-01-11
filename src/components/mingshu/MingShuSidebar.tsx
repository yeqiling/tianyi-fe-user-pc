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
      style={{
        width: '280px',
        backgroundColor: '#fff',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* 用户信息区域 */}
      <div style={{ padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
            src={iconCloum}
            alt="logo"
            style={{ width: '60px', height: '60px' }}
          />
        </div>

        <div
          style={{
            height: '1px',
            backgroundColor: '#e0e0e0',
            margin: '20px 0'
          }}
        />

        {/* 用户头像和信息 */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <img
              src={userInfo?.avatar || touxiangIcon}
              alt="avatar"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                marginTop: '8px'
              }}
            >
              {userInfo?.userName || '普通用户'}
            </div>
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>当前用户</div>
        </div>

        {/* 子账号列表 */}
        {subAccounts.length > 0 && (
          <div
            style={{
              maxHeight: '200px',
              overflowY: 'auto',
              marginBottom: '20px'
            }}
          >
            {subAccounts.map((item) => (
              <div
                key={item.user.userId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  marginBottom: '4px'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = '#f0f0f0')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                <img
                  src={lIcon}
                  style={{ width: '16px', marginRight: '8px' }}
                />
                <img
                  src={touxiangIcon}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}
                />
                <span style={{ fontSize: '12px' }}>
                  {item.user.userName || '普通用户'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 新增用户按钮 */}
        <div
          onClick={onAddSubAccount}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px'
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#f0f0f0')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'transparent')
          }
        >
          <img
            src={addUserIcon}
            style={{ width: '20px', marginRight: '8px' }}
          />
          新增用户
        </div>
      </div>

      <div
        style={{
          height: '1px',
          backgroundColor: '#e0e0e0',
          margin: '0 20px'
        }}
      />

      {/* 菜单列表 */}
      <div style={{ padding: '20px', flex: 1 }}>
        {[
          { key: '命书', icon: msIcon, activeIcon: msActiveIcon },
          { key: '运阁', icon: ygIcon, activeIcon: ygActiveIcon },
          { key: '宝阁', icon: bgIcon, activeIcon: bgActiveIcon }
        ].map((menu) => (
          <div
            key={menu.key}
            onClick={() => onSwitchMenu(menu.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              cursor: 'pointer',
              borderRadius: '8px',
              marginBottom: '8px',
              backgroundColor:
                activeMenu === menu.key ? '#e3f2fd' : 'transparent',
              color: activeMenu === menu.key ? '#1976d2' : '#333'
            }}
          >
            <img
              src={activeMenu === menu.key ? menu.activeIcon : menu.icon}
              style={{ width: '24px', height: '24px', marginRight: '12px' }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: activeMenu === menu.key ? 'bold' : 'normal'
              }}
            >
              {menu.key}
            </span>
          </div>
        ))}
      </div>

      {/* 会员信息 */}
      <div
        onClick={onShowMyVip}
        style={{
          padding: '20px',
          borderTop: '1px solid #e0e0e0',
          cursor: 'pointer'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px'
          }}
        >
          <img
            src={xingIcon}
            style={{ width: '20px', marginRight: '8px' }}
          />
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
            {money}
          </span>
        </div>
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>
          我的会员
        </div>
      </div>

      {/* 客服咨询按钮 */}
      <div style={{ padding: '20px' }}>
        <button
          onClick={() => onSwitchMenu('kefu')}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: activeMenu === 'kefu' ? '#1976d2' : '#f5f5f5',
            color: activeMenu === 'kefu' ? '#fff' : '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          客服·咨询
        </button>
      </div>
    </div>
  )
}
