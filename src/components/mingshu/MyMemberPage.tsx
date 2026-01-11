interface MyMemberPageProps {
  onClose: () => void
  onShowModal: () => void
  onShoweditModal: () => void
  onShowSubAccModal: () => void
  onPollOrderStatus: () => void
}

export default function MyMemberPage({
  onClose,
  onShowModal,
  onShoweditModal,
  onShowSubAccModal,
  onPollOrderStatus
}: MyMemberPageProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="max-h-[80vh] w-[500px] max-w-[90vw] overflow-auto rounded-xl bg-white p-[30px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-xl font-bold">我的会员</h2>
          <button
            onClick={onClose}
            className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
          >
            ×
          </button>
        </div>

        <div className="px-5 py-10 text-center">
          <p>会员功能开发中...</p>
          <p>将包含：</p>
          <ul className="inline-block text-left">
            <li>会员信息展示</li>
            <li>星币余额管理</li>
            <li>订单历史</li>
            <li>个人信息编辑</li>
            <li>子账户管理</li>
          </ul>
          
          <div className="mt-[30px] flex justify-center gap-2.5">
            <button
              onClick={onShowModal}
              className="cursor-pointer rounded-md border-0 bg-[#1976d2] px-5 py-2.5 text-white"
            >
              星币详情
            </button>
            <button
              onClick={onShoweditModal}
              className="cursor-pointer rounded-md border-0 bg-[#4caf50] px-5 py-2.5 text-white"
            >
              编辑信息
            </button>
            <button
              onClick={onShowSubAccModal}
              className="cursor-pointer rounded-md border-0 bg-[#ff9800] px-5 py-2.5 text-white"
            >
              子账户
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
