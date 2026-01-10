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
  loading: boolean;
}

export const loginStore = new Store<LoginState>({
  loginForm: {
    phone: '',
    password: '',
  },
  forgetPwdForm: {
    phone: '',
    password: '',
    verifyCode: '',
  },
  passwordModelShow: false,
  loading: false,
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

  resetForm: () => {
    loginStore.setState((state) => ({
      ...state,
      loginForm: { phone: '', msg: '', password: '' },
    }));
  },

  showPasswordModal: () => {
    loginActions.resetForm();
    loginStore.setState((state) => ({ ...state, passwordModelShow: true }));
  },

  hidePasswordModal: () => {
    loginActions.resetForm();
    loginStore.setState((state) => ({ ...state, passwordModelShow: false }));
  },

  setLoading: (loading: boolean) => {
    loginStore.setState((state) => ({ ...state, loading }));
  },
};
