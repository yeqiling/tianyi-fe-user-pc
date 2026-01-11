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
    <div className="p-5">
      <h2>{title}</h2>
      <div className="rounded-lg bg-[#f8f9fa] p-10 text-center">
        <p>报告功能开发中...</p>
        <p>将包含：</p>
        <ul className="inline-block text-left">
          <li>报告生成</li>
          <li>内容展示</li>
          <li>历史记录</li>
          <li>导出功能</li>
        </ul>
        {message && (
          <div className="mt-5 rounded bg-[#e3f2fd] p-2.5">
            <strong>测算背景：</strong> {message}
          </div>
        )}
      </div>
    </div>
  )
}
