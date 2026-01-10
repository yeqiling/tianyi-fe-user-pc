import React from 'react';
import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import { registerStore, registerActions, userActions } from '@/stores';
import { apiService } from '@/services/api';
import AuthCode from '@/components/login/AuthCode.tsx';

import icon from '@/assets/images/icon.png';

export function RegisterPage() {
  const navigate = useNavigate();
  const { registerForm, loading } = useStore(registerStore);

  const handleFormChange = (
    field: keyof typeof registerForm,
    value: string
  ) => {
    registerActions.updateForm(field, value);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneReg = /^1[3-9]\d{9}$/;
    if (!registerForm.phone) {
      alert('请输入手机号');
      return;
    }
    if (!phoneReg.test(registerForm.phone)) {
      alert('手机号格式不正确');
      return;
    }
    if (!registerForm.msg) {
      alert('请输入验证码');
      return;
    }
    if (!registerForm.password) {
      alert('请输入密码');
      return;
    }

    try {
      registerActions.setLoading(true);
      localStorage.removeItem('token');
      localStorage.removeItem('TOKEN_EXPIRE_TIME');
      localStorage.removeItem('user');

      const result = await apiService.registerCode(registerForm);

      if (result.code === 0) {
        const { token, user, expire } = result;
        if (!token) {
          alert('注册异常：缺少 token');
          return;
        }

        const expireTime = Date.now() + (expire || 2592000) * 1000;
        localStorage.setItem('token', token);
        localStorage.setItem('TOKEN_EXPIRE_TIME', expireTime.toString());
        localStorage.setItem('user', JSON.stringify(user));

        alert('注册成功');
        userActions.login(user);
        navigate({ to: '/mingshu' });
      } else {
        alert(result.msg || '注册失败');
      }
    } catch (error) {
      console.error('注册异常:', error);
      alert('网络错误，请稍后重试');
    } finally {
      registerActions.setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7 box-border">
      <div className="flex flex-col justify-center items-center">
        {/* Logo */}
        <img src={icon} alt="天乙神算" className="w-[157px] h-[131px] mb-5" />

        {/* 标题 */}
        <div className="text-base text-slate-600 text-center mb-7">
          开启您的命理探索之旅
        </div>

        {/* 注册表单 */}
        <form
          onSubmit={handleRegister}
          className="mx-auto w-[488px] bg-white p-7 shadow-sm rounded-xl"
        >
          <div className="font-medium text-lg text-black mb-5">账号注册</div>

          {/* 手机号 */}
          <div className="w-full mb-5">
            <div className="font-medium text-base text-black mb-4">
              手机号码
            </div>
            <div className="relative flex items-center">
              <span className="w-14 h-[52px] leading-[52px] absolute left-0.5 top-0.5 text-sm text-gray-500 px-2.5 bg-gray-50 border-r border-gray-300 z-10 rounded-l-lg">
                +86
              </span>
              <input
                type="number"
                value={registerForm.phone}
                onChange={(e) => handleFormChange('phone', e.target.value)}
                placeholder="手机号"
                maxLength={11}
                className="w-full h-[54px] pl-[83px] pr-4 border border-gray-300 rounded-lg text-sm bg-white"
              />
            </div>
          </div>

          {/* 验证码 */}
          <div className="w-full mb-5">
            <div className="font-medium text-base text-black mb-4">验证码</div>
            <div className="flex">
              <input
                value={registerForm.msg}
                onChange={(e) => handleFormChange('msg', e.target.value)}
                placeholder="验证码"
                className="w-[70%] h-[54px] mr-2.5 px-4 border border-gray-300 rounded-lg text-sm bg-white"
              />
              <div className="w-[28%] h-[54px] leading-[54px] text-center bg-gray-50 rounded-lg border border-gray-300">
                <AuthCode
                  phone={registerForm.phone}
                  value={registerForm.msg}
                  onChange={(value) => handleFormChange('msg', value)}
                />
              </div>
            </div>
          </div>

          {/* 密码 */}
          <div className="w-full mb-5">
            <div className="font-medium text-base text-black mb-4">密码</div>
            <input
              type="password"
              value={registerForm.password}
              onChange={(e) => handleFormChange('password', e.target.value)}
              placeholder="请设置密码"
              className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-sm bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-[54px] ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 cursor-pointer'} text-white text-[15px] rounded-lg flex items-center justify-center mt-6 border-none`}
          >
            {loading ? '注册中...' : '步入玄境'}
          </button>
        </form>

        {/* 登录链接 */}
        <div className="mx-auto w-[488px] flex items-center justify-center text-[13px] text-slate-600 mt-6">
          <div>
            已有账号？
            <a href="/login" className="text-blue-600 cursor-pointer underline">
              立即登录
            </a>
          </div>
        </div>

        {/* 服务条款 */}
        <div className="mx-auto w-[488px] flex items-center justify-center text-xs text-gray-500 mt-5 text-center">
          注册即表示您同意
          <a href="/terms" className="text-blue-600 no-underline mx-0.5">
            《服务条款》
          </a>
          和
          <a href="/privacy" className="text-blue-600 no-underline mx-0.5">
            《隐私政策》
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
