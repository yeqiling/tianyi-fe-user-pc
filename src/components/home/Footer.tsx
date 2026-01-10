import { useStore } from '@tanstack/react-store';
import { languageStore } from '../../stores/languageStore';
import iconLogoBlack from '@/assets/images/icon_logo_black.png';
import xjt from '@/assets/images/xjt.png';
import img21 from '@/assets/images/21.png';
import img22 from '@/assets/images/22.png';

const footerTexts = {
  'zh-CN': {
    copyright: '© 2025 天乙神算. 保留所有权利.',
    qrLabels: ['芷暄师妹', '丁火师妹'],
  },
  'en-US': {
    copyright: '© 2025 Tianyi Fortune. All rights reserved.',
    qrLabels: ['Master Zhixuan', 'Master Dinghuo'],
  },
};

export default function Footer() {
  const { currentLanguage } = useStore(languageStore);
  const texts = footerTexts[currentLanguage];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-white px-5">
      <div className="flex justify-between items-start gap-8 mb-8">
        <div className="mt-14">
          <img src={iconLogoBlack} alt="" className="h-9 w-34 ml-28" />
          <div className="mt-4 ml-28 font-normal text-lg text-slate-600">
            {texts.copyright}
          </div>
        </div>

        <div>
          <h3 className="text-base mb-3 text-center mt-3">
            <img src={xjt} alt="" className="w-5 h-3" />
          </h3>
          <div className="flex gap-5">
            {[img21, img22].map((image, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <img
                  src={image}
                  alt=""
                  className="w-20 h-20 rounded bg-white"
                />
                <span className="text-xs text-gray-300 mt-1">
                  {texts.qrLabels[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
