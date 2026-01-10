import { useStore } from '@tanstack/react-store'
import { useNavigate } from '@tanstack/react-router'
import { languageStore } from '../../stores/languageStore'

const homeTexts = {
  'zh-CN': {
    subtitle: '召唤AI老法师，开启实时对话',
    tryNow: '马上体验',
    tryNowLarge: '立即体验',
    contact: '联系我们',
    email: '邮箱：service@klxtech.com',
    address: '地址：上海市闵行区申滨路36号丽宝广场',
    customerService: '客服入口',
    copyright: '© 2025 昆仑墟（上海）网络科技有限公司 版权所有',
    icp: '沪ICP备2025131650号-2',
    privacy: '隐私政策',
    terms: '用户协议'
  },
  'en-US': {
    subtitle: 'Summon AI Master, Start Real-time Conversation',
    tryNow: 'Try Now',
    tryNowLarge: 'Try Now',
    contact: 'Contact Us',
    email: 'Email: service@klxtech.com',
    address: 'Address: 36 Shenbin Road, Minhang District, Shanghai',
    customerService: 'Customer Service',
    copyright: '© 2025 Kunlunxu (Shanghai) Network Technology Co., Ltd. All rights reserved',
    icp: 'ICP: 2025131650-2',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  }
}

export default function HomeView() {
  const { currentLanguage } = useStore(languageStore)
  const navigate = useNavigate()
  const texts = homeTexts[currentLanguage]

  const handleLogin = () => {
    navigate({ to: '/login' })
  }

  return (
    <div>
      {/* 主视觉区域 */}
      <section 
        style={{
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          marginTop: '65px',
          background: '#f9fafb'
        }}
      >
        {/* Hero Content */}
        <div 
          style={{
            height: '210px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            margin: '0 auto',
            maxWidth: '400px'
          }}
        >
          <img 
            src="/images/home_text.png" 
            alt="主标题"
            style={{ 
              width: '644px', 
              height: '60px',
              marginBottom: '24px'
            }}
          />
          <p 
            style={{ 
              fontSize: '16px', 
              color: '#666',
              marginBottom: '20px',
              lineHeight: 1.6
            }}
          >
            {texts.subtitle}
          </p>
          <button 
            style={{
              width: '132px',
              height: '52px',
              lineHeight: '52px',
              fontWeight: '500',
              fontSize: '18px',
              color: '#FFFFFF',
              background: '#5F5F5F',
              boxShadow: '0px 6px 12px 1px rgba(0, 0, 0, 0.16)',
              borderRadius: '26px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onClick={handleLogin}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#005bb5'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#5F5F5F'}
          >
            {texts.tryNow}
          </button>
        </div>
        
        {/* Background Image */}
        <div 
          style={{
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            overflow: 'hidden'
          }}
        >
          <img 
            src="/images/home_bg.png" 
            alt="背景" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>
        
      {/* 命书区域 */}
      <div 
        style={{ 
          padding: '40px 0',
          background: '#f9fafb'
        }}
      >
        <img 
          src="/images/ms_c.png" 
          alt="命书"
          style={{ 
            width: '800px', 
            height: '417px',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
      
      {/* 易经区域 */}
      <div 
        style={{ 
          padding: '40px 0',
          background: 'white'
        }}
      >
        <img 
          src="/images/yg_c.png" 
          alt="易经"
          style={{ 
            width: '800px', 
            height: '417px',
            display: 'block',
            margin: '0 auto'
          }}
        />
      </div>
      
      {/* 立即体验按钮 */}
      <div 
        style={{ 
          padding: '40px 0',
          background: 'white'
        }}
      >
        <button 
          style={{
            width: '200px',
            height: '52px',
            lineHeight: '52px',
            margin: '0 auto',
            fontWeight: '500',
            fontSize: '18px',
            color: '#ffffff',
            background: '#5f5f5f',
            boxShadow: '0px 6px 12px 1px rgba(0, 0, 0, 0.16)',
            borderRadius: '26px',
            border: 'none',
            cursor: 'pointer',
            display: 'block',
            transition: 'background-color 0.2s'
          }}
          onClick={handleLogin}
          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#005bb5'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#5f5f5f'}
        >
          {texts.tryNowLarge}
        </button>
      </div>

      {/* 底部版权区 */}
      <footer 
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '30px 20px 20px',
          marginTop: '30px'
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '30px',
            marginBottom: '30px'
          }}
        >
          <div>
            <img 
              src="/images/icon_logo_bg.png" 
              alt="Logo" 
              style={{ height: '30px' }}
            />
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>{texts.contact}</h3>
            <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '5px' }}>
              {texts.email}
            </p>
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              {texts.address}
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'right' }}>{texts.customerService}</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <img 
                  src="/images/21.png" 
                  alt="芷暄师妹" 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '4px',
                    backgroundColor: '#fff'
                  }}
                />
                <span style={{ fontSize: '12px', color: '#ccc', marginTop: '5px' }}>芷暄师妹</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <img 
                  src="/images/22.png" 
                  alt="丁火师妹" 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '4px',
                    backgroundColor: '#fff'
                  }}
                />
                <span style={{ fontSize: '12px', color: '#ccc', marginTop: '5px' }}>丁火师妹</span>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #333',
            paddingTop: '15px',
            fontSize: '12px',
            color: '#999'
          }}
        >
          <div>
            <div>{texts.copyright}</div>
            <div>{texts.icp}</div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <span 
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#fff'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#999'}
            >
              {texts.privacy}
            </span>
            <span 
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#fff'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#999'}
            >
              {texts.terms}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
