import { Store } from '@tanstack/store'

export interface UserInfo {
  userId: string
  userName: string
  avatar?: string
  phone?: string
}

export interface SubAccount {
  user: UserInfo
  isActive?: boolean
}

export interface UserState {
  isLogin: boolean
  userInfo: UserInfo | null
  subAccounts: SubAccount[]
  currentStep: number
}

export const userStore = new Store<UserState>({
  isLogin: false,
  userInfo: null,
  subAccounts: [],
  currentStep: 1
})

// Actions
export const userActions = {
  login: (userInfo: UserInfo) => {
    userStore.setState(state => ({
      ...state,
      isLogin: true,
      userInfo,
      currentStep: 3
    }))
  },
  
  logout: () => {
    userStore.setState(state => ({
      ...state,
      isLogin: false,
      userInfo: null,
      subAccounts: [],
      currentStep: 1
    }))
  },
  
  setCurrentStep: (step: number) => {
    userStore.setState(state => ({ ...state, currentStep: step }))
  },
  
  addSubAccount: (account: SubAccount) => {
    userStore.setState(state => ({
      ...state,
      subAccounts: [...state.subAccounts, account]
    }))
  },
  
  switchSubAccount: (account: SubAccount) => {
    userStore.setState(state => ({
      ...state,
      userInfo: account.user
    }))
  }
}
