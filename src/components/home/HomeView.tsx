export default function HomeView() {
  const handleLogin = () => {
    // TODO: 实现登录跳转逻辑
    console.log('Navigate to login')
  }

  return (
    <div>
      {/* 主视觉区域 */}
      <section className="relative overflow-hidden text-center bg-gray-50" style={{ marginTop: '65px' }}>
        {/* Hero Content */}
        <div className="h-52 flex flex-col items-center justify-center z-10 mx-auto" style={{ maxWidth: '400px' }}>
          <img 
            className="mb-6" 
            src="/images/home_text.png" 
            alt="主标题"
            style={{ width: '644px', height: '60px' }}
          />
          <p className="text-gray-600 mb-10 leading-relaxed" style={{ fontSize: '16px', marginBottom: '20px' }}>
            召唤AI老法师，开启实时对话
          </p>
          <button 
            className="font-medium text-white bg-gray-600 hover:bg-blue-700 transition-colors border-none cursor-pointer"
            style={{
              width: '132px',
              height: '52px',
              fontSize: '18px',
              background: '#5F5F5F',
              boxShadow: '0px 6px 12px 1px rgba(0, 0, 0, 0.16)',
              borderRadius: '26px'
            }}
            onClick={handleLogin}
          >
            马上体验
          </button>
        </div>
        
        {/* Background Image */}
        <div className="left-0 right-0 bottom-0 z-0 overflow-hidden">
          <img 
            src="/images/home_bg.png" 
            alt="背景" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* 命书区域 */}
        <div className="bg-gray-50" style={{ padding: '40px 0' }}>
          <img 
            className="mx-auto" 
            src="/images/ms_c.png" 
            alt="命书"
            style={{ width: '800px', height: '417px' }}
          />
        </div>
        
        {/* 易经区域 */}
        <div className="bg-white" style={{ padding: '40px 0' }}>
          <img 
            className="mx-auto" 
            src="/images/yg_c.png" 
            alt="易经"
            style={{ width: '800px', height: '417px' }}
          />
        </div>
        
        {/* 立即体验按钮 */}
        <div className="bg-white" style={{ padding: '40px 0' }}>
          <button 
            className="mx-auto block font-medium text-white bg-gray-600 hover:bg-blue-700 transition-colors border-none cursor-pointer"
            style={{
              width: '200px',
              height: '52px',
              fontSize: '18px',
              background: '#5F5F5F',
              boxShadow: '0px 6px 12px 1px rgba(0, 0, 0, 0.16)',
              borderRadius: '26px'
            }}
            onClick={handleLogin}
          >
            立即体验
          </button>
        </div>
      </section>

      {/* 底部版权区 */}
      <footer className="bg-black text-white" style={{ padding: '30px 20px 20px', marginTop: '30px' }}>
        <div className="flex justify-between items-start mb-15" style={{ gap: '30px', marginBottom: '30px' }}>
          <div>
            <img 
              src="/images/icon_logo_bg.png" 
              alt="Logo" 
              style={{ height: '30px' }}
            />
          </div>
          
          <div>
            <h3 className="mb-5" style={{ fontSize: '16px', marginBottom: '10px' }}>联系我们</h3>
            <p className="text-gray-300 mb-2" style={{ fontSize: '14px', color: '#ccc', marginBottom: '5px' }}>
              邮箱：service@klxtech.com
            </p>
            <p className="text-gray-300" style={{ fontSize: '14px', color: '#ccc' }}>
              地址：上海市闵行区申滨路36号丽宝广场
            </p>
          </div>
          
          <div>
            <h3 className="mb-5 text-right" style={{ fontSize: '16px', marginBottom: '10px' }}>客服入口</h3>
            <div className="flex" style={{ gap: '20px' }}>
              <div className="flex flex-col items-center" style={{ gap: '5px' }}>
                <img 
                  src="/images/21.png" 
                  alt="芷暄师妹" 
                  className="rounded bg-white"
                  style={{ width: '80px', height: '80px', borderRadius: '4px' }}
                />
                <span style={{ fontSize: '12px', color: '#ccc', marginTop: '5px' }}>芷暄师妹</span>
              </div>
              <div className="flex flex-col items-center" style={{ gap: '5px' }}>
                <img 
                  src="/images/22.png" 
                  alt="丁火师妹" 
                  className="rounded bg-white"
                  style={{ width: '80px', height: '80px', borderRadius: '4px' }}
                />
                <span style={{ fontSize: '12px', color: '#ccc', marginTop: '5px' }}>丁火师妹</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-700" style={{ paddingTop: '15px', fontSize: '12px', color: '#999', borderTopColor: '#333' }}>
          <div>
            <div>© 2025 昆仑墟（上海）网络科技有限公司 版权所有</div>
            <div>沪ICP备2025131650号-2</div>
          </div>
          
          <div className="flex" style={{ gap: '15px' }}>
            <span className="cursor-pointer hover:text-white">隐私政策</span>
            <span className="cursor-pointer hover:text-white">用户协议</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
