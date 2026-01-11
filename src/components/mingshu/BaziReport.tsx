interface BaziReportProps {
  title: string
  message: string
  onUpdateReportList: () => void
  onShowLoading: (show: boolean) => void
  onNewDialogCreated: (dialog: any) => void
}

export default function BaziReport({ 
  title, 
  message, 
  onUpdateReportList, 
  onShowLoading, 
  onNewDialogCreated 
}: BaziReportProps) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{title}</h2>
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '40px', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <p>报告功能开发中...</p>
        <p>将包含：</p>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>报告生成</li>
          <li>内容展示</li>
          <li>历史记录</li>
          <li>导出功能</li>
        </ul>
        {message && (
          <div style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#e3f2fd',
            borderRadius: '4px'
          }}>
            <strong>测算背景：</strong> {message}
          </div>
        )}
      </div>
    </div>
  )
}
