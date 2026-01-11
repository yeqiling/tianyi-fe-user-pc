import { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { dialogActions } from '../../stores/dialogStore'
import { navigationStore } from '../../stores/navigationStore'
import btn2026 from '@/assets/images/2026_btn_bg.png'
import bg2026 from '@/assets/images/2026ny_bg.png'
import title2026 from '@/assets/images/2026ny_t_bg.png'
import hlhpTitle from '@/assets/images/hlhp_t_bg.png'
import hunlianBg from '@/assets/images/hunlian_bg.png'
import hunlianBtn from '@/assets/images/hunlian_btn_bg.png'
import hyjnBg from '@/assets/images/hyjn_bg.png'
import hyjnBtn from '@/assets/images/hyjn_btn_bg.png'
import hyjnTitle from '@/assets/images/hyjn_t_bg.png'
import mrysBg from '@/assets/images/mrys_bg.png'
import mrysBtn from '@/assets/images/mrys_btn_bg.png'
import mrysTitle from '@/assets/images/mrys_t_bg.png'
import qmBg from '@/assets/images/qm_bg.png'
import qmBtn from '@/assets/images/qm_btn_bg.png'
import qmTitle from '@/assets/images/qmcf_t_bg.png'
import qsjsBg from '@/assets/images/qsjs_bg.png'
import qsjsBtn from '@/assets/images/qsjs_btn_bg.png'
import qsjsTitle from '@/assets/images/qsjs_t_bg.png'
import shiyeBtn from '@/assets/images/shiye_btn_bg.png'
import syhpBg from '@/assets/images/syhp_bg.png'
import syhpTitle from '@/assets/images/syhp_t_bg.png'
import xingIcon from '@/assets/images/xing.png'
import xyfzBg from '@/assets/images/xyfz_bg.png'
import xyfzBtn from '@/assets/images/xyfz_btn_bg.png'
import xyfzTitle from '@/assets/images/xyfz_t_bg.png'

export default function StartHunLian() {
  const [modelShow, setModelShow] = useState(false)
  const [xingbi] = useState(10) // TODO: Get from API based on service type
  const navState = useStore(navigationStore)
  const title = navState.selectedItem
  
  const [formData, setFormData] = useState({
    nickname: '小明',
    gender: '男',
    year: '2000',
    month: '4',
    day: '1',
    hour: '7',
    minute: '30',
    province: '山东省',
    city: '淄博市',
    district: '临淄区'
  })

  // 根据不同服务类型配置背景图片
  const getServiceConfig = (serviceTitle: string) => {
    const configs: Record<string, { bg: string, titleBg: string, btnBg: string }> = {
      '婚恋合盘': { bg: hunlianBg, titleBg: hlhpTitle, btnBg: hunlianBtn },
      '事业合盘': { bg: syhpBg, titleBg: syhpTitle, btnBg: shiyeBtn },
      '学业发展': { bg: xyfzBg, titleBg: xyfzTitle, btnBg: xyfzBtn },
      '2026年运': { bg: bg2026, titleBg: title2026, btnBg: btn2026 },
      '每日运势': { bg: mrysBg, titleBg: mrysTitle, btnBg: mrysBtn },
      '前世今生': { bg: qsjsBg, titleBg: qsjsTitle, btnBg: qsjsBtn },
      '起名': { bg: qmBg, titleBg: qmTitle, btnBg: qmBtn },
      '好运锦囊': { bg: hyjnBg, titleBg: hyjnTitle, btnBg: hyjnBtn }
    }
    return configs[serviceTitle] || configs['婚恋合盘']
  }

  const config = getServiceConfig(title)

  const startHunLian = () => {
    setModelShow(true)
  }

  const onFormDataChange = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  const onCancel = () => {
    setModelShow(false)
  }

  const handleSubmit = () => {
    // TODO: Submit form and generate report
    console.log('Submit form:', formData)
    dialogActions.showReport()
    setModelShow(false)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-10 text-center">
      {/* 标题 */}
      <div className="mb-10">
        <img
          src={config.titleBg}
          className="mx-auto h-auto max-w-[400px]"
        />
      </div>

      {/* 主题图片 */}
      <div className="mb-10">
        <img
          src={config.bg}
          className="mx-auto h-auto max-w-[600px] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* 开启按钮区域 */}
      <div className="mb-10">
        <button
          onClick={startHunLian}
          style={{ backgroundImage: `url(${config.btnBg})` }}
          className="mb-5 min-h-[60px] min-w-[200px] cursor-pointer border-0 bg-[length:100%_100%] bg-no-repeat px-[60px] py-5 text-xl font-bold text-white"
        >
          开启{title}
        </button>
        
        <div className="flex items-center justify-center gap-2 text-base text-[#666]">
          <span>6000字合盘报告</span>
          <img src={xingIcon} className="h-5 w-5" />
          <span className="font-bold text-[#ff3b30]">
            {xingbi}星币可兑换
          </span>
        </div>
      </div>

      {/* 弹窗 - 简化版表单 */}
      {modelShow && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="max-h-[80vh] w-[500px] max-w-[90vw] overflow-auto rounded-xl bg-white p-[30px]">
            <h3 className="mb-5 text-center text-lg font-bold">
              完善信息 - {title}
            </h3>
            
            {/* 简化的表单 */}
            <div className="mb-5">
              <label className="mb-2 block font-bold">姓名：</label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => onFormDataChange({ nickname: e.target.value })}
                className="w-full rounded-md border border-[#ddd] p-2.5 text-sm"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-bold">性别：</label>
              <select
                value={formData.gender}
                onChange={(e) => onFormDataChange({ gender: e.target.value })}
                className="w-full rounded-md border border-[#ddd] p-2.5 text-sm"
              >
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="mb-2 block font-bold">出生日期：</label>
              <div className="flex gap-2.5">
                <input
                  type="number"
                  placeholder="年"
                  value={formData.year}
                  onChange={(e) => onFormDataChange({ year: e.target.value })}
                  className="flex-1 rounded-md border border-[#ddd] p-2.5 text-sm"
                />
                <input
                  type="number"
                  placeholder="月"
                  value={formData.month}
                  onChange={(e) => onFormDataChange({ month: e.target.value })}
                  className="flex-1 rounded-md border border-[#ddd] p-2.5 text-sm"
                />
                <input
                  type="number"
                  placeholder="日"
                  value={formData.day}
                  onChange={(e) => onFormDataChange({ day: e.target.value })}
                  className="flex-1 rounded-md border border-[#ddd] p-2.5 text-sm"
                />
              </div>
            </div>

            {/* 按钮组 */}
            <div className="mt-[30px] flex justify-center gap-4">
              <button
                onClick={onCancel}
                className="cursor-pointer rounded-md border border-[#ddd] bg-[#f5f5f5] px-[30px] py-3 text-sm"
              >
                取消
              </button>
              <button
                onClick={handleSubmit}
                className="cursor-pointer rounded-md border-0 bg-[#1976d2] px-[30px] py-3 text-sm font-bold text-white"
              >
                开始测算
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
