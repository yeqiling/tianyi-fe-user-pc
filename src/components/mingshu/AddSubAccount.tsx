import type { CSSProperties, FormEvent } from 'react'
import { useStore } from '@tanstack/react-store'
import { toast } from 'sonner'
import { apiService } from '../../services/api'
import { modalActions, modalStore } from '../../stores/modalStore'
import {
  subAccountActions,
  subAccountStore
} from '../../stores/subAccountStore'
import { userActions } from '../../stores/userStore'

const overlayStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
}

const modalStyle: CSSProperties = {
  width: '480px',
  maxWidth: '90vw',
  backgroundColor: '#fff',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  padding: '30px'
}

const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '20px'
}

const titleStyle: CSSProperties = {
  fontSize: '20px',
  fontWeight: 700,
  color: '#333'
}

const fieldStyle: CSSProperties = {
  marginBottom: '16px'
}

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  color: '#333',
  marginBottom: '8px'
}

const inputStyle: CSSProperties = {
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '6px',
  padding: '10px 12px',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box'
}

const buttonRowStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '12px',
  marginTop: '20px'
}

const buttonBaseStyle: CSSProperties = {
  padding: '10px 18px',
  borderRadius: '8px',
  border: 'none',
  fontSize: '14px'
}

const cancelButtonStyle: CSSProperties = {
  ...buttonBaseStyle,
  backgroundColor: '#999',
  color: '#fff',
  cursor: 'pointer'
}

const primaryButtonStyle = (disabled: boolean): CSSProperties => ({
  ...buttonBaseStyle,
  backgroundColor: '#007aff',
  color: '#fff',
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.7 : 1
})

const closeButtonStyle: CSSProperties = {
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '24px',
  color: '#666',
  lineHeight: 1
}

export default function AddSubAccount() {
  const modalState = useStore(modalStore)
  const { form, loading } = useStore(subAccountStore)

  if (!modalState.AddSubAccountModelShow) return null

  const handleClose = () => {
    modalActions.hideAddSubAccount()
    subAccountActions.resetForm()
  }

  const handleSubmit = async (event?: FormEvent) => {
    event?.preventDefault()

    const phoneReg = /^1[3-9]\d{9}$/
    if (!form.phone) {
      toast('请输入手机号')
      return
    }
    if (!phoneReg.test(form.phone)) {
      toast('手机号格式不正确')
      return
    }
    if (!form.password) {
      toast('请输入密码')
      return
    }

    try {
      subAccountActions.setLoading(true)
      const result = await apiService.createSubAccount({
        phone: form.phone,
        password: form.password
      })

      if (result.code === 0) {
        toast('新增成功')
        const listResult = await apiService.getSubAccounts()
        if (listResult.code === 0) {
          userActions.setSubAccounts(
            Array.isArray(listResult.data) ? listResult.data : []
          )
        }
        handleClose()
        return
      }

      toast(result.msg || '新增失败')
    } catch (error) {
      console.error('新增子账号失败:', error)
      toast('网络错误，请稍后重试')
    } finally {
      subAccountActions.setLoading(false)
    }
  }

  const handleFieldChange = (field: 'phone' | 'password', value: string) => {
    subAccountActions.updateForm(field, value)
  }

  return (
    <div style={overlayStyle} onClick={handleClose}>
      <div style={modalStyle} onClick={(event) => event.stopPropagation()}>
        <div style={headerStyle}>
          <div style={titleStyle}>新增子账户</div>
          <button onClick={handleClose} style={closeButtonStyle}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={fieldStyle}>
            <label style={labelStyle}>手机号</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) =>
                handleFieldChange('phone', event.target.value)
              }
              placeholder="请输入手机号"
              maxLength={11}
              style={inputStyle}
            />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>密码</label>
            <input
              type="password"
              value={form.password}
              onChange={(event) =>
                handleFieldChange('password', event.target.value)
              }
              placeholder="请输入密码"
              style={inputStyle}
            />
          </div>

          <div style={buttonRowStyle}>
            <button type="button" onClick={handleClose} style={cancelButtonStyle}>
              取消
            </button>
            <button
              type="submit"
              disabled={loading}
              style={primaryButtonStyle(loading)}
            >
              {loading ? '处理中...' : '新增'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
