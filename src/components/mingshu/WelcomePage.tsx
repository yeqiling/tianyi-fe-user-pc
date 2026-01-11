import { useStore } from '@tanstack/react-store'
import { userStore } from '../../stores/userStore'
import { navigationStore } from '../../stores/navigationStore'
import daoIcon from '@/assets/images/dao.png'
import deIcon from '@/assets/images/de.png'
import juIcon from '@/assets/images/ju.png'
import luIcon from '@/assets/images/lu.png'
import mingIcon from '@/assets/images/ming_icon.png'
import msTitle from '@/assets/images/ms_title.png'
import shouluIcon from '@/assets/images/shoulu.png'
import smzxjTitle from '@/assets/images/smzxj.png'
import vIcon from '@/assets/images/v.png'
import xIcon from '@/assets/images/x.png'
import xiIcon from '@/assets/images/xi.png'
import xingIcon from '@/assets/images/xing.png'
import yun1Icon from '@/assets/images/yun1.png'
import yun2Icon from '@/assets/images/yun2.png'
import yun3Icon from '@/assets/images/yun3.png'
import yun4Icon from '@/assets/images/yun4.png'
import yun5Icon from '@/assets/images/yun5.png'

interface WelcomePageProps {
  activeMenu: string
  onShowBazi: (service: string, icon: string) => void
  onShowVipModal: () => void
}

export default function WelcomePage({ activeMenu, onShowBazi, onShowVipModal }: WelcomePageProps) {
  const userState = useStore(userStore)

  const showService = (service: string, icon: string) => {
    onShowBazi(service, icon)
  }

  const services = [
    { name: '八字排盘', icon: juIcon, desc: '八字推演 运程排布' },
    { name: '性格内观', icon: deIcon, desc: '灵魂内观 观心悟道' },
    { name: '事业财富', icon: luIcon, desc: '事业规划 财富格局' },
    { name: '婚恋感情', icon: xiIcon, desc: '恋爱情缘 婚姻美满' },
    { name: '身体健康', icon: shouluIcon, desc: '健康养生 延年益寿' },
    { name: '学业发展', icon: xIcon, desc: '学业进步 智慧开启' },
    { name: '2026年运', icon: yun1Icon, desc: '流年运势 趋吉避凶' },
    { name: '婚恋合盘', icon: yun2Icon, desc: '合盘分析 缘分深浅' },
    { name: '事业合盘', icon: yun3Icon, desc: '事业合作 共创辉煌' },
    { name: '每日运势', icon: yun4Icon, desc: '每日指引 趋利避害' },
    { name: '前世今生', icon: yun5Icon, desc: '前世因缘 今生果报' },
    { name: '起名', icon: mingIcon, desc: '姓名学说 吉祥如意' },
    { name: '好运锦囊', icon: daoIcon, desc: '开运秘籍 好运连连' }
  ]

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* 欢迎区域 */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <span>欢迎回来，{userState.userInfo.userName || '普通用户'}道友</span>
          <img src={xingIcon} style={{ width: '24px', height: '24px' }} />
          <span style={{ 
            fontSize: '14px', 
            color: userState.isVip ? '#ff6b35' : '#999',
            fontWeight: 'normal'
          }}>
            {userState.isVip ? 'VIP用户' : ''}
          </span>
        </div>
        
        <div>
          <img 
            src={activeMenu === '命书' ? msTitle : smzxjTitle}
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </div>
      </div>

      {/* 服务网格 */}
      {activeMenu === '命书' && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => showService(service.name, service.icon)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid #e0e0e0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={vIcon} 
                style={{ width: '24px', height: '24px', marginRight: '15px' }}
              />
              <img 
                src={service.icon}
                style={{ width: '40px', height: '40px', marginRight: '20px' }}
              />
              <div>
                <div style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  marginBottom: '4px',
                  color: '#333'
                }}>
                  {service.name}
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#666' 
                }}>
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 宝阁内容 */}
      {activeMenu === '宝阁' && (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ 
            fontSize: '20px', 
            color: '#666', 
            marginBottom: '20px' 
          }}>
            宝阁功能即将上线
          </div>
          <div style={{ fontSize: '14px', color: '#999' }}>
            敬请期待更多精彩内容
          </div>
        </div>
      )}
    </div>
  )
}
