import { useStore } from '@tanstack/react-store'
import { modalActions, modalStore } from '../../stores/modalStore'
import { userStore } from '../../stores/userStore'
import touxiangIcon from '@/assets/images/touxiang.png'

export default function SubAccountList() {
  const modalState = useStore(modalStore)
  const userState = useStore(userStore)

  if (!modalState.subAccModal) return null

  const subAccounts = userState.subAccounts

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="max-h-[80vh] w-[500px] max-w-[90vw] overflow-auto rounded-xl bg-white p-[30px]">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="m-0 text-xl font-bold">子账户列表</h2>
          <button
            onClick={modalActions.hideSubAccountList}
            className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
          >
            ×
          </button>
        </div>

        <div className="mb-5">
          {subAccounts.length > 0 ? (
            subAccounts.map((account, index) => (
              <div
                key={account.user.userId ?? account.user.userName ?? `account-${index}`}
                className="mb-2.5 flex items-center rounded-lg border border-[#e0e0e0] p-[15px]"
              >
                <img
                  src={account.user.avatar || touxiangIcon}
                  className="mr-[15px] h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="mb-1 font-bold">
                    {account.user.userName || '子账户'}
                  </div>
                  <div className="text-xs text-[#666]">
                    创建时间: -
                  </div>
                </div>
                <button
                  className="cursor-pointer rounded bg-[#ff4444] px-3 py-1.5 text-xs text-white"
                >
                  删除
                </button>
              </div>
            ))
          ) : (
            <div className="px-5 py-10 text-center text-[#666]">
              暂无子账户
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={modalActions.hideSubAccountList}
            className="cursor-pointer rounded-md border-0 bg-[#1976d2] px-[30px] py-2.5 text-white"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
