import { useStore } from '@tanstack/react-store'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { userStore, userActions, appStore, appActions } from '@/stores'
import { useI18n } from '@/i18n'

const navTabs = [
  { id: 0, key: 'home', label: 'nav.home' },
  { id: 1, key: 'mingshu', label: 'nav.mingshu' },
  { id: 2, key: 'yunshi', label: 'nav.yunshi' },
  { id: 3, key: 'about', label: 'nav.about' }
]

export function HomePage() {
  const navigate = useNavigate()
  const { isLogin, userInfo } = useStore(userStore)
  const { activeNav, currentLanguage } = useStore(appStore)
  const { t } = useI18n(currentLanguage)

  const handleLogin = (type: 'login' | 'register') => {
    navigate({ to: '/login' })
  }

  const handleLogout = () => {
    userActions.logout()
    localStorage.removeItem('token')
  }

  const handleNavChange = (value: string) => {
    const navId = parseInt(value)
    appActions.setActiveNav(navId)
    
    // 根据导航跳转到对应页面
    if (navId === 1) {
      navigate({ to: '/mingshu' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo192.png" alt="天乙神算" className="w-8 h-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-800">天乙神算</h1>
            </div>

            {/* 导航菜单 */}
            <div className="hidden md:block">
              <Tabs value={activeNav.toString()} onValueChange={handleNavChange}>
                <TabsList className="grid w-full grid-cols-4">
                  {navTabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id.toString()}>
                      {t(tab.label)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* 右侧操作区 */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              {isLogin ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    欢迎，{userInfo?.userName || '用户'}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    退出
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleLogin('register')}
                  >
                    {t('login.registration')}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => handleLogin('login')}
                  >
                    {t('login.login')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeNav.toString()} onValueChange={handleNavChange}>
          <TabsContent value="0" className="mt-6">
            <HomeContent />
          </TabsContent>
          <TabsContent value="1" className="mt-6">
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">命书功能</p>
              <Button onClick={() => navigate({ to: '/mingshu' })}>
                进入命书
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="2" className="mt-6">
            <div className="text-center py-12">
              <p className="text-gray-600">运势功能开发中...</p>
            </div>
          </TabsContent>
          <TabsContent value="3" className="mt-6">
            <AboutContent />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

// 首页内容组件
function HomeContent() {
  return (
    <div className="text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          欢迎来到天乙神算
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          专业的命理分析平台，为您提供精准的人生指导
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">命书分析</h3>
            <p className="text-gray-600">基于生辰八字的专业命理分析</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">运势预测</h3>
            <p className="text-gray-600">精准的运势走向和趋势分析</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">人生指导</h3>
            <p className="text-gray-600">专业的人生规划和决策建议</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// 关于页面内容
function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        关于天乙神算
      </h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          天乙神算是一个专业的命理分析平台，致力于为用户提供准确、专业的命理咨询服务。
        </p>
        <p className="text-gray-600 mb-4">
          我们的团队由资深命理师组成，结合传统命理学与现代技术，为您提供个性化的人生指导。
        </p>
        <p className="text-gray-600">
          无论您是想了解自己的性格特点，还是寻求人生方向的指引，天乙神算都能为您提供专业的帮助。
        </p>
      </div>
    </div>
  )
}
