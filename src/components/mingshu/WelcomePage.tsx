import { useStore } from '@tanstack/react-store';
import { navigationActions, navigationStore } from '../../stores/navigationStore';
import { userStore } from '../../stores/userStore';
import daoIcon from '@/assets/images/dao.png';
import deIcon from '@/assets/images/de.png';
import juIcon from '@/assets/images/ju.png';
import luIcon from '@/assets/images/lu.png';
import mingIcon from '@/assets/images/ming_icon.png';
import msTitle from '@/assets/images/ms_title.png';
import shouluIcon from '@/assets/images/shoulu.png';
import smzxjTitle from '@/assets/images/smzxj.png';
import vIcon from '@/assets/images/v.png';
import xIcon from '@/assets/images/x.png';
import xiIcon from '@/assets/images/xi.png';
import xingIcon from '@/assets/images/xing.png';
import yun1Icon from '@/assets/images/yun1.png';
import yun2Icon from '@/assets/images/yun2.png';
import yun3Icon from '@/assets/images/yun3.png';
import yun4Icon from '@/assets/images/yun4.png';
import yun5Icon from '@/assets/images/yun5.png';

export default function WelcomePage() {
  const userState = useStore(userStore);
  const navState = useStore(navigationStore);

  const showService = (service: string, icon: string) => {
    navigationActions.showService({ name: service, icon });
  };

  const services = [
    { name: '八字排盘', icon: juIcon, desc: '八字推演 运程排布' },
    { name: '性格内观', icon: deIcon, desc: '灵魂内观 观心悟道' },
    { name: '事业财富', icon: luIcon, desc: '事业规划 财富格局' },
    { name: '婚恋感情', icon: xiIcon, desc: '恋爱情缘 婚姻美满' },
    { name: '身体健康', icon: shouluIcon, desc: '健康养生 延年益寿' },
    { name: '学业发展', icon: xIcon, desc: '学业进步 智慧开启' },
    { name: '2026年运', icon: yun1Icon, desc: '流年运势 趋吉避凶' },
    { name: '婚恋合盘', icon: yun2Icon, desc: '合盘分析 缘分深浅' },
    { name: '事业合盘', icon: yun3Icon, desc: '事业合作 共创辉煌' },
    { name: '每日运势', icon: yun4Icon, desc: '每日指引 趋利避害' },
    { name: '前世今生', icon: yun5Icon, desc: '前世因缘 今生果报' },
    { name: '起名', icon: mingIcon, desc: '姓名学说 吉祥如意' },
    { name: '好运锦囊', icon: daoIcon, desc: '开运秘籍 好运连连' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-10">
      {/* 欢迎区域 */}
      <div className="mb-10 text-center">
        <div className="mb-5 flex items-center justify-center gap-2.5 text-2xl font-bold">
          <span>欢迎回来，{userState.userInfo.userName || '普通用户'}道友</span>
          <img src={xingIcon} className="h-6 w-6" />
          <span
            className={`text-sm font-normal ${userState.isVip ? 'text-[#ff6b35]' : 'text-[#999]'}`}
          >
            {userState.isVip ? 'VIP用户' : ''}
          </span>
        </div>

        <div>
          <img
            src={navState.activeMenu === '命书' ? msTitle : smzxjTitle}
            className="h-auto max-w-[300px]"
          />
        </div>
      </div>

      {/* 服务网格 */}
      {navState.activeMenu === '命书' && (
        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => showService(service.name, service.icon)}
              className="flex cursor-pointer items-center rounded-xl border border-[#e0e0e0] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
            >
              <img src={vIcon} className="mr-[15px] h-6 w-6" />
              <img src={service.icon} className="mr-5 h-10 w-10" />
              <div>
                <div className="mb-1 text-lg font-bold text-[#333]">
                  {service.name}
                </div>
                <div className="text-sm text-[#666]">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 宝阁内容 */}
      {navState.activeMenu === '宝阁' && (
        <div className="px-5 py-[60px] text-center">
          <div className="mb-5 text-xl text-[#666]">宝阁功能即将上线</div>
          <div className="text-sm text-[#999]">敬请期待更多精彩内容</div>
        </div>
      )}
    </div>
  );
}
