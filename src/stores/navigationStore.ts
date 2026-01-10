import { Store } from '@tanstack/store';

export interface NavigationState {
  activeNav: number;
  currentLanguageIndex: number;
}

export const navigationStore = new Store<NavigationState>({
  activeNav: 0,
  currentLanguageIndex: 0,
});

export const setActiveNav = (nav: number) => {
  navigationStore.setState((state) => ({
    ...state,
    activeNav: nav,
  }));
};

export const setLanguage = (index: number) => {
  navigationStore.setState((state) => ({
    ...state,
    currentLanguageIndex: index,
  }));
};
