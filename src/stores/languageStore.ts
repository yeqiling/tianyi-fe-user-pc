import { Store } from '@tanstack/store';

export interface LanguageState {
  currentLanguage: 'zh-CN' | 'en-US';
}

export const languageStore = new Store<LanguageState>({
  currentLanguage: 'zh-CN',
});

export const setLanguage = (language: 'zh-CN' | 'en-US') => {
  languageStore.setState({ currentLanguage: language });
  // 保存到localStorage
  localStorage.setItem('language', language);
};

// 初始化语言设置
const savedLanguage = localStorage.getItem('language') as 'zh-CN' | 'en-US';
if (savedLanguage) {
  languageStore.setState({ currentLanguage: savedLanguage });
}
