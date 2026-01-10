import { useStore } from '@tanstack/react-store'
import { useNavigate } from '@tanstack/react-router'
import { navigationStore, setActiveNav } from '../../stores/navigationStore'
import { languageStore, setLanguage as setLang } from '../../stores/languageStore'
import { languages, navigationTabs, loginTexts } from '../../constants/navigation'

export default function Header() {
  const { activeNav } = useStore(navigationStore)
  const { currentLanguage } = useStore(languageStore)
  const navigate = useNavigate()
  
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
    navigate({ to: '/login', search: { type } })
  }

  return (
    <header 
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
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
        <nav style={{ display: 'flex', gap: '20px' }}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                color: activeNav === index ? '#000000' : '#333',
                fontWeight: activeNav === index ? 'bold' : 'normal',
                borderBottom: activeNav === index ? '2px solid #000000' : 'none',
                paddingBottom: '2px',
                transition: 'color 0.2s'
              }}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      )}

      {/* Auth Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Language Picker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <img 
            src="/images/lan.png" 
            alt="language" 
            style={{ width: '24px', height: '24px' }}
          />
          <select
            value={currentIndex}
            onChange={handleLanguageChange}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '16px', 
              color: '#333' 
            }}
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
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
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
          style={{
            width: '67px',
            height: '30px',
            lineHeight: '30px',
            fontSize: '14px',
            backgroundColor: '#5f5f5f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loginText.login}
        </button>
      </div>
    </header>
  )
}
