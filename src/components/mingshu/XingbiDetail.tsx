interface XingbiDetailProps {
  showModal: boolean
  money: number
  onClose: () => void
}

export default function XingbiDetail({ showModal, money, onClose }: XingbiDetailProps) {
  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[400px] max-w-[90vw] rounded-xl bg-white p-[30px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-xl font-bold">星币详情</h2>
          <button
            onClick={onClose}
            className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
          >
            ×
          </button>
        </div>

        <div className="p-5 text-center">
          <div className="mb-2.5 text-5xl font-bold text-[#ff6b35]">
            {money}
          </div>
          <div className="mb-5 text-base text-[#666]">
            当前星币余额
          </div>
          
          <div className="rounded-lg bg-[#f8f9fa] p-5 text-left">
            <h4 className="mb-2 text-base font-bold">星币用途：</h4>
            <ul className="m-0 list-disc pl-5">
              <li>1星币 = 1次深度对话</li>
              <li>可兑换各类报告</li>
              <li>解锁高级功能</li>
              <li>购买会员服务</li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="mt-5 cursor-pointer rounded-md border-0 bg-[#1976d2] px-[30px] py-2.5 text-white"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  )
}
