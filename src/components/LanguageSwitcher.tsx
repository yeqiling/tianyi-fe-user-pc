import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <span>{t('language')}: </span>
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'font-bold' : ''}
      >
        EN
      </button>
      {' | '}
      <button 
        onClick={() => changeLanguage('zh')}
        className={i18n.language === 'zh' ? 'font-bold' : ''}
      >
        中文
      </button>
    </div>
  );
}
