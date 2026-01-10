import { useStore } from '@tanstack/react-store';
import { languageStore } from '../../stores/languageStore';
import Footer from './Footer';
import cpfw from '@/assets/images/cpfw.png';
import cp from '@/assets/images/cp.png';
import ms from '@/assets/images/ms.png';
import ml from '@/assets/images/ml.png';
import hl from '@/assets/images/hl.png';
import ys from '@/assets/images/ys.png';
import img21 from '@/assets/images/21.png';
import img22 from '@/assets/images/22.png';

const imageMap: Record<string, string> = {
  'cp.png': cp,
  'ms.png': ms,
  'ml.png': ml,
  'hl.png': hl,
  'ys.png': ys,
  '21.png': img21,
  '22.png': img22,
};

const productTexts = {
  'zh-CN': {
    subtitle: '专业的命理服务，为您提供全方位的人生指导',
    products: [
      { id: 1, title: '产品定价', image: 'cp.png' },
      { id: 2, title: '八字命理报告-命书', image: 'ms.png' },
      { id: 3, title: '命理报告-案例展示', image: 'ml.png' },
      { id: 4, title: '婚恋合盘-运阁', image: 'hl.png' },
      { id: 5, title: '2006年运势分析-运阁', image: 'ys.png' },
    ],
  },
  'en-US': {
    subtitle:
      'Professional fortune-telling services, providing comprehensive life guidance',
    products: [
      { id: 1, title: 'Product Pricing', image: 'cp.png' },
      { id: 2, title: 'BaZi Fortune Report', image: 'ms.png' },
      { id: 3, title: 'Fortune Report Cases', image: 'ml.png' },
      { id: 4, title: 'Marriage Compatibility', image: 'hl.png' },
      { id: 5, title: '2006 Fortune Analysis', image: 'ys.png' },
    ],
  },
};

export default function ProductView() {
  const { currentLanguage } = useStore(languageStore);
  const texts = productTexts[currentLanguage];

  return (
    <div className="pt-16 h-full font-sans bg-gray-50">
      <div className="p-5 pb-48 min-h-screen">
        <div className="text-center mb-8">
          <img src={cpfw} alt="" className="w-48 h-14 mb-7 mx-auto block" />
          <p className="font-normal text-xl text-slate-600">{texts.subtitle}</p>
        </div>

        <div className="flex items-center max-w-6xl mx-auto">
          <div className="flex flex-wrap w-full justify-start">
            {texts.products.map((product) => (
              <div
                key={product.id}
                className="w-[30%] mt-5 ml-5 bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-200 cursor-pointer hover:transform hover:scale-105"
              >
                <div className="w-full h-64 relative overflow-hidden">
                  <img
                    src={imageMap[product.image]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-18 leading-[72px] text-sm text-gray-800 text-center font-bold">
                  {product.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
