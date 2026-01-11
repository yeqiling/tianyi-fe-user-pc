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

export const dialogActions = {
  showReport: (data?: any) => {
    dialogStore.setState((prev) => ({
      ...prev,
      reportView: true,
      latestReportData: data ?? prev.latestReportData
    }))
  },
  setReportMessage: (message: string) => {
    dialogStore.setState((prev) => ({ ...prev, reportMessage: message }))
  },
  setCurrentDialog: (dialog: any) => {
    dialogStore.setState((prev) => ({ ...prev, currentDialog: dialog }))
  },
  setPollingCancelled: (cancelled: boolean) => {
    dialogStore.setState((prev) => ({ ...prev, isPollingCancelled: cancelled }))
  }
}
