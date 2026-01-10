import { useStore } from '@tanstack/react-store'
import { languageStore } from '../../stores/languageStore'
import { setActiveNav } from '../../stores/navigationStore'

const productTexts = {
  'zh-CN': {
    subtitle: '专业的命理服务，为您提供全方位的人生指导',
    products: [
      { id: 1, title: '产品定价', image: 'cp.png' },
      { id: 2, title: '八字命理报告-命书', image: 'ms.png' },
      { id: 3, title: '命理报告-案例展示', image: 'ml.png' },
      { id: 4, title: '婚恋合盘-运阁', image: 'hl.png' },
      { id: 5, title: '2006年运势分析-运阁', image: 'ys.png' }
    ],
    copyright: '© 2025 天乙神算. 保留所有权利.',
    qrLabels: ['芷暄师妹', '丁火师妹']
  },
  'en-US': {
    subtitle: 'Professional fortune-telling services, providing comprehensive life guidance',
    products: [
      { id: 1, title: 'Product Pricing', image: 'cp.png' },
      { id: 2, title: 'BaZi Fortune Report', image: 'ms.png' },
      { id: 3, title: 'Fortune Report Cases', image: 'ml.png' },
      { id: 4, title: 'Marriage Compatibility', image: 'hl.png' },
      { id: 5, title: '2006 Fortune Analysis', image: 'ys.png' }
    ],
    copyright: '© 2025 Tianyi Fortune. All rights reserved.',
    qrLabels: ['Master Zhixuan', 'Master Dinghuo']
  }
}

export default function ProductView() {
  const { currentLanguage } = useStore(languageStore)
  const texts = productTexts[currentLanguage]

  return (
    <div style={{ paddingTop: '65px', height: '100%', fontFamily: '"Microsoft YaHei", sans-serif', backgroundColor: '#f9fafb' }}>
      <div style={{ padding: '20px', paddingBottom: '200px', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img src="/images/cpfw.png" alt="" style={{ width: '200px', height: '57px', marginBottom: '26px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
          <p style={{ fontWeight: 400, fontSize: '20px', color: '#4b5462' }}>{texts.subtitle}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-start' }}>
            {texts.products.map((product) => (
              <div
                key={product.id}
                style={{
                  width: '30%',
                  margin: '20px 0 0 20px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                  flex: '0 0 auto'
                }}
                onClick={() => setActiveNav(4)}
              >
                <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
                  <img src={`/images/${product.image}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ height: '72px', lineHeight: '72px', fontSize: '14px', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>
                  {product.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', color: '#fff', padding: '0 20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px', marginBottom: '30px' }}>
          <div style={{ marginTop: '53px' }}>
            <img src="/images/icon_logo_black.png" alt="" style={{ height: '34px', width: '134px', marginLeft: '110px' }} />
            <div style={{ margin: '16px 0 0 110px', fontWeight: 400, fontSize: '18px', color: '#4b5462' }}>{texts.copyright}</div>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '10px', textAlign: 'center', marginTop: '10px' }}>
              <img src="/images/xjt.png" alt="" style={{ width: '20px', height: '10px' }} />
            </h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['21.png', '22.png'].map((image, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                  <img src={`/images/${image}`} alt="" style={{ width: '80px', height: '80px', borderRadius: '4px', backgroundColor: '#fff' }} />
                  <span style={{ fontSize: '12px', color: '#ccc', marginTop: '5px' }}>{texts.qrLabels[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
