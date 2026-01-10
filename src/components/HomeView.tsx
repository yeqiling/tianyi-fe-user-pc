export default function HomeView() {
  const handleLogin = () => {
    // TODO: 实现登录跳转逻辑
    console.log('Navigate to login')
  }

  return (
    <div>
      {/* 主视觉区域 */}
      <section className="relative overflow-hidden text-center mt-32 bg-gray-50">
        <div className="h-52 flex flex-col items-center justify-center z-10 mx-auto max-w-4xl">
          <img 
            className="w-[644px] h-15 mb-6" 
            src="/images/home_text.png" 
            alt="主标题" 
          />
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            召唤AI老法师，开启实时对话
          </p>
          <button 
            className="w-33 h-13 leading-13 font-medium text-lg text-white bg-gray-600 shadow-lg rounded-full hover:bg-blue-700 transition-colors"
            onClick={handleLogin}
          >
            马上体验
          </button>
        </div>
        
        <div className="left-0 right-0 bottom-0 z-0 overflow-hidden">
          <img 
            src="/images/home_bg.png" 
            alt="背景" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="py-10 bg-gray-50">
          <img 
            className="w-[800px] h-[417px] mx-auto" 
            src="/images/ms_c.png" 
            alt="命书"
          />
        </div>
        
        <div className="py-10 bg-white">
          <img 
            className="w-[800px] h-[417px] mx-auto" 
            src="/images/yg_c.png" 
            alt="易经"
          />
        </div>
        
        <div className="py-10 bg-white">
          <button 
            className="w-50 h-13 leading-13 mx-auto font-medium text-lg text-white bg-gray-600 shadow-lg rounded-full hover:bg-blue-700 transition-colors block"
            onClick={handleLogin}
          >
            立即体验
          </button>
        </div>
      </section>

      {/* 底部版权区 */}
      <footer className="bg-black text-white px-10 py-15 mt-15">
        <div className="flex justify-between items-start gap-15 mb-15">
          <div>
            <img 
              src="/images/icon_logo_bg.png" 
              alt="Logo" 
              className="h-15"
            />
          </div>
          
          <div>
            <h3 className="text-lg mb-5">联系我们</h3>
            <p className="text-sm text-gray-300 mb-2">邮箱：service@klxtech.com</p>
            <p className="text-sm text-gray-300">地址：上海市闵行区申滨路36号丽宝广场</p>
          </div>
          
          <div>
            <h3 className="text-lg mb-5 text-right">客服入口</h3>
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/images/21.png" 
                  alt="芷暄师妹" 
                  className="w-20 h-20 rounded bg-white"
                />
                <span className="text-xs text-gray-300">芷暄师妹</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/images/22.png" 
                  alt="丁火师妹" 
                  className="w-20 h-20 rounded bg-white"
                />
                <span className="text-xs text-gray-300">丁火师妹</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-700 pt-7 text-xs text-gray-400">
          <div>
            <div>© 2025 昆仑墟（上海）网络科技有限公司 版权所有</div>
            <div>沪ICP备2025131650号-2</div>
          </div>
          
          <div className="flex gap-7">
            <span className="cursor-pointer hover:text-white">隐私政策</span>
            <span className="cursor-pointer hover:text-white">用户协议</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
