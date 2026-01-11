import { Store } from '@tanstack/store';

export interface UserInfo {
  userId?: string;
  userName?: string;
  avatar?: string;
  phone?: string;
}

export interface SubAccount {
  user: UserInfo;
}

export interface UserState {
  userInfo: UserInfo;
  subAccounts: SubAccount[];
  money: number;
  isVip: boolean;
}

export const userStore = new Store<UserState>({
  userInfo: {},
  subAccounts: [],
  money: 0,
  isVip: false,
});

// Actions
export const userActions = {
  login: (userInfo: UserInfo) => {
    userStore.setState((state) => ({
      ...state,
      userInfo,
    }));
  },

  logout: () => {
    userStore.setState((state) => ({
      ...state,
      userInfo: {},
      subAccounts: [],
      money: 0,
      isVip: false,
    }));
  },

  addSubAccount: (account: SubAccount) => {
    userStore.setState((state) => ({
      ...state,
      subAccounts: [...state.subAccounts, account],
    }));
  },

  setSubAccounts: (subAccounts: SubAccount[]) => {
    userStore.setState((state) => ({
      ...state,
      subAccounts,
    }));
  },

  switchSubAccount: (account: SubAccount) => {
    userStore.setState((state) => ({
      ...state,
      userInfo: account.user,
    }));
  },

  setMoney: (money: number) => {
    userStore.setState((state) => ({
      ...state,
      money,
    }));
  },

  setVip: (isVip: boolean) => {
    userStore.setState((state) => ({
      ...state,
      isVip,
    }));
  },
};
