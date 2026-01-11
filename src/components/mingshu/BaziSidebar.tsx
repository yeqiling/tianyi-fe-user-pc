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
    <div style={{
      width: collapsed ? '60px' : '300px',
      backgroundColor: '#fff',
      borderRight: '1px solid #e0e0e0',
      transition: 'width 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* 顶部标题栏 */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {!collapsed && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={titleIcon}
              style={{ width: '24px', height: '24px', marginRight: '10px' }}
            />
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</span>
          </div>
        )}
        
        <button
          onClick={handleVisible}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '4px 8px'
          }}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {!collapsed && (
        <>
          {/* 报告区域（仅对 titleArr 中的项显示） */}
          {titleArr.includes(title) && (
            <div style={{ padding: '20px', borderBottom: '1px solid #e0e0e0' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                  {title}报告
                </span>
                <button
                  onClick={createNewReport}
                  style={{
                    background: 'none',
                    border: '1px solid #1976d2',
                    color: '#1976d2',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  + 新报告
                </button>
              </div>
              
              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {reportHistoryList.length > 0 ? (
                  reportHistoryList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => loadReportAndDialogs(item)}
                      style={{
                        padding: '10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginBottom: '8px',
                        backgroundColor: '#f5f5f5'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    >
                      <div style={{ fontSize: '13px', fontWeight: 'bold' }}>
                        {item.title || ''}
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ 
                    textAlign: 'center', 
                    color: '#999', 
                    fontSize: '12px',
                    padding: '20px 0'
                  }}>
                    暂无报告
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 功能列表（非 titleArr 项才显示排盘/报告/对话） */}
          {!titleArr.includes(title) && (
            <div style={{ padding: '20px', flex: 1 }}>
              {/* 八字排盘 */}
              {title === '八字排盘' && (
                <div
                  onClick={() => selectItem(title)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    backgroundColor: activeItem === title ? '#e3f2fd' : 'transparent'
                  }}
                >
                  <img 
                    src={activeItem === title ? iswdzjIcon : wdzjIcon}
                    style={{ width: '20px', height: '20px', marginRight: '10px' }}
                  />
                  <span style={{ fontSize: '14px' }}>{title}</span>
                </div>
              )}

              {/* 报告 */}
              <div
                onClick={() => selectItem(`${title}报告`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  backgroundColor: activeItem === `${title}报告` ? '#e3f2fd' : 'transparent'
                }}
              >
                <img 
                  src={activeItem === `${title}报告` ? isbaogaoIcon : baogaoIcon}
                  style={{ width: '20px', height: '20px', marginRight: '10px' }}
                />
                <span style={{ fontSize: '14px' }}>{title}报告</span>
              </div>

              {/* 对话 */}
              <div
                onClick={() => selectItem(`${title}对话`)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '8px',
                  backgroundColor: activeItem === `${title}对话` ? '#e3f2fd' : 'transparent'
                }}
              >
                <img 
                  src={activeItem === `${title}对话` ? isduihuaIcon : duihuaIcon}
                  style={{ width: '20px', height: '20px', marginRight: '10px' }}
                />
                <span style={{ fontSize: '14px' }}>{title}对话</span>
              </div>
            </div>
          )}

          {/* 底部返回按钮 */}
          <div style={{ padding: '20px', borderTop: '1px solid #e0e0e0' }}>
            <button
              onClick={onBackToMingshu}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              返回命书
            </button>
          </div>
        </>
      )}
    </div>
  )
}
