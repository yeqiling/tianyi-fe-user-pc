import { useStore } from '@tanstack/react-store'
import { userStore } from '../../stores/userStore'
import daoIcon from '@/assets/images/dao.png'
import xingIcon from '@/assets/images/xing.png'
import xing2Icon from '@/assets/images/xing2.png'
import yunTitle from '@/assets/images/yun-title.png'
import yun1Icon from '@/assets/images/yun1.png'
import yun2Icon from '@/assets/images/yun2.png'
import yun3Icon from '@/assets/images/yun3.png'
import yun4Icon from '@/assets/images/yun4.png'
import yun5Icon from '@/assets/images/yun5.png'
import yun6Icon from '@/assets/images/yun6.png'

interface YungeWelcomeProps {
  onShowBazi: (service: string, icon: string) => void
  onShowVipModal: () => void
}

export default function YungeWelcome({ onShowBazi, onShowVipModal }: YungeWelcomeProps) {
  const userState = useStore(userStore)

  const goToService = (service: string, icon: string) => {
    onShowBazi(service, icon)
  }

  const yungeServices = [
    { name: '2026年运', icon: yun1Icon, desc: '多维解读 运势详批' },
    { name: '婚恋合盘', icon: yun2Icon, desc: '合盘分析 缘分深浅' },
    { name: '事业合盘', icon: yun3Icon, desc: '事业合作 共创辉煌' },
    { name: '每日运势', icon: yun4Icon, desc: '每日指引 趋利避害' },
    { name: '前世今生', icon: yun5Icon, desc: '前世因缘 今生果报' },
    { name: '起名', icon: yun6Icon, desc: '姓名学说 吉祥如意' },
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
            src={yunTitle}
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </div>
      </div>

      {/* 运阁服务网格 */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {yungeServices.map((service) => (
          <div
            key={service.name}
            onClick={() => goToService(service.name, service.icon)}
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
              src={xing2Icon} 
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
    </div>
  )
}
