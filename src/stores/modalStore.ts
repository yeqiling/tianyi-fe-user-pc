import { Store } from '@tanstack/store'

export interface ModalState {
  vipModelVisible: boolean
  myMemberPageShow: boolean
  showXingbi: boolean
  showEditUserInfo: boolean
  subAccModal: boolean
  AddSubAccountModelShow: boolean
  showBirthInfoForm: boolean
  showGuide: boolean
  u_loading: boolean
  loadingText: string
  showOverlay: boolean
}

export const modalStore = new Store<ModalState>({
  vipModelVisible: false,
  myMemberPageShow: false,
  showXingbi: false,
  showEditUserInfo: false,
  subAccModal: false,
  AddSubAccountModelShow: false,
  showBirthInfoForm: false,
  showGuide: false,
  u_loading: false,
  loadingText: '加载中',
  showOverlay: true,
})

export const modalActions = {
  showVip: () => {
    modalStore.setState((prev) => ({ ...prev, vipModelVisible: true }))
  },
  hideVip: () => {
    modalStore.setState((prev) => ({ ...prev, vipModelVisible: false }))
  },
  showMemberPage: () => {
    modalStore.setState((prev) => ({ ...prev, myMemberPageShow: true }))
  },
  hideMemberPage: () => {
    modalStore.setState((prev) => ({ ...prev, myMemberPageShow: false }))
  },
  showXingbi: () => {
    modalStore.setState((prev) => ({ ...prev, showXingbi: true }))
  },
  hideXingbi: () => {
    modalStore.setState((prev) => ({ ...prev, showXingbi: false }))
  },
  showEditUserInfo: () => {
    modalStore.setState((prev) => ({ ...prev, showEditUserInfo: true }))
  },
  hideEditUserInfo: () => {
    modalStore.setState((prev) => ({ ...prev, showEditUserInfo: false }))
  },
  showSubAccountList: () => {
    modalStore.setState((prev) => ({ ...prev, subAccModal: true }))
  },
  hideSubAccountList: () => {
    modalStore.setState((prev) => ({ ...prev, subAccModal: false }))
  },
  showAddSubAccount: () => {
    modalStore.setState((prev) => ({ ...prev, AddSubAccountModelShow: true }))
  },
  hideAddSubAccount: () => {
    modalStore.setState((prev) => ({ ...prev, AddSubAccountModelShow: false }))
  },
  setLoading: (show: boolean, text?: string) => {
    modalStore.setState((prev) => ({
      ...prev,
      u_loading: show,
      loadingText: text ?? prev.loadingText
    }))
  }
}
