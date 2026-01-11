interface XingbiDetailProps {
  showModal: boolean
  money: number
  onClose: () => void
}

export default function XingbiDetail({ showModal, money, onClose }: XingbiDetailProps) {
  if (!showModal) return null

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
        width: '400px',
        maxWidth: '90vw'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0 }}>星币详情</h2>
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

        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#ff6b35',
            marginBottom: '10px'
          }}>
            {money}
          </div>
          <div style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
            当前星币余额
          </div>
          
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <h4>星币用途：</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>1星币 = 1次深度对话</li>
              <li>可兑换各类报告</li>
              <li>解锁高级功能</li>
              <li>购买会员服务</li>
            </ul>
          </div>

          <button
            onClick={onClose}
            style={{
              marginTop: '20px',
              padding: '10px 30px',
              backgroundColor: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            确定
          </button>
        </div>
      </div>
    </div>
  )
}
