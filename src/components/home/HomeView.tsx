import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import { languageStore } from '../../stores/languageStore';
import homeText from '@/assets/images/home_text.png';
import homeBg from '@/assets/images/home_bg.png';
import msC from '@/assets/images/ms_c.png';
import ygC from '@/assets/images/yg_c.png';
import iconLogoBg from '@/assets/images/icon_logo_bg.png';
import img21 from '@/assets/images/21.png';
import img22 from '@/assets/images/22.png';

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
    terms: '用户协议',
  },
  'en-US': {
    subtitle: 'Summon AI Master, Start Real-time Conversation',
    tryNow: 'Try Now',
    tryNowLarge: 'Try Now',
    contact: 'Contact Us',
    email: 'Email: service@klxtech.com',
    address: 'Address: 36 Shenbin Road, Minhang District, Shanghai',
    customerService: 'Customer Service',
    copyright:
      '© 2025 Kunlunxu (Shanghai) Network Technology Co., Ltd. All rights reserved',
    icp: 'ICP: 2025131650-2',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
};

export default function HomeView() {
  const { currentLanguage } = useStore(languageStore);
  const navigate = useNavigate();
  const texts = homeTexts[currentLanguage];

  const handleLogin = () => {
    navigate({ to: '/login' });
  };

  return (
    <div className="font-['Microsoft_YaHei'] bg-white">
      {/* 主视觉区域 */}
      <div className="relative overflow-hidden text-center mt-[65px] bg-gray-50">
        {/* Hero Content */}
        <div className="h-[210px] flex flex-col items-center justify-center z-[2] mx-auto">
          <img src={homeText} alt="主标题" className="h-[60px] mb-6" />
          <p className="text-base text-gray-600 mb-5 leading-[1.6]">
            {texts.subtitle}
          </p>
          <button
            className="w-[132px] h-[52px] leading-[52px] font-medium text-lg text-white bg-[#5F5F5F] shadow-[0px_6px_12px_1px_rgba(0,0,0,0.16)] rounded-[26px] border-none cursor-pointer transition-colors hover:bg-[#005bb5]"
            onClick={handleLogin}
          >
            {texts.tryNow}
          </button>
        </div>

        {/* Background Image */}
        <div className="left-0 right-0 bottom-0 z-[1] overflow-hidden">
          <img src={homeBg} alt="背景" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 命书区域 */}
      <div className="py-10 bg-gray-50">
        <img
          src={msC}
          alt="命书"
          className="w-[800px] h-[417px] block mx-auto"
        />
      </div>

      {/* 易经区域 */}
      <div className="py-10 bg-white">
        <img
          src={ygC}
          alt="易经"
          className="w-[800px] h-[417px] block mx-auto"
        />
      </div>

      {/* 立即体验按钮 */}
      <div className="py-10 bg-white">
        <button
          className="w-[200px] h-[52px] leading-[52px] mx-auto font-medium text-lg text-white bg-[#5f5f5f] shadow-[0px_6px_12px_1px_rgba(0,0,0,0.16)] rounded-[26px] border-none cursor-pointer block transition-colors hover:bg-[#005bb5]"
          onClick={handleLogin}
        >
          {texts.tryNowLarge}
        </button>
      </div>

      {/* 底部版权区 */}
      <footer className="bg-black text-white px-5 pt-[30px] pb-5 mt-[30px]">
        <div className="flex justify-between items-start gap-[30px] mb-[30px]">
          <div>
            <img src={iconLogoBg} alt="Logo" className="h-[30px]" />
          </div>

          <div>
            <h3 className="text-base mb-2.5 font-normal">{texts.contact}</h3>
            <p className="text-sm text-gray-300 mb-1.5 m-0">{texts.email}</p>
            <p className="text-sm text-gray-300 m-0">{texts.address}</p>
          </div>

          <div>
            <h3 className="text-base mb-2.5 text-right font-normal">
              {texts.customerService}
            </h3>
            <div className="flex gap-5">
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src={img21}
                  alt="芷暄师妹"
                  className="w-20 h-20 rounded bg-white"
                />
                <span className="text-xs text-gray-300 mt-1.5">芷暄师妹</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <img
                  src={img22}
                  alt="丁火师妹"
                  className="w-20 h-20 rounded bg-white"
                />
                <span className="text-xs text-gray-300 mt-1.5">丁火师妹</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-800 pt-[15px] text-xs text-gray-500">
          <div>
            <div>{texts.copyright}</div>
            <div>{texts.icp}</div>
          </div>

          <div className="flex gap-[15px]">
            <span className="cursor-pointer hover:text-white">
              {texts.privacy}
            </span>
            <span className="cursor-pointer hover:text-white">
              {texts.terms}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
