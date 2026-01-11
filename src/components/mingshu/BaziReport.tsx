import { useStore } from '@tanstack/react-store'
import { dialogStore } from '../../stores/dialogStore'
import { navigationStore } from '../../stores/navigationStore'

export default function BaziReport() {
  const dialogState = useStore(dialogStore)
  const navState = useStore(navigationStore)

  return (
    <div className="p-5">
      <h2>{navState.selectedItem}</h2>
      <div className="rounded-lg bg-[#f8f9fa] p-10 text-center">
        <p>报告功能开发中...</p>
        <p>将包含：</p>
        <ul className="inline-block text-left">
          <li>报告生成</li>
          <li>内容展示</li>
          <li>历史记录</li>
          <li>导出功能</li>
        </ul>
        {dialogState.reportMessage && (
          <div className="mt-5 rounded bg-[#e3f2fd] p-2.5">
            <strong>测算背景：</strong> {dialogState.reportMessage}
          </div>
        )}
      </div>
    </div>
  )
}
