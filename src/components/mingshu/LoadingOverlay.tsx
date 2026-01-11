import { useStore } from '@tanstack/react-store'
import { modalStore } from '../../stores/modalStore'

export default function LoadingOverlay() {
  const modalState = useStore(modalStore)

  if (!modalState.u_loading) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div style={{ color: '#fff', fontSize: '18px' }}>
        {modalState.loadingText}
      </div>
    </div>
  )
}
