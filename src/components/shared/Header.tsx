import { useStore } from '@tanstack/react-store'
import { navigationStore, setActiveNav } from '../../stores/navigationStore'
import { languageStore, setLanguage as setLang } from '../../stores/languageStore'
import { languages, navigationTabs, loginTexts } from '../../constants/navigation'

export default function Header() {
  const { activeNav } = useStore(navigationStore)
  const { currentLanguage } = useStore(languageStore)
  
  const currentIndex = languages.findIndex(lang => lang.code === currentLanguage)
  const tabs = navigationTabs[currentLanguage]
  const loginText = loginTexts[currentLanguage]

  const handleTabClick = (index: number) => {
    setActiveNav(index)
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const selectedLanguage = languages[index].code as 'zh-CN' | 'en-US'
    setLang(selectedLanguage)
  }

  const handleLogin = (type: 'login' | 'register') => {
    // TODO: 实现登录跳转逻辑
    console.log('Login type:', type)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 bg-white flex justify-between items-center"
      style={{
        padding: '10px 20px',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
        zIndex: 999,
        fontFamily: '"Microsoft YaHei", sans-serif'
      }}
    >
      {/* Logo */}
      <div style={{ marginLeft: '55px' }}>
        <img 
          src="/images/icon_logo.png" 
          alt="Logo" 
          style={{ height: '34px', width: '134px' }}
        />
      </div>

      {/* Navigation Menu */}
      {activeNav !== 3 && activeNav !== 4 && (
        <nav className="flex" style={{ gap: '20px' }}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className="bg-transparent border-none cursor-pointer transition-colors"
              style={{
                fontSize: '14px',
                color: activeNav === index ? '#000000' : '#333',
                fontWeight: activeNav === index ? 'bold' : 'normal',
                borderBottom: activeNav === index ? '2px solid #000000' : 'none',
                paddingBottom: '2px'
              }}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      )}

      {/* Auth Buttons */}
      <div className="flex items-center" style={{ gap: '10px' }}>
        {/* Language Picker */}
        <div className="relative flex items-center" style={{ gap: '4px' }}>
          <img 
            src="/images/lan.png" 
            alt="language" 
            style={{ width: '24px', height: '24px' }}
          />
          <select
            value={currentIndex}
            onChange={handleLanguageChange}
            className="bg-transparent border-none cursor-pointer"
            style={{ fontSize: '16px', color: '#333' }}
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
            style={{ width: '24px', height: '24px' }}
          />
        </div>

        <button
          onClick={() => handleLogin('register')}
          className="bg-transparent border-none cursor-pointer"
          style={{
            color: '#000000',
            fontSize: '14px',
            padding: '0 15px',
            height: '30px',
            lineHeight: '30px'
          }}
        >
          {loginText.registration}
        </button>

        <button
          onClick={() => handleLogin('login')}
          className="text-white border-none cursor-pointer"
          style={{
            width: '67px',
            height: '30px',
            lineHeight: '30px',
            fontSize: '14px',
            backgroundColor: '#5f5f5f',
            borderRadius: '4px'
          }}
        >
          {loginText.login}
        </button>
      </div>
    </header>
  )
}
