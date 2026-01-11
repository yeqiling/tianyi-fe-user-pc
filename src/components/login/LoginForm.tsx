import React from 'react';
import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { loginStore, loginActions, userActions } from '@/stores';
import { apiService } from '@/services/api';

export function LoginForm() {
  const navigate = useNavigate();
  const { loginForm, loginLoading } = useStore(loginStore);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneReg = /^1[3-9]\d{9}$/;
    if (!loginForm.phone) {
      toast('请输入手机号');
      return;
    }
    if (!phoneReg.test(loginForm.phone)) {
      toast('手机号格式不正确');
      return;
    }
    if (!loginForm.password) {
      toast('请输入密码');
      return;
    }

    try {
      loginActions.setLoginLoading(true);
      localStorage.removeItem('token');
      localStorage.removeItem('TOKEN_EXPIRE_TIME');
      localStorage.removeItem('user');

      const result = await apiService.login(loginForm);

      if (result.code === 0) {
        const { token, user, expire } = result;
        if (!token) {
          toast('登录异常：缺少 token');
          return;
        }

        const expireTime = Date.now() + (expire || 2592000) * 1000;
        localStorage.setItem('token', token);
        localStorage.setItem('TOKEN_EXPIRE_TIME', expireTime.toString());
        localStorage.setItem('user', JSON.stringify(user));

        toast('登录成功');
        userActions.login(user);
        navigate({ to: '/mingshu' });
      } else {
        toast(result.msg || '登录失败');
      }
    } catch (error) {
      console.error('登录异常:', error);
      toast('网络错误，请稍后重试');
    } finally {
      loginActions.setLoginLoading(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    loginActions.updateLoginForm('phone', value);
  };

  const handlePasswordChange = (value: string) => {
    loginActions.updateLoginForm('password', value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-[488px] bg-white p-7 shadow-sm rounded-xl"
    >
      <div className="font-medium text-lg text-black mb-5">手机验证码登录</div>

      {/* 手机号 */}
      <div className="w-full mb-5">
        <div className="font-medium text-base text-black mb-4">手机号码</div>
        <div className="relative flex items-center">
          <span className="w-14 h-[52px] leading-[52px] absolute left-0.5 top-0.5 text-sm text-gray-500 px-2.5 bg-gray-50 border-r border-gray-300 z-10 rounded-l-lg">
            +86
          </span>
          <input
            type="number"
            value={loginForm.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="手机号"
            maxLength={11}
            className="w-full h-[54px] pl-[83px] pr-4 border border-gray-300 rounded-lg text-sm bg-white"
          />
        </div>
      </div>

      {/* 密码 */}
      <div className="w-full mb-5">
        <div className="font-medium text-base text-black mb-4">密码</div>
        <input
          type="password"
          value={loginForm.password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder="密码"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-sm bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={loginLoading}
        className={`w-full h-[54px] text-white text-[15px] rounded-lg flex items-center justify-center mt-6 border-none ${
          loginLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gray-500 cursor-pointer'
        }`}
      >
        {loginLoading ? '登录中...' : '步入玄境'}
      </button>
    </form>
  );
}
