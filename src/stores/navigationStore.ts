import { Store } from '@tanstack/store'

export type MenuType = '命书' | '运阁' | '宝阁' | 'kefu'

export interface NavigationState {
  activeMenu: MenuType
  selectedItem: string
  showBaziContent: boolean
  title: string
  titleIcon: string
}

export const navigationStore = new Store<NavigationState>({
  activeMenu: '命书',
  selectedItem: '八字排盘',
  showBaziContent: false,
  title: '',
  titleIcon: '',
})
