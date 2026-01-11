import touxiangIcon from '@/assets/images/touxiang.png'

interface SubAccountListProps {
  showModal: boolean
  onClose: () => void
}

export default function SubAccountList({ showModal, onClose }: SubAccountListProps) {
  if (!showModal) return null

  // TODO: Get from store
  const subAccounts = [
    { id: 1, userName: '子账户1', avatar: '', createTime: '2024-01-01' },
    { id: 2, userName: '子账户2', avatar: '', createTime: '2024-01-02' }
  ]

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '30px',
        width: '500px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        overflow: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0 }}>子账户列表</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          {subAccounts.length > 0 ? (
            subAccounts.map((account) => (
              <div
                key={account.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  marginBottom: '10px'
                }}
              >
                <img
                  src={account.avatar || touxiangIcon}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '15px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                    {account.userName}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    创建时间: {account.createTime}
                  </div>
                </div>
                <button
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#ff4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  删除
                </button>
              </div>
            ))
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              color: '#666'
            }}>
              暂无子账户
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 30px',
              backgroundColor: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
