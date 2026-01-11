import { useStore } from '@tanstack/react-store'
import { modalActions, modalStore } from '../../stores/modalStore'

export default function EditUserInfo() {
  const modalState = useStore(modalStore)

  if (!modalState.showEditUserInfo) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[400px] max-w-[90vw] rounded-xl bg-white p-[30px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-xl font-bold">编辑用户信息</h2>
          <button
            onClick={modalActions.hideEditUserInfo}
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
              placeholder="请输入用户名"
              className="w-full rounded-md border border-[#ddd] p-2.5 text-sm"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-bold">头像：</label>
            <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[#ddd] bg-[#f0f0f0]">
              <span className="text-xs text-[#666]">点击上传</span>
            </div>
          </div>

          <div className="mt-[30px] flex justify-center gap-4">
            <button
              onClick={modalActions.hideEditUserInfo}
              className="cursor-pointer rounded-md border border-[#ddd] bg-[#f5f5f5] px-5 py-2.5"
            >
              取消
            </button>
            <button
              onClick={modalActions.hideEditUserInfo}
              className="cursor-pointer rounded-md border-0 bg-[#1976d2] px-5 py-2.5 text-white"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
