interface AddSubAccountProps {
  showModal: boolean
  onCancel: () => void
  onUpdateXiaohao: () => void
}

export default function AddSubAccount({ showModal, onCancel, onUpdateXiaohao }: AddSubAccountProps) {
  if (!showModal) return null

  const handleSubmit = () => {
    // TODO: Add sub account logic
    console.log('Add sub account')
    onUpdateXiaohao()
    onCancel()
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[400px] max-w-[90vw] rounded-xl bg-white p-[30px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-xl font-bold">新增子账户</h2>
          <button
            onClick={onCancel}
            className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
          >
            ×
          </button>
        </div>

        <div className="py-5">
          <div className="mb-5">
            <label className="mb-2 block font-bold">用户名：</label>
            <input
              type="text"
              placeholder="请输入子账户用户名"
              className="w-full rounded-md border border-[#ddd] p-2.5 text-sm"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-bold">性别：</label>
            <select className="w-full rounded-md border border-[#ddd] p-2.5 text-sm">
              <option value="">请选择性别</option>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-bold">出生日期：</label>
            <input
              type="date"
              className="w-full rounded-md border border-[#ddd] p-2.5 text-sm"
            />
          </div>

          <div className="mt-[30px] flex justify-center gap-4">
            <button
              onClick={onCancel}
              className="cursor-pointer rounded-md border border-[#ddd] bg-[#f5f5f5] px-5 py-2.5"
            >
              取消
            </button>
            <button
              onClick={handleSubmit}
              className="cursor-pointer rounded-md border-0 bg-[#1976d2] px-5 py-2.5 text-white"
            >
              创建
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
