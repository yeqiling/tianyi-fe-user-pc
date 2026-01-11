import { useState } from 'react'
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

interface StartHunLianProps {
  title: string
  onShowReport: (data: any) => void
  onPaySuccess: () => void
  onCesuanbeijingFunction: (data: any) => void
  onShowVip: () => void
  onGetReportFive: (data: any) => void
  onShowMyMemberPage: () => void
}

export default function StartHunLian({
  title,
  onShowReport,
  onPaySuccess,
  onCesuanbeijingFunction,
  onShowVip,
  onGetReportFive,
  onShowMyMemberPage
}: StartHunLianProps) {
  const [modelShow, setModelShow] = useState(false)
  const [xingbi] = useState(10) // TODO: Get from API based on service type
  
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

  const passwordClose = () => {
    setModelShow(false)
  }

  const onFormDataChange = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  const onSave = () => {
    // TODO: Save form data
    console.log('Save form data:', formData)
  }

  const onCancel = () => {
    setModelShow(false)
  }

  const handleSubmit = () => {
    // TODO: Submit form and generate report
    console.log('Submit form:', formData)
    onShowReport(formData)
    setModelShow(false)
  }

  const paySuccess = () => {
    onPaySuccess()
  }

  const cesuanbeijingFun = (data: any) => {
    onCesuanbeijingFunction(data)
  }

  const showVipFun = () => {
    onShowVip()
  }

  const getReportFive = (data: any) => {
    onGetReportFive(data)
  }

  const closeOuterPopup = () => {
    setModelShow(false)
  }

  const showMyMemberPage = () => {
    onShowMyMemberPage()
  }

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      {/* 标题 */}
      <div style={{ marginBottom: '40px' }}>
        <img 
          src={config.titleBg}
          style={{ maxWidth: '400px', height: 'auto' }}
        />
      </div>

      {/* 主题图片 */}
      <div style={{ marginBottom: '40px' }}>
        <img 
          src={config.bg}
          style={{ 
            maxWidth: '600px', 
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* 开启按钮区域 */}
      <div style={{ marginBottom: '40px' }}>
        <button
          onClick={startHunLian}
          style={{
            backgroundImage: `url(${config.btnBg})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            border: 'none',
            padding: '20px 60px',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: '20px',
            minWidth: '200px',
            minHeight: '60px'
          }}
        >
          开启{title}
        </button>
        
        <div style={{ 
          fontSize: '16px', 
          color: '#666',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span>6000字合盘报告</span>
          <img src={xingIcon} style={{ width: '20px', height: '20px' }} />
          <span style={{ color: '#ff3b30', fontWeight: 'bold' }}>
            {xingbi}星币可兑换
          </span>
        </div>
      </div>

      {/* 弹窗 - 简化版表单 */}
      {modelShow && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '30px',
            width: '500px',
            maxWidth: '90vw',
            maxHeight: '80vh',
            overflow: 'auto'
          }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
              完善信息 - {title}
            </h3>
            
            {/* 简化的表单 */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                姓名：
              </label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => onFormDataChange({ nickname: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                性别：
              </label>
              <select
                value={formData.gender}
                onChange={(e) => onFormDataChange({ gender: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              >
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                出生日期：
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="number"
                  placeholder="年"
                  value={formData.year}
                  onChange={(e) => onFormDataChange({ year: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <input
                  type="number"
                  placeholder="月"
                  value={formData.month}
                  onChange={(e) => onFormDataChange({ month: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
                <input
                  type="number"
                  placeholder="日"
                  value={formData.day}
                  onChange={(e) => onFormDataChange({ day: e.target.value })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>

            {/* 按钮组 */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              justifyContent: 'center',
              marginTop: '30px'
            }}>
              <button
                onClick={onCancel}
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                取消
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  padding: '12px 30px',
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
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
