import React from 'react'
import {useStore} from '@tanstack/react-store'
import {useNavigate} from '@tanstack/react-router'
import {loginStore, loginActions, userActions} from '@/stores'
import {apiService} from '@/services/api'
import AuthCode from '@/components/login/AuthCode.tsx'

import icon from '@/assets/images/icon.png'

export function LoginPage() {
    const navigate = useNavigate()
    const {loginForm, forgetPwdForm, passwordModelShow, loading} = useStore(loginStore)

    const handleLoginFormChange = (field: keyof typeof loginForm, value: string) => {
        loginActions.updateLoginForm(field, value)
    }

    const handleForgetPwdFormChange = (field: keyof typeof forgetPwdForm, value: string) => {
        loginActions.updateForgetPwdForm(field, value)
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        const phoneReg = /^1[3-9]\d{9}$/
        if (!loginForm.phone) {
            alert('请输入手机号')
            return
        }
        if (!phoneReg.test(loginForm.phone)) {
            alert('手机号格式不正确')
            return
        }
        if (!loginForm.password) {
            alert('请输入密码')
            return
        }

        try {
            loginActions.setLoading(true)
            localStorage.removeItem('token')
            localStorage.removeItem('TOKEN_EXPIRE_TIME')
            localStorage.removeItem('user')

            const result = await apiService.login(loginForm)

            if (result.code === 0) {
                const {token, user, expire} = result
                if (!token) {
                    alert('登录异常：缺少 token')
                    return
                }

                const expireTime = Date.now() + (expire || 2592000) * 1000
                localStorage.setItem('token', token)
                localStorage.setItem('TOKEN_EXPIRE_TIME', expireTime.toString())
                localStorage.setItem('user', JSON.stringify(user))

                alert('登录成功')
                userActions.login(user)
                navigate({to: '/'})
            } else {
                alert(result.msg || '登录失败')
            }
        } catch (error) {
            console.error('登录异常:', error)
            alert('网络错误，请稍后重试')
        } finally {
            loginActions.setLoading(false)
        }
    }

    const handlePasswordReset = async () => {
        try {
            loginActions.setLoading(true)
            const result = await apiService.forgetPassword({
                phone: forgetPwdForm.phone,
                msg: forgetPwdForm.verifyCode,
                pwd: forgetPwdForm.password
            })

            if (result.code === 0) {
                alert('密码重置成功')
                loginActions.resetForm()
                loginActions.hidePasswordModal()
            } else {
                alert(result.msg || '重置失败')
            }
        } catch (error) {
            console.error('重置密码失败:', error)
            alert('网络错误，请稍后重试')
        } finally {
            loginActions.setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7">
            <div className="flex flex-col justify-center items-center">
                {/* Logo */}
                <img
                    src={icon}
                    alt="天乙神算"
                    className="w-[157px] h-[131px] mb-5"
                />

                {/* 标题 */}
                <div className="text-base text-slate-600 text-center mb-7">
                    欢迎回来
                </div>

                {/* 登录表单 */}
                <form onSubmit={handleLogin} className="mx-auto w-[488px] bg-white p-7 shadow-sm rounded-xl">
                    <div className="font-medium text-lg text-black mb-5">
                        手机验证码登录
                    </div>

                    {/* 手机号 */}
                    <div className="w-full mb-5">
                        <div className="font-medium text-base text-black mb-4">
                            手机号码
                        </div>
                        <div className="relative flex items-center">
              <span
                  className="w-14 h-[52px] leading-[52px] absolute left-0.5 top-0.5 text-sm text-gray-500 px-2.5 bg-gray-50 border-r border-gray-300 z-10 rounded-l-lg">
                +86
              </span>
                            <input
                                type="number"
                                value={loginForm.phone}
                                onChange={(e) => handleLoginFormChange('phone', e.target.value)}
                                placeholder="手机号"
                                maxLength={11}
                                className="w-full h-[54px] pl-[83px] pr-4 border border-gray-300 rounded-lg text-sm bg-white"
                            />
                        </div>
                    </div>

                    {/* 密码 */}
                    <div className="w-full mb-5">
                        <div className="font-medium text-base text-black mb-4">
                            密码
                        </div>
                        <input
                            type="password"
                            value={loginForm.password}
                            onChange={(e) => handleLoginFormChange('password', e.target.value)}
                            placeholder="密码"
                            className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-sm bg-white"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full h-[54px] text-white text-[15px] rounded-lg flex items-center justify-center mt-6 border-none ${
                            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 cursor-pointer'
                        }`}
                    >
                        {loading ? '登录中...' : '步入玄境'}
                    </button>
                </form>

                {/* 注册与忘记密码链接 */}
                <div className="mx-auto w-[488px] flex items-center justify-between text-[13px] text-slate-600 mt-6">
                    <div>
                        还没有账号？
                        <a href="/register" className="text-blue-600 cursor-pointer underline">
                            立即注册
                        </a>
                    </div>
                    <span
                        onClick={loginActions.showPasswordModal}
                        className="cursor-pointer underline"
                    >
            忘记密码？
          </span>
                </div>

                {/* 服务条款 */}
                <div
                    className="mx-auto w-[488px] flex items-center justify-center text-xs text-gray-500 mt-5 text-center">
                    登录即表示您同意
                    <a href="/terms" className="text-blue-600 no-underline mx-0.5">
                        《服务条款》
                    </a>
                    和
                    <a href="/privacy" className="text-blue-600 no-underline mx-0.5">
                        《隐私政策》
                    </a>
                </div>
            </div>

            {/* 忘记密码弹窗 */}
            {passwordModelShow && (
                <div 
                    className="fixed inset-0 flex items-center justify-center z-[1000]" 
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                    onClick={loginActions.hidePasswordModal}
                >
                    <div className="w-[488px] h-[495px] bg-white rounded-xl p-7 relative" onClick={(e) => e.stopPropagation()}>

                        <div className="font-medium text-lg text-black mb-5">
                            修改密码
                        </div>

                        {/* 手机号 */}
                        <div className="w-full mb-5">
                            <div className="font-medium text-base text-black mb-4">
                                手机号码
                            </div>
                            <div className="relative flex items-center">
                <span
                    className="w-14 h-[52px] leading-[52px] absolute left-0.5 top-0.5 text-sm text-gray-500 px-2.5 bg-gray-50 border-r border-gray-300 z-10 rounded-l-lg">
                  +86
                </span>
                                <input
                                    type="number"
                                    value={forgetPwdForm.phone}
                                    onChange={(e) => handleForgetPwdFormChange('phone', e.target.value)}
                                    placeholder="手机号"
                                    maxLength={11}
                                    className="w-full h-[54px] pl-[83px] pr-4 border border-gray-300 rounded-lg text-sm bg-white"
                                />
                            </div>
                        </div>

                        {/* 验证码 */}
                        <div className="w-full mb-5">
                            <div className="font-medium text-base text-black mb-4">
                                验证码
                            </div>
                            <div className="flex">
                                <input
                                    value={forgetPwdForm.verifyCode}
                                    onChange={(e) => handleForgetPwdFormChange('verifyCode', e.target.value)}
                                    placeholder="验证码"
                                    className="w-[70%] h-[54px] mr-2.5 px-4 border border-gray-300 rounded-lg text-sm bg-white"
                                />
                                <div
                                    className="w-[28%] h-[54px] leading-[54px] text-center bg-gray-50 rounded-lg border border-gray-300">
                                    <AuthCode
                                        phone={forgetPwdForm.phone}
                                        value={forgetPwdForm.verifyCode}
                                        onChange={(value) => handleForgetPwdFormChange('verifyCode', value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 新密码 */}
                        <div className="w-full mb-5">
                            <div className="font-medium text-base text-black mb-4">
                                新密码
                            </div>
                            <input
                                type="password"
                                value={forgetPwdForm.password}
                                onChange={(e) => handleForgetPwdFormChange('password', e.target.value)}
                                placeholder="新密码"
                                className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-sm bg-white"
                            />
                        </div>

                        <button
                            onClick={handlePasswordReset}
                            disabled={loading}
                            className={`w-full h-[54px] text-white text-[15px] rounded-lg flex items-center justify-center mt-6 border-none ${
                                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black cursor-pointer'
                            }`}
                        >
                            {loading ? '处理中...' : '确认修改'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginPage
