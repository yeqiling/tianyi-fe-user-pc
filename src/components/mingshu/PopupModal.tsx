interface PopupModalProps {
  visible: boolean
  title?: string
  children: React.ReactNode
  onClose: () => void
  width?: string
  height?: string
}

export default function PopupModal({ 
  visible, 
  title, 
  children, 
  onClose, 
  width = '400px', 
  height = 'auto' 
}: PopupModalProps) {
  if (!visible) return null

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
        width,
        height,
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        {title && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 30px',
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#f8f9fa'
          }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
              {title}
            </h2>
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
        )}
        
        <div style={{ 
          padding: title ? '20px 30px' : '30px',
          overflow: 'auto',
          maxHeight: title ? 'calc(90vh - 80px)' : '90vh'
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}
