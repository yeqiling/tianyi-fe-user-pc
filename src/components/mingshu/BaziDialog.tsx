interface BaziDialogProps {
  currentDialog: any
  isNew: boolean
  currentData: any
  isPollingCancelled: boolean
  hasGeneratedReport: boolean
  onNewDialogCreated: (dialog: any) => void
  onUpdateMoney: (amount: number) => void
}

export default function BaziDialog({ 
  currentDialog, 
  isNew, 
  currentData, 
  isPollingCancelled, 
  hasGeneratedReport,
  onNewDialogCreated, 
  onUpdateMoney 
}: BaziDialogProps) {
  return (
    <div className="p-5">
      <h2>对话功能</h2>
      <div className="rounded-lg bg-[#f8f9fa] p-10 text-center">
        <p>对话功能开发中...</p>
        <p>将包含：</p>
        <ul className="inline-block text-left">
          <li>智能对话</li>
          <li>历史记录</li>
          <li>实时响应</li>
          <li>多轮对话</li>
        </ul>
        <div className="mt-5 text-xs text-[#666]">
          <p>当前对话: {currentDialog ? '有' : '无'}</p>
          <p>是否新对话: {isNew ? '是' : '否'}</p>
          <p>已生成报告: {hasGeneratedReport ? '是' : '否'}</p>
        </div>
      </div>
    </div>
  )
}
