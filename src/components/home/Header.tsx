import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import {
  homeNavigationStore,
  setActiveNav,
} from '../../stores/homeNavigationStore';
import {
  languageStore,
  setLanguage as setLang,
} from '../../stores/languageStore';
import {
  languages,
  navigationTabs,
  loginTexts,
} from '../../constants/navigation';
import iconLogo from '@/assets/images/icon_logo.png';
import lan from '@/assets/images/lan.png';

export default function Header() {
  const { activeNav } = useStore(homeNavigationStore);
  const { currentLanguage } = useStore(languageStore);
  const navigate = useNavigate();

  const currentIndex = languages.findIndex(
    (lang) => lang.code === currentLanguage
  );
  const tabs = navigationTabs[currentLanguage];
  const loginText = loginTexts[currentLanguage];

  const handleTabClick = (index: number) => {
    setActiveNav(index);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value);
    const selectedLanguage = languages[index].code as 'zh-CN' | 'en-US';
    setLang(selectedLanguage);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] flex h-16 items-center justify-between bg-white px-5 py-2.5 font-['Microsoft_YaHei',sans-serif] shadow-sm">
      {/* Logo */}
      <div className="ml-14">
        <img src={iconLogo} alt="Logo" className="h-[34px] w-[134px]" />
      </div>

      {/* Navigation Menu */}
      {activeNav !== 3 && activeNav !== 4 && (
        <nav className="flex gap-5">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`cursor-pointer border-none bg-transparent pb-0.5 text-sm transition-colors hover:text-[#007aff] ${
                activeNav === index
                  ? 'border-b-2 border-black font-bold text-black'
                  : 'text-[#333]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      )}

      {/* Auth Buttons */}
      <div className="flex items-center gap-2.5">
        {/* Language Picker */}
        <div className="flex items-center gap-1">
          <img src={lan} alt="language" className="h-4 w-4" />
          <select
            value={currentIndex}
            onChange={handleLanguageChange}
            className="cursor-pointer border-none bg-transparent text-base text-[#333]"
          >
            {languages.map((lang, index) => (
              <option key={lang.code} value={index}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => {
            navigate({ to: '/register' });
          }}
          className="h-[30px] cursor-pointer border-none bg-transparent px-4 text-sm leading-[30px] text-black"
        >
          {loginText.registration}
        </button>

        <button
          onClick={() => {
            navigate({ to: '/login' });
          }}
          className="h-[30px] w-[67px] cursor-pointer rounded border-none bg-[#5f5f5f] text-sm leading-[30px] text-white"
        >
          {loginText.login}
        </button>
      </div>
    </header>
  );
}
