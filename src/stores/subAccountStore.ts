import { Store } from '@tanstack/store';

export interface SubAccountForm {
  phone: string;
  password: string;
}

export interface SubAccountState {
  form: SubAccountForm;
  loading: boolean;
}

const createSubAccountForm = (): SubAccountForm => ({
  phone: '',
  password: '',
});

export const subAccountStore = new Store<SubAccountState>({
  form: createSubAccountForm(),
  loading: false,
});

export const subAccountActions = {
  updateForm: (field: keyof SubAccountForm, value: string) => {
    subAccountStore.setState((state) => ({
      ...state,
      form: { ...state.form, [field]: value },
    }));
  },

  resetForm: () => {
    subAccountStore.setState((state) => ({
      ...state,
      form: createSubAccountForm(),
    }));
  },

  setLoading: (loading: boolean) => {
    subAccountStore.setState((state) => ({ ...state, loading }));
  },
};
