import { Store } from '@tanstack/store';

export interface UserInfo {
  userId: string;
  userName: string;
  avatar?: string;
  phone?: string;
}

export interface SubAccount {
  user: UserInfo;
  isActive?: boolean;
}

export interface UserState {
  isLogin: boolean;
  userInfo: UserInfo | null;
  subAccounts: SubAccount[];
}

export const userStore = new Store<UserState>({
  isLogin: false,
  userInfo: null,
  subAccounts: [],
});

// Actions
export const userActions = {
  login: (userInfo: UserInfo) => {
    userStore.setState((state) => ({
      ...state,
      isLogin: true,
      userInfo,
    }));
  },

  logout: () => {
    userStore.setState((state) => ({
      ...state,
      isLogin: false,
      userInfo: null,
      subAccounts: [],
    }));
  },

  addSubAccount: (account: SubAccount) => {
    userStore.setState((state) => ({
      ...state,
      subAccounts: [...state.subAccounts, account],
    }));
  },

  switchSubAccount: (account: SubAccount) => {
    userStore.setState((state) => ({
      ...state,
      userInfo: account.user,
    }));
  },
};
