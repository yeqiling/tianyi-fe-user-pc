interface ProductDetailProps {
  onGoDetail: (num: number) => void
}

export default function ProductDetail({ onGoDetail }: ProductDetailProps) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">产品详情</h1>
      <p>产品详情内容待迁移...</p>
      <button 
        onClick={() => onGoDetail(1)}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        返回产品
      </button>
    </div>
  )
}
