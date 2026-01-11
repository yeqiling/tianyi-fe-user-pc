import { useStore } from '@tanstack/react-store'
import { dialogStore } from '../../stores/dialogStore'

export default function BaziDialog() {
  const dialogState = useStore(dialogStore)

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
          <p>当前对话: {dialogState.currentDialog ? '有' : '无'}</p>
          <p>是否新对话: {dialogState.isNew ? '是' : '否'}</p>
          <p>已生成报告: {dialogState.latestReportData ? '是' : '否'}</p>
        </div>
      </div>
    </div>
  )
}
