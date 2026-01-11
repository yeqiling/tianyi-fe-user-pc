import { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { modalStore } from '../../stores/modalStore'
import qrPlaceholder from '@/assets/images/icon.png'
import yesIcon from '@/assets/images/yes.png'

interface VipModalProps {
  visible: boolean
  onUpdateVisible: (visible: boolean) => void
  onConfirm: () => void
  onPollOrderStatus: () => void
  onRedeemCodeSuccess: () => void
}

export default function VipModal({ 
  visible, 
  onUpdateVisible, 
  onConfirm, 
  onPollOrderStatus, 
  onRedeemCodeSuccess 
}: VipModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'weixin' | 'code'>('alipay')
  const [redeemCode, setRedeemCode] = useState('')
  const [vipMoney] = useState(168) // TODO: Get from API

  const hide = () => {
    onUpdateVisible(false)
  }

  const pay = () => {
    // TODO: Implement payment logic
    console.log('Payment method:', paymentMethod)
    onConfirm()
  }

  const handleRedeemCode = () => {
    if (redeemCode.trim()) {
      // TODO: Implement redeem code logic
      console.log('Redeem code:', redeemCode)
      onRedeemCodeSuccess()
    }
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* 遮罩层 */}
      <div 
        onClick={hide}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      />
      
      {/* 弹窗内容 */}
      <div style={{
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '12px',
        width: '800px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        {/* 标题栏 */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 30px',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
            天乙神算 VIP会员
          </h2>
          <button
            onClick={hide}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        {/* 内容区 */}
        <div style={{
          display: 'flex',
          minHeight: '500px'
        }}>
          {/* 左侧权益列表 */}
          <div style={{
            flex: 1,
            padding: '30px',
            backgroundColor: '#f8f9fa'
          }}>
            <div style={{ marginBottom: '20px' }}>
              {[
                'VIP会员资格，长期有效',
                '获得【命书】1.5万字报告（性格 / 事业 / 财富 / 婚恋 / 健康）',
                '获得50枚星币，1枚星币=1次深度对话，也可兑换报告',
                '会员每月惊喜福利',
                `原价: ¥268.00，早鸟价限时福利: ¥${vipMoney} 🔥`
              ].map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '15px',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  <img 
                    src={yesIcon} 
                    style={{ width: '16px', height: '16px', marginRight: '10px', marginTop: '2px' }}
                  />
                  <span style={{ 
                    color: index === 4 ? '#333' : '#666',
                    fontWeight: index === 4 ? 'bold' : 'normal'
                  }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* 二维码展示区域 */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '30px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={qrPlaceholder} 
                  style={{ width: '80px', height: '80px', marginBottom: '8px' }}
                />
                <div style={{ fontSize: '12px', color: '#666' }}>微信扫码</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={qrPlaceholder} 
                  style={{ width: '80px', height: '80px', marginBottom: '8px' }}
                />
                <div style={{ fontSize: '12px', color: '#666' }}>支付宝扫码</div>
              </div>
            </div>
          </div>

          {/* 右侧支付区域 */}
          <div style={{
            width: '300px',
            padding: '30px',
            borderLeft: '1px solid #e0e0e0'
          }}>
            {/* 支付方式切换 */}
            <div style={{
              display: 'flex',
              marginBottom: '30px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              {[
                { key: 'alipay', label: '支付宝' },
                { key: 'weixin', label: '微信支付' },
                { key: 'code', label: '兑换码支付' }
              ].map(method => (
                <button
                  key={method.key}
                  onClick={() => setPaymentMethod(method.key as any)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    background: 'none',
                    border: 'none',
                    borderBottom: paymentMethod === method.key ? '2px solid #1976d2' : '2px solid transparent',
                    color: paymentMethod === method.key ? '#1976d2' : '#666',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {method.label}
                </button>
              ))}
            </div>

            {/* 支付内容 */}
            {paymentMethod === 'alipay' && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={pay}
                  style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  立即开通
                </button>
              </div>
            )}

            {paymentMethod === 'weixin' && (
              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={pay}
                  disabled
                  style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'not-allowed'
                  }}
                >
                  立即开通
                </button>
                <div style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
                  微信支付暂未开放
                </div>
              </div>
            )}

            {paymentMethod === 'code' && (
              <div>
                <input
                  type="text"
                  value={redeemCode}
                  onChange={(e) => setRedeemCode(e.target.value)}
                  placeholder="请输入兑换码"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px',
                    marginBottom: '15px',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  onClick={handleRedeemCode}
                  style={{
                    width: '100%',
                    padding: '15px',
                    backgroundColor: redeemCode.trim() ? '#1976d2' : '#ccc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: redeemCode.trim() ? 'pointer' : 'not-allowed'
                  }}
                  disabled={!redeemCode.trim()}
                >
                  兑换
                </button>
              </div>
            )}

            {/* 价格显示 */}
            <div style={{
              textAlign: 'center',
              marginTop: '30px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff3b30' }}>
                ¥{vipMoney}
              </div>
              <div style={{ fontSize: '12px', color: '#999', textDecoration: 'line-through' }}>
                原价 ¥268
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
