import { useStore } from '@tanstack/react-store'
import { useNavigate } from '@tanstack/react-router'
import { navigationActions } from '../../stores/navigationStore'
import { userStore } from '../../stores/userStore'
import daoIcon from '@/assets/images/dao.png'
import xingIcon from '@/assets/images/xing.png'
import xing2Icon from '@/assets/images/xing2.png'
import yunTitle from '@/assets/images/yun-title.png'
import yun1Icon from '@/assets/images/yun1.png'
import yun2Icon from '@/assets/images/yun2.png'
import yun3Icon from '@/assets/images/yun3.png'
import yun4Icon from '@/assets/images/yun4.png'
import yun5Icon from '@/assets/images/yun5.png'
import yun6Icon from '@/assets/images/yun6.png'

export default function YungeWelcome() {
  const userState = useStore(userStore)
  const navigate = useNavigate()

  const goToService = (service: string, icon: string) => {
    navigationActions.showService({ name: service, icon })
    navigate({ to: '/mingshu/bazi' })
  }

  const yungeServices = [
    { name: '2026年运', icon: yun1Icon, desc: '多维解读 运势详批' },
    { name: '婚恋合盘', icon: yun2Icon, desc: '合盘分析 缘分深浅' },
    { name: '事业合盘', icon: yun3Icon, desc: '事业合作 共创辉煌' },
    { name: '每日运势', icon: yun4Icon, desc: '每日指引 趋利避害' },
    { name: '前世今生', icon: yun5Icon, desc: '前世因缘 今生果报' },
    { name: '起名', icon: yun6Icon, desc: '姓名学说 吉祥如意' },
    { name: '好运锦囊', icon: daoIcon, desc: '开运秘籍 好运连连' }
  ]

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
            src={yunTitle}
            className="h-auto max-w-[300px]"
          />
        </div>
      </div>

      {/* 运阁服务网格 */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5">
        {yungeServices.map((service) => (
          <div
            key={service.name}
            onClick={() => goToService(service.name, service.icon)}
            className="flex cursor-pointer items-center rounded-xl border border-[#e0e0e0] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          >
            <img 
              src={xing2Icon} 
              className="mr-[15px] h-6 w-6"
            />
            <img 
              src={service.icon}
              className="mr-5 h-10 w-10"
            />
            <div>
              <div className="mb-1 text-lg font-bold text-[#333]">
                {service.name}
              </div>
              <div className="text-sm text-[#666]">
                {service.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
