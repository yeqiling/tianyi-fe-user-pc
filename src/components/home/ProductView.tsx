import { useStore } from '@tanstack/react-store'
import { languageStore } from '../../stores/languageStore'
import { navigationStore, setActiveNav } from '../../stores/navigationStore'

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

interface ProductViewProps {
  onProductClick?: (productId: number) => void
}

export default function ProductView({ onProductClick }: ProductViewProps) {
  const { currentLanguage } = useStore(languageStore)
  const texts = productTexts[currentLanguage]

  const handleProductClick = (productId: number) => {
    if (onProductClick) {
      onProductClick(productId)
    } else {
      // 默认导航到产品详情页面
      setActiveNav(4) // 产品详情页面的导航索引
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen font-['Microsoft_YaHei',sans-serif]" style={{ paddingTop: '65px' }}>
      {/* 主内容区 */}
      <div style={{ padding: '20px', paddingBottom: '200px', minHeight: '100vh' }}>
        {/* 标题区域 */}
        <div className="text-center" style={{ marginBottom: '30px' }}>
          <img 
            src="/images/cpfw.png" 
            alt="产品服务"
            className="w-[200px] h-[57px]"
            style={{ marginBottom: '26px' }}
          />
          <p style={{ fontWeight: 400, fontSize: '20px', color: '#4b5462' }}>
            {texts.subtitle}
          </p>
        </div>

        {/* 产品网格 */}
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'flex-start' }}>
            {texts.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 底部版权区 */}
      <Footer texts={texts} />
    </div>
  )
}

// 产品卡片组件
interface ProductCardProps {
  product: { id: number; title: string; image: string }
  onClick: () => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      style={{
        width: '30%',
        margin: '20px 0 0 20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        flex: '0 0 auto'
      }}
      onClick={onClick}
    >
      <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
        <img 
          src={`/images/${product.image}`}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ 
        height: '72px', 
        lineHeight: '72px', 
        textAlign: 'center', 
        fontSize: '14px', 
        fontWeight: 'bold', 
        color: '#333' 
      }}>
        {product.title}
      </div>
    </div>
  )
}

// 底部版权组件
interface FooterProps {
  texts: {
    copyright: string
    qrLabels: string[]
  }
}

function Footer({ texts }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white px-10 py-0">
      <div className="flex justify-between items-start gap-[30px] mb-[30px]">
        <div className="mt-[53px]">
          <img 
            src="/images/icon_logo_black.png"
            alt="Logo"
            className="h-[34px] w-[134px] ml-[110px]"
          />
          <div className="mt-4 ml-[110px] font-normal text-lg text-[#4b5462]">
            {texts.copyright}
          </div>
        </div>
        
        <div>
          <h3 className="text-center mt-[10px]">
            <img 
              src="/images/xjt.png"
              alt="客服"
              className="w-5 h-[10px]"
            />
          </h3>
          <div className="flex gap-10 mt-[10px]">
            {['21.png', '22.png'].map((image, index) => (
              <QRCode
                key={index}
                image={image}
                label={texts.qrLabels[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// 二维码组件
interface QRCodeProps {
  image: string
  label: string
}

function QRCode({ image, label }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <img 
        src={`/images/${image}`}
        alt={label}
        className="w-20 h-20 rounded-lg bg-white"
      />
      <span className="text-xs text-[#ccc] mt-[5px]">{label}</span>
    </div>
  )
}
