import { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { navigationStore } from '../../stores/navigationStore'
import baogaoIcon from '@/assets/images/baogao.png'
import duihuaIcon from '@/assets/images/duihua.png'
import isbaogaoIcon from '@/assets/images/isbaogao.png'
import isduihuaIcon from '@/assets/images/isduihua.png'
import iswdzjIcon from '@/assets/images/iswdzj.png'
import wdzjIcon from '@/assets/images/wdzj.png'

interface BaziSidebarProps {
  titleIcon: string
  title: string
  activeMenu: string
  onBack: () => void
  onSelect: (item: string) => void
  onClickReport: () => void
  onNewDialog: () => void
  onSelectHistory: (item: any) => void
  onBackToMingshu: () => void
  onCreateNewReport: () => void
  onSelectReportHistory: (item: any) => void
  onUpdateLatestReport: (data: any) => void
  onShowVip: () => void
  onCesuanbeijingFunction: (data: any) => void
  onShowMyMemberPage: () => void
}

export default function BaziSidebar({
  titleIcon,
  title,
  activeMenu,
  onBack,
  onSelect,
  onClickReport,
  onNewDialog,
  onSelectHistory,
  onBackToMingshu,
  onCreateNewReport,
  onSelectReportHistory,
  onUpdateLatestReport,
  onShowVip,
  onCesuanbeijingFunction,
  onShowMyMemberPage
}: BaziSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [reportHistoryList, setReportHistoryList] = useState<any[]>([])
  
  const navState = useStore(navigationStore)

  // 直接显示报告的项目
  const titleArr = ['性格内观', '事业财富', '婚恋感情', '身体健康']

  const handleVisible = () => {
    setCollapsed(!collapsed)
  }

  const selectItem = (item: string) => {
    setActiveItem(item)
    onSelect(item)
  }

  const createNewReport = () => {
    onCreateNewReport()
  }

  const loadReportAndDialogs = (item: any) => {
    onSelectReportHistory(item)
  }

  return (
    <div
      className={`${collapsed ? 'w-[60px]' : 'w-[300px]'} flex h-full flex-col border-r border-[#e0e0e0] bg-white transition-[width] duration-300 ease-in-out`}
    >
      {/* 顶部标题栏 */}
      <div className="flex items-center justify-between border-b border-[#e0e0e0] p-5">
        {!collapsed && (
          <div className="flex items-center">
            <img
              src={titleIcon}
              className="mr-2.5 h-6 w-6"
            />
            <span className="text-base font-bold">{title}</span>
          </div>
        )}
        
        <button
          onClick={handleVisible}
          className="cursor-pointer border-0 bg-transparent px-2 py-1 text-lg"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* 报告区域（仅对 titleArr 中的项显示） */}
          {titleArr.includes(title) && (
            <div className="border-b border-[#e0e0e0] p-5">
              <div className="mb-[15px] flex items-center justify-between">
                <span className="text-sm font-bold">
                  {title}报告
                </span>
                <button
                  onClick={createNewReport}
                  className="cursor-pointer rounded border border-[#1976d2] bg-transparent px-2 py-1 text-xs text-[#1976d2]"
                >
                  + 新报告
                </button>
              </div>
              
              <div className="max-h-[200px] overflow-y-auto">
                {reportHistoryList.length > 0 ? (
                  reportHistoryList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => loadReportAndDialogs(item)}
                      className="mb-2 cursor-pointer rounded bg-[#f5f5f5] p-2.5 hover:bg-[#e3f2fd]"
                    >
                      <div className="text-[13px] font-bold">
                        {item.title || ''}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-5 text-center text-xs text-[#999]">
                    暂无报告
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 功能列表（非 titleArr 项才显示排盘/报告/对话） */}
          {!titleArr.includes(title) && (
            <div className="flex-1 p-5">
              {/* 八字排盘 */}
              {title === '八字排盘' && (
                <div
                  onClick={() => selectItem(title)}
                  className={`mb-2 flex cursor-pointer items-center rounded-lg p-3 ${activeItem === title ? 'bg-[#e3f2fd]' : 'bg-transparent'}`}
                >
                  <img
                    src={activeItem === title ? iswdzjIcon : wdzjIcon}
                    className="mr-2.5 h-5 w-5"
                  />
                  <span className="text-sm">{title}</span>
                </div>
              )}

              {/* 报告 */}
              <div
                onClick={() => selectItem(`${title}报告`)}
                className={`mb-2 flex cursor-pointer items-center rounded-lg p-3 ${activeItem === `${title}报告` ? 'bg-[#e3f2fd]' : 'bg-transparent'}`}
              >
                <img
                  src={activeItem === `${title}报告` ? isbaogaoIcon : baogaoIcon}
                  className="mr-2.5 h-5 w-5"
                />
                <span className="text-sm">{title}报告</span>
              </div>

              {/* 对话 */}
              <div
                onClick={() => selectItem(`${title}对话`)}
                className={`mb-2 flex cursor-pointer items-center rounded-lg p-3 ${activeItem === `${title}对话` ? 'bg-[#e3f2fd]' : 'bg-transparent'}`}
              >
                <img
                  src={activeItem === `${title}对话` ? isduihuaIcon : duihuaIcon}
                  className="mr-2.5 h-5 w-5"
                />
                <span className="text-sm">{title}对话</span>
              </div>
            </div>
          )}

          {/* 底部返回按钮 */}
          <div className="border-t border-[#e0e0e0] p-5">
            <button
              onClick={onBackToMingshu}
              className="w-full cursor-pointer rounded-md border border-[#ddd] bg-[#f5f5f5] p-2.5 text-sm"
            >
              返回命书
            </button>
          </div>
        </>
      )}
    </div>
  )
}
