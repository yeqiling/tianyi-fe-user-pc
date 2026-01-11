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
    <div style={{ padding: '20px' }}>
      <h2>对话功能</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '40px', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p>对话功能开发中...</p>
        <p>将包含：</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>智能对话</li>
          <li>历史记录</li>
          <li>实时响应</li>
          <li>多轮对话</li>
        </ul>
        <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
          <p>当前对话: {currentDialog ? '有' : '无'}</p>
          <p>是否新对话: {isNew ? '是' : '否'}</p>
          <p>已生成报告: {hasGeneratedReport ? '是' : '否'}</p>
        </div>
      </div>
    </div>
  )
}
