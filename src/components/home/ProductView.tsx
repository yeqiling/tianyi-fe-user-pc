import { useStore } from '@tanstack/react-store'
import { languageStore } from '../../stores/languageStore'
import { setActiveNav } from '../../stores/navigationStore'

const productTexts = {
  'zh-CN': {
    subtitle: '专业的命理服务,为您提供全方位的人生指导',
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

  const handleProductClick = (productId: number) => {
    setActiveNav(4)
  }

  return (
    <div className="bg-gray-50 min-h-screen font-['Microsoft_YaHei',sans-serif] pt-[65px]">
      <div className="p-5 pb-[200px] min-h-screen">
        <div className="text-center mb-[30px]">
          <img src="/images/cpfw.png" alt="产品服务" className="w-[200px] h-[57px] mb-[26px] mx-auto" />
          <p className="font-normal text-xl text-[#4b5462]">{texts.subtitle}</p>
        </div>

        <div className="flex items-center max-w-[1160px] mx-auto">
          <div className="flex flex-wrap w-full justify-start">
            {texts.products.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product.id)} />
            ))}
          </div>
        </div>
      </div>

      <Footer texts={texts} />
    </div>
  )
}

interface ProductCardProps {
  product: { id: number; title: string; image: string }
  onClick: () => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="w-[30%] mt-5 ml-5 bg-white rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-transform cursor-pointer flex-[0_0_auto] hover:translate-y-[-4px]"
      onClick={onClick}
    >
      <div className="w-full h-[250px] relative overflow-hidden">
        <img src={`/images/${product.image}`} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="h-[72px] leading-[72px] text-center text-sm font-bold text-[#333]">{product.title}</div>
    </div>
  )
}

interface FooterProps {
  texts: { copyright: string; qrLabels: string[] }
}

function Footer({ texts }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white px-5">
      <div className="flex justify-between items-start gap-[30px] mb-[30px]">
        <div className="mt-[53px]">
          <img src="/images/icon_logo_black.png" alt="Logo" className="h-[34px] w-[134px] ml-[110px]" />
          <div className="mt-4 ml-[110px] font-normal text-lg text-[#4b5462]">{texts.copyright}</div>
        </div>
        
        <div>
          <h3 className="text-center mt-[10px]">
            <img src="/images/xjt.png" alt="客服" className="w-5 h-[10px]" />
          </h3>
          <div className="flex gap-[20px]">
            {['21.png', '22.png'].map((image, index) => (
              <QRCode key={index} image={image} label={texts.qrLabels[index]} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

interface QRCodeProps {
  image: string
  label: string
}

function QRCode({ image, label }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <img src={`/images/${image}`} alt={label} className="w-20 h-20 rounded bg-white" />
      <span className="text-xs text-[#ccc] mt-[5px]">{label}</span>
    </div>
  )
}
