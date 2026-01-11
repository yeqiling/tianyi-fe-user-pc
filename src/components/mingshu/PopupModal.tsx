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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div
        style={{ width, height }}
        className="max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
      >
        {title && (
          <div className="flex items-center justify-between border-b border-[#e0e0e0] bg-[#f8f9fa] px-[30px] py-5">
            <h2 className="m-0 text-lg font-bold">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="cursor-pointer border-0 bg-transparent text-2xl text-[#666]"
            >
              ×
            </button>
          </div>
        )}
        
        <div
          className={`overflow-auto ${title ? 'max-h-[calc(90vh-80px)] px-[30px] py-5' : 'max-h-[90vh] p-[30px]'}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
