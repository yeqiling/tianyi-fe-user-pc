import { Store } from '@tanstack/store';

export interface RegisterForm {
  phone: string;
  msg: string;
  password: string;
}

export interface RegisterState {
  registerForm: RegisterForm;
  loading: boolean;
}

export const registerStore = new Store<RegisterState>({
  registerForm: {
    phone: '',
    msg: '',
    password: '',
  },
  loading: false,
});

export const registerActions = {
  updateForm: (field: keyof RegisterForm, value: string) => {
    registerStore.setState((state) => ({
      ...state,
      registerForm: { ...state.registerForm, [field]: value },
    }));
  },

  resetForm: () => {
    registerStore.setState((state) => ({
      ...state,
      registerForm: { phone: '', msg: '', password: '' },
    }));
  },

  setLoading: (loading: boolean) => {
    registerStore.setState((state) => ({ ...state, loading }));
  },
};
