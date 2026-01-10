import { useStore } from '@tanstack/react-store'
import { languageStore } from '../../stores/languageStore'

const productTexts = {
  'zh-CN': {
    subtitle: '专业的命理服务，为您提供全方位的人生指导',
    products: [
      { title: '产品定价', image: 'cp.png' },
      { title: '八字命理报告-命书', image: 'ms.png' },
      { title: '命理报告-案例展示', image: 'ml.png' },
      { title: '婚恋合盘-运阁', image: 'hl.png' },
      { title: '2006年运势分析-运阁', image: 'ys.png' }
    ],
    copyright: '© 2025 天乙神算. 保留所有权利.'
  },
  'en-US': {
    subtitle: 'Professional fortune-telling services, providing comprehensive life guidance',
    products: [
      { title: 'Product Pricing', image: 'cp.png' },
      { title: 'BaZi Fortune Report', image: 'ms.png' },
      { title: 'Fortune Report Cases', image: 'ml.png' },
      { title: 'Marriage Compatibility', image: 'hl.png' },
      { title: '2006 Fortune Analysis', image: 'ys.png' }
    ],
    copyright: '© 2025 Tianyi Fortune. All rights reserved.'
  }
}

interface ProductViewProps {}

export default function ProductView({}: ProductViewProps) {
  const { currentLanguage } = useStore(languageStore)
  const texts = productTexts[currentLanguage]

  const handleProductClick = (id: number) => {
    console.log(`查看产品 ${id}`)
    // TODO: 实现产品详情跳转
  }

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
        <div className="text-center" style={{ marginBottom: '30px' }}>
          <img 
            src="/images/cpfw.png" 
            alt="产品服务"
            style={{ width: '200px', height: '57px', marginBottom: '13px' }}
          />
          <p style={{ 
            fontWeight: 400, 
            fontSize: '20px', 
            color: '#4b5462' 
          }}>
            {texts.subtitle}
          </p>
        </div>

        {/* 产品网格 */}
        <div className="flex justify-center">
          <div 
            className="flex flex-wrap justify-start"
            style={{ maxWidth: '1160px', width: '100%' }}
          >
            {texts.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden cursor-pointer transition-transform hover:transform hover:-translate-y-1"
                style={{
                  width: '30%',
                  margin: '10px 0 0 10px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  borderRadius: '8px'
                }}
                onClick={() => handleProductClick(index + 1)}
              >
                <div 
                  className="relative overflow-hidden"
                  style={{ width: '100%', height: '250px' }}
                >
                  <img 
                    src={`/images/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="text-center"
                  style={{ 
                    padding: '15px',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#333'
                  }}
                >
                  {product.title}
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
