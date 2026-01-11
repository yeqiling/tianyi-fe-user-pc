interface MyMemberPageProps {
  onClose: () => void
  onShowModal: () => void
  onShoweditModal: () => void
  onShowSubAccModal: () => void
  onPollOrderStatus: () => void
}

export default function MyMemberPage({
  onClose,
  onShowModal,
  onShoweditModal,
  onShowSubAccModal,
  onPollOrderStatus
}: MyMemberPageProps) {
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
          <h2 style={{ margin: 0 }}>我的会员</h2>
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

        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <p>会员功能开发中...</p>
          <p>将包含：</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>会员信息展示</li>
            <li>星币余额管理</li>
            <li>订单历史</li>
            <li>个人信息编辑</li>
            <li>子账户管理</li>
          </ul>
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button
              onClick={onShowModal}
              style={{
                padding: '10px 20px',
                backgroundColor: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              星币详情
            </button>
            <button
              onClick={onShoweditModal}
              style={{
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              编辑信息
            </button>
            <button
              onClick={onShowSubAccModal}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff9800',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              子账户
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
