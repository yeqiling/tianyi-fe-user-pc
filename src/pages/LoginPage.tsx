import React, { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { BirthInfoForm, type BirthInfo } from '@/components/forms/BirthInfoForm'
import { userStore, userActions, appStore } from '@/stores'
import { useI18n } from '@/i18n'
import { apiService } from '@/services/api'

export function LoginPage() {
  const navigate = useNavigate()
  const { isLogin, currentStep } = useStore(userStore)
  const { currentLanguage } = useStore(appStore)
  const { t } = useI18n(currentLanguage)
  
  const [phone, setPhone] = useState('')
  const [verifyCode, setVerifyCode] = useState('')
  const [countdown, setCountdown] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSendCode = async () => {
    if (!phone || countdown > 0) return
    
    try {
      setLoading(true)
      await apiService.sendVerifyCode(phone)
      setCountdown(60)
      
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } catch (error) {
      console.error('发送验证码失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !verifyCode) return

    try {
      setLoading(true)
      const result = await apiService.login(phone, verifyCode)
      
      if (result.token) {
        localStorage.setItem('token', result.token)
        userActions.login(result.user)
        navigate({ to: '/home' })
      } else {
        // 需要完善信息
        userActions.setCurrentStep(2)
      }
    } catch (error) {
      console.error('登录失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSaveBirthInfo = async (data: BirthInfo) => {
    try {
      setLoading(true)
      const result = await apiService.updateUserInfo(data)
      userActions.login(result.user)
      navigate({ to: '/home' })
    } catch (error) {
      console.error('保存信息失败:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    userActions.setCurrentStep(1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/logo192.png" alt="天乙神算" className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">天乙神算</h1>
          <p className="text-gray-600 mt-2">
            {isLogin ? t('login.welcome') : t('login.startJourney')}
          </p>
        </div>

        {/* 完善信息步骤 */}
        {currentStep === 2 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">完善个人信息</h2>
            <BirthInfoForm
              onSave={handleSaveBirthInfo}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* 登录表单 */}
        {currentStep === 1 && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold">{t('login.phoneLogin')}</h2>
            </div>

            <div>
              <Label htmlFor="phone">{t('login.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                required
              />
            </div>

            <div>
              <Label htmlFor="code">{t('login.verifyCode')}</Label>
              <div className="flex space-x-2">
                <Input
                  id="code"
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  placeholder="请输入验证码"
                  required
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleSendCode}
                  disabled={!phone || countdown > 0 || loading}
                  className="whitespace-nowrap"
                >
                  {countdown > 0 ? `${countdown}s` : t('login.getCode')}
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={!phone || !verifyCode || loading}
            >
              {loading ? t('common.loading') : t('login.login')}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
