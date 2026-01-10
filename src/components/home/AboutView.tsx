import { useStore } from '@tanstack/react-store'
import { languageStore } from '../../stores/languageStore'

const aboutTexts = {
  'zh-CN': {
    items: [
      { 
        title: '天乙神算 — 八字命理AI测算平台',
        image: 'mlai.png',
        detailId: 3
      },
      { 
        title: '产品体验 — 感谢你们的支持和建议',
        image: 'gf.png',
        detailId: 4
      }
    ],
    copyright: '© 2025 天乙神算. 保留所有权利.'
  },
  'en-US': {
    items: [
      { 
        title: 'Tianyi Fortune — BaZi AI Fortune Platform',
        image: 'mlai.png',
        detailId: 3
      },
      { 
        title: 'Product Experience — Thank you for your support',
        image: 'gf.png',
        detailId: 4
      }
    ],
    copyright: '© 2025 Tianyi Fortune. All rights reserved.'
  }
}

interface AboutViewProps {
  onGoDetail: (num: number) => void
}

export default function AboutView({ onGoDetail }: AboutViewProps) {
  const { currentLanguage } = useStore(languageStore)
  const texts = aboutTexts[currentLanguage]

  return (
    <div 
      className="bg-gray-50 min-h-screen"
      style={{ 
        paddingTop: '65px',
        fontFamily: '"Microsoft YaHei", sans-serif'
      }}
    >
      {/* 主内容区 */}
      <div style={{ padding: '20px', paddingBottom: '100px' }}>
        {/* 产品网格 */}
        <div className="flex justify-center">
          <div 
            className="flex flex-wrap justify-start"
            style={{ maxWidth: '1160px', width: '100%', marginTop: '40px' }}
          >
            {texts.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden cursor-pointer transition-transform hover:transform hover:-translate-y-1"
                style={{
                  width: '45%',
                  margin: '10px 20px 0 20px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  borderRadius: '8px'
                }}
                onClick={() => onGoDetail(item.detailId)}
              >
                <div 
                  className="relative overflow-hidden"
                  style={{ width: '100%', height: '300px' }}
                >
                  <img 
                    src={`/images/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="text-center"
                  style={{ 
                    padding: '20px',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#333',
                    lineHeight: '1.4'
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部版权区 */}
      <footer className="bg-white" style={{ padding: '20px' }}>
        <div className="flex justify-between items-start">
          <div style={{ marginTop: '26px' }}>
            <img 
              src="/images/icon_logo_black.png"
              alt="Logo"
              style={{ 
                height: '34px', 
                width: '134px', 
                marginLeft: '55px' 
              }}
            />
            <div style={{
              margin: '8px 0 0 55px',
              fontWeight: 400,
              fontSize: '18px',
              color: '#4b5462'
            }}>
              {texts.copyright}
            </div>
          </div>
          
          <div>
            <h3>
              <img 
                src="/images/xjt.png"
                alt="客服"
                style={{ width: '24px', height: '24px' }}
              />
            </h3>
            <div className="flex" style={{ gap: '20px', marginTop: '10px' }}>
              <div className="flex flex-col items-center" style={{ gap: '5px' }}>
                <img 
                  src="/images/21.png"
                  alt="芷暄师妹"
                  style={{ width: '80px', height: '80px' }}
                />
                <span style={{ fontSize: '12px', color: '#666' }}>芷暄师妹</span>
              </div>
              <div className="flex flex-col items-center" style={{ gap: '5px' }}>
                <img 
                  src="/images/22.png"
                  alt="丁火师妹"
                  style={{ width: '80px', height: '80px' }}
                />
                <span style={{ fontSize: '12px', color: '#666' }}>丁火师妹</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
