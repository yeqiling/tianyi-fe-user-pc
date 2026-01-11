import { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { modalActions, modalStore } from '../../stores/modalStore'
import qrPlaceholder from '@/assets/images/icon.png'
import yesIcon from '@/assets/images/yes.png'

export default function VipModal() {
  const [paymentMethod, setPaymentMethod] = useState<'alipay' | 'weixin' | 'code'>('alipay')
  const [redeemCode, setRedeemCode] = useState('')
  const [vipMoney] = useState(168) // TODO: Get from API
  const modalState = useStore(modalStore)

  const hide = () => {
    modalActions.hideVip()
  }

  const pay = () => {
    // TODO: Implement payment logic
    console.log('Payment method:', paymentMethod)
    modalActions.hideVip()
  }

  const handleRedeemCode = () => {
    if (redeemCode.trim()) {
      // TODO: Implement redeem code logic
      console.log('Redeem code:', redeemCode)
      modalActions.hideVip()
    }
  }

  if (!modalState.vipModelVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* 遮罩层 */}
      <div 
        onClick={hide}
        className="absolute inset-0 bg-black/50"
      />
      
      {/* 弹窗内容 */}
      <div className="relative max-h-[90vh] w-[800px] max-w-[90vw] overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        {/* 标题栏 */}
        <div className="flex items-center justify-between border-b border-[#e0e0e0] bg-[#f8f9fa] px-[30px] py-5">
          <h2 className="m-0 text-xl font-bold">
            天乙神算 VIP会员
          </h2>
          <button
            onClick={hide}
            className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
          >
            ×
          </button>
        </div>

        {/* 内容区 */}
        <div className="flex min-h-[500px]">
          {/* 左侧权益列表 */}
          <div className="flex-1 bg-[#f8f9fa] p-[30px]">
            <div className="mb-5">
              {[
                'VIP会员资格，长期有效',
                '获得【命书】1.5万字报告（性格 / 事业 / 财富 / 婚恋 / 健康）',
                '获得50枚星币，1枚星币=1次深度对话，也可兑换报告',
                '会员每月惊喜福利',
                `原价: ¥268.00，早鸟价限时福利: ¥${vipMoney} 🔥`
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="mb-[15px] flex items-start text-sm leading-[1.5]"
                >
                  <img 
                    src={yesIcon} 
                    className="mr-2.5 mt-0.5 h-4 w-4"
                  />
                  <span
                    className={index === 4 ? 'font-bold text-[#333]' : 'text-[#666]'}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* 二维码展示区域 */}
            <div className="mt-[30px] flex justify-around">
              <div className="text-center">
                <img 
                  src={qrPlaceholder} 
                  className="mb-2 h-20 w-20"
                />
                <div className="text-xs text-[#666]">微信扫码</div>
              </div>
              <div className="text-center">
                <img 
                  src={qrPlaceholder} 
                  className="mb-2 h-20 w-20"
                />
                <div className="text-xs text-[#666]">支付宝扫码</div>
              </div>
            </div>
          </div>

          {/* 右侧支付区域 */}
          <div className="w-[300px] border-l border-[#e0e0e0] p-[30px]">
            {/* 支付方式切换 */}
            <div className="mb-[30px] flex border-b border-[#e0e0e0]">
              {[
                { key: 'alipay', label: '支付宝' },
                { key: 'weixin', label: '微信支付' },
                { key: 'code', label: '兑换码支付' }
              ].map(method => (
                <button
                  key={method.key}
                  onClick={() => setPaymentMethod(method.key as any)}
                  className={`flex-1 cursor-pointer border-0 border-b-2 bg-transparent py-2.5 text-sm ${paymentMethod === method.key ? 'border-[#1976d2] text-[#1976d2]' : 'border-transparent text-[#666]'}`}
                >
                  {method.label}
                </button>
              ))}
            </div>

            {/* 支付内容 */}
            {paymentMethod === 'alipay' && (
              <div className="text-center">
                <button
                  onClick={pay}
                  className="w-full cursor-pointer rounded-lg border-0 bg-[#1976d2] p-[15px] text-base font-bold text-white"
                >
                  立即开通
                </button>
              </div>
            )}

            {paymentMethod === 'weixin' && (
              <div className="text-center">
                <button
                  onClick={pay}
                  disabled
                  className="w-full cursor-not-allowed rounded-lg border-0 bg-[#ccc] p-[15px] text-base font-bold text-white"
                >
                  立即开通
                </button>
                <div className="mt-2.5 text-xs text-[#999]">
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
                  className="mb-[15px] w-full rounded-md border border-[#ddd] p-3 text-sm"
                />
                <button
                  onClick={handleRedeemCode}
                  className={`w-full rounded-lg border-0 p-[15px] text-base font-bold text-white ${redeemCode.trim() ? 'cursor-pointer bg-[#1976d2]' : 'cursor-not-allowed bg-[#ccc]'}`}
                  disabled={!redeemCode.trim()}
                >
                  兑换
                </button>
              </div>
            )}

            {/* 价格显示 */}
            <div className="mt-[30px] rounded-lg bg-[#f8f9fa] p-5 text-center">
              <div className="text-2xl font-bold text-[#ff3b30]">
                ¥{vipMoney}
              </div>
              <div className="text-xs text-[#999] line-through">
                原价 ¥268
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
