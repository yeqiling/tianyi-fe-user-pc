import React from 'react';
import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import { registerStore, registerActions, userActions } from '@/stores';
import { apiService } from '@/services/api';
import {
  RegisterHeader,
  RegisterForm,
  RegisterFooter,
} from '@/components/register';

import { toast } from 'sonner';

export function RegisterPage() {
  const navigate = useNavigate();
  const { registerForm, loading } = useStore(registerStore);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneReg = /^1[3-9]\d{9}$/;
    if (!registerForm.phone) {
      toast('请输入手机号');
      return;
    }
    if (!phoneReg.test(registerForm.phone)) {
      toast('手机号格式不正确');
      return;
    }
    if (!registerForm.msg) {
      toast('请输入验证码');
      return;
    }
    if (!registerForm.password) {
      toast('请输入密码');
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
          toast('注册异常：缺少 token');
          return;
        }

        const expireTime = Date.now() + (expire || 2592000) * 1000;
        localStorage.setItem('token', token);
        localStorage.setItem('TOKEN_EXPIRE_TIME', expireTime.toString());
        localStorage.setItem('user', JSON.stringify(user));

        toast('注册成功');
        userActions.login(user);
        navigate({ to: '/mingshu' });
      } else {
        toast(result.msg || '注册失败');
      }
    } catch (error) {
      console.error('注册异常:', error);
      toast('网络错误，请稍后重试');
    } finally {
      registerActions.setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7 box-border">
      <RegisterHeader />

      <RegisterForm
        phone={registerForm.phone}
        verifyCode={registerForm.msg}
        password={registerForm.password}
        loading={loading}
        onPhoneChange={(value) => registerActions.updateForm('phone', value)}
        onVerifyCodeChange={(value) => registerActions.updateForm('msg', value)}
        onPasswordChange={(value) =>
          registerActions.updateForm('password', value)
        }
        onSubmit={handleRegister}
      />

      <RegisterFooter />
    </div>
  );
}

export default RegisterPage;
