interface AboutMyProps {
  onGoDetail: (num: number) => void
}

export default function AboutMy({ onGoDetail }: AboutMyProps) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">关于我们详情</h1>
      <p>关于我们详情内容待迁移...</p>
      <button 
        onClick={() => onGoDetail(2)}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        返回
      </button>
    </div>
  )
}
