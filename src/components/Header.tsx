import { useStore } from '@tanstack/react-store'
import { navigationStore, setActiveNav, setLanguage } from '../stores/navigationStore'
import { languages, navigationTabs, loginTexts } from '../constants/navigation'

export default function Header() {
  const { activeNav, currentLanguageIndex } = useStore(navigationStore)
  const currentLanguage = languages[currentLanguageIndex].code as keyof typeof navigationTabs
  const tabs = navigationTabs[currentLanguage]
  const loginText = loginTexts[currentLanguage]

  const handleTabClick = (index: number) => {
    setActiveNav(index)
  }

  const handleLanguageChange = (index: number) => {
    setLanguage(index)
    // TODO: 实现语言切换逻辑
  }

  const handleLogin = (type: 'login' | 'register') => {
    // TODO: 实现登录跳转逻辑
    console.log('Login type:', type)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <div className="flex items-center ml-28">
          <img 
            src="/images/icon_logo.png" 
            alt="Logo" 
            className="h-8 w-32"
          />
        </div>

        {/* Navigation Menu */}
        {activeNav !== 3 && activeNav !== 4 && (
          <nav className="flex gap-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`text-sm transition-colors ${
                  activeNav === index
                    ? 'text-black font-bold border-b-2 border-black'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        )}

        {/* Auth Buttons */}
        <div className="flex items-center gap-5">
          {/* Language Picker */}
          <div className="relative">
            <select
              value={currentLanguageIndex}
              onChange={(e) => handleLanguageChange(Number(e.target.value))}
              className="appearance-none bg-transparent border-none text-sm cursor-pointer pr-6"
            >
              {languages.map((lang, index) => (
                <option key={lang.code} value={index}>
                  {lang.name}
                </option>
              ))}
            </select>
            <img 
              src="/images/down.png" 
              alt="dropdown" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            />
          </div>

          <button
            onClick={() => handleLogin('register')}
            className="bg-transparent text-black text-sm px-6 py-2 rounded hover:bg-gray-50"
          >
            {loginText.registration}
          </button>

          <button
            onClick={() => handleLogin('login')}
            className="bg-gray-600 text-white text-sm px-6 py-2 rounded hover:bg-gray-700"
          >
            {loginText.login}
          </button>
        </div>
      </div>
    </header>
  )
}
