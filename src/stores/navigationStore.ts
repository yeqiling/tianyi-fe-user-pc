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

export const navigationActions = {
  setActiveMenu: (menu: MenuType) => {
    navigationStore.setState((prev) => ({ ...prev, activeMenu: menu }))
  },
  showService: (service: { name: string; icon: string }) => {
    navigationStore.setState((prev) => ({
      ...prev,
      showBaziContent: true,
      selectedItem: service.name,
      title: service.name,
      titleIcon: service.icon
    }))
  },
  showBaziContent: () => {
    navigationStore.setState((prev) => ({ ...prev, showBaziContent: true }))
  },
  selectItem: (item: string) => {
    navigationStore.setState((prev) => ({ ...prev, selectedItem: item }))
  },
  hideBaziContent: () => {
    navigationStore.setState((prev) => ({ ...prev, showBaziContent: false }))
  },
  backToMingshu: () => {
    navigationStore.setState((prev) => ({
      ...prev,
      showBaziContent: false,
      activeMenu: '命书'
    }))
  }
}
