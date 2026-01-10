import { Store } from '@tanstack/store'

export interface AppState {
  currentLanguage: string
  activeNav: number
  loading: boolean
}

export const appStore = new Store<AppState>({
  currentLanguage: 'zh-CN',
  activeNav: 0,
  loading: false
})

export const appActions = {
  setLanguage: (language: string) => {
    appStore.setState(state => ({ ...state, currentLanguage: language }))
  },
  
  setActiveNav: (nav: number) => {
    appStore.setState(state => ({ ...state, activeNav: nav }))
  },
  
  setLoading: (loading: boolean) => {
    appStore.setState(state => ({ ...state, loading }))
  }
}
