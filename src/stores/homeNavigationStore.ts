import { Store } from '@tanstack/store';

export interface HomeNavigationStore {
  activeNav: number;
  currentLanguageIndex: number;
}

export const homeNavigationStore = new Store<HomeNavigationStore>({
  activeNav: 0,
  currentLanguageIndex: 0,
});

export const setActiveNav = (nav: number) => {
  homeNavigationStore.setState((state) => ({
    ...state,
    activeNav: nav,
  }));
};

export const setLanguage = (index: number) => {
  homeNavigationStore.setState((state) => ({
    ...state,
    currentLanguageIndex: index,
  }));
};
