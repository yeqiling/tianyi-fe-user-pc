import { Store } from '@tanstack/store';

export interface LoginForm {
  phone: string;
  password: string;
}

export interface ForgetPwdForm {
  phone: string;
  password: string;
  verifyCode: string;
}

export interface LoginState {
  loginForm: LoginForm;
  forgetPwdForm: ForgetPwdForm;
  passwordModelShow: boolean;
  loginLoading: boolean;
  resetLoading: boolean;
}

const createLoginForm = (): LoginForm => ({
  phone: '',
  password: '',
});

const createForgetPwdForm = (): ForgetPwdForm => ({
  phone: '',
  password: '',
  verifyCode: '',
});

export const loginStore = new Store<LoginState>({
  loginForm: createLoginForm(),
  forgetPwdForm: createForgetPwdForm(),
  passwordModelShow: false,
  loginLoading: false,
  resetLoading: false,
});

export const loginActions = {
  updateLoginForm: (field: keyof LoginForm, value: string) => {
    loginStore.setState((state) => ({
      ...state,
      loginForm: { ...state.loginForm, [field]: value },
    }));
  },

  updateForgetPwdForm: (field: keyof ForgetPwdForm, value: string) => {
    loginStore.setState((state) => ({
      ...state,
      forgetPwdForm: { ...state.forgetPwdForm, [field]: value },
    }));
  },

  resetLoginForm: () => {
    loginStore.setState((state) => ({
      ...state,
      loginForm: createLoginForm(),
    }));
  },

  resetForgetPwdForm: () => {
    loginStore.setState((state) => ({
      ...state,
      forgetPwdForm: createForgetPwdForm(),
    }));
  },

  showPasswordModal: () => {
    loginStore.setState((state) => ({
      ...state,
      passwordModelShow: true,
      forgetPwdForm: createForgetPwdForm(),
    }));
  },

  hidePasswordModal: () => {
    loginStore.setState((state) => ({ ...state, passwordModelShow: false }));
  },

  setLoginLoading: (loading: boolean) => {
    loginStore.setState((state) => ({ ...state, loginLoading: loading }));
  },

  setResetLoading: (loading: boolean) => {
    loginStore.setState((state) => ({ ...state, resetLoading: loading }));
  },
};
