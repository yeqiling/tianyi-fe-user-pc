import { Store } from '@tanstack/store'

export interface DialogState {
  currentDialog: any
  isNew: boolean
  dialogKey: number
  currentData: any
  isPollingCancelled: boolean
  latestReportData: any
  reportMessage: string
  reportView: boolean
}

export const dialogStore = new Store<DialogState>({
  currentDialog: null,
  isNew: false,
  dialogKey: 0,
  currentData: {},
  isPollingCancelled: false,
  latestReportData: null,
  reportMessage: '',
  reportView: false,
})
