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
