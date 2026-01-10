import { useStore } from '@tanstack/react-store';
import { languageStore } from '../../stores/languageStore';
import Footer from './Footer';
import mlai from '@/assets/images/mlai.png';
import gf from '@/assets/images/gf.png';
import about_bg from '@/assets/images/about_bg.png';

const imageMap: Record<string, string> = {
  'mlai.png': mlai,
  'gf.png': gf,
};

const aboutTexts = {
  'zh-CN': {
    items: [
      {
        title: '天乙神算 — 八字命理AI测算平台',
        image: 'mlai.png',
        detailId: 3,
      },
      {
        title: '产品体验 — 感谢你们的支持和建议',
        image: 'gf.png',
        detailId: 4,
      },
    ],
  },
  'en-US': {
    items: [
      {
        title: 'Tianyi Fortune — BaZi AI Fortune Platform',
        image: 'mlai.png',
        detailId: 3,
      },
      {
        title: 'Product Experience — Thank you for your support',
        image: 'gf.png',
        detailId: 4,
      },
    ],
  },
};

interface AboutViewProps {
  onGoDetail: (num: number) => void;
}

export default function AboutView({ onGoDetail }: AboutViewProps) {
  const { currentLanguage } = useStore(languageStore);
  const texts = aboutTexts[currentLanguage];

  return (
    <div className="h-full bg-gray-50 pt-[65px]">
      {/* 主内容区 */}
      <div className="p-5 min-h-screen pb-[200px]">
        {/* 背景标题区 */}
        <div 
          className="w-full h-[320px] mb-[52px] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${about_bg})` }}
        />

        {/* 产品网格 */}
        <div className="flex items-center max-w-[1160px] mx-auto">
          <div className="flex flex-wrap w-full justify-center">
            {texts.items.map((item, index) => (
              <div
                key={index}
                className="w-[30%] bg-white rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 mt-5 ml-[15px] shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
                onClick={() => onGoDetail(item.detailId)}
              >
                <div className="w-full h-[250px] relative overflow-hidden">
                  <img
                    src={imageMap[item.image]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-800 text-center font-bold h-[72px] leading-[72px]">
                  {item.title}
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
