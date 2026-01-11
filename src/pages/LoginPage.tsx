import React from 'react';
import { useStore } from '@tanstack/react-store';
import { useNavigate } from '@tanstack/react-router';
import { loginStore, loginActions, userActions } from '@/stores';
import { apiService } from '@/services/api';
import {
  LoginHeader,
  LoginForm,
  LoginFooter,
  ForgotPasswordModal,
} from '@/components/login';

import { toast } from 'sonner';

export function LoginPage() {
  const navigate = useNavigate();
  const { loginForm, forgetPwdForm, passwordModelShow, loading } =
    useStore(loginStore);

  const handleLogin = async (e: React.FormEvent) => {
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
      loginActions.setLoading(true);
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
        navigate({ to: '/' });
      } else {
        toast(result.msg || '登录失败');
      }
    } catch (error) {
      console.error('登录异常:', error);
      toast('网络错误，请稍后重试');
    } finally {
      loginActions.setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    try {
      loginActions.setLoading(true);
      const result = await apiService.forgetPassword({
        phone: forgetPwdForm.phone,
        msg: forgetPwdForm.verifyCode,
        pwd: forgetPwdForm.password,
      });

      if (result.code === 0) {
        toast('密码重置成功');
        loginActions.resetForm();
        loginActions.hidePasswordModal();
      } else {
        toast(result.msg || '重置失败');
      }
    } catch (error) {
      console.error('重置密码失败:', error);
      toast('网络错误，请稍后重试');
    } finally {
      loginActions.setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7">
      <LoginHeader />

      <LoginForm
        phone={loginForm.phone}
        password={loginForm.password}
        loading={loading}
        onPhoneChange={(value) => loginActions.updateLoginForm('phone', value)}
        onPasswordChange={(value) =>
          loginActions.updateLoginForm('password', value)
        }
        onSubmit={handleLogin}
      />

      <LoginFooter onForgotPassword={loginActions.showPasswordModal} />

      <ForgotPasswordModal
        show={passwordModelShow}
        phone={forgetPwdForm.phone}
        verifyCode={forgetPwdForm.verifyCode}
        password={forgetPwdForm.password}
        loading={loading}
        onPhoneChange={(value) =>
          loginActions.updateForgetPwdForm('phone', value)
        }
        onVerifyCodeChange={(value) =>
          loginActions.updateForgetPwdForm('verifyCode', value)
        }
        onPasswordChange={(value) =>
          loginActions.updateForgetPwdForm('password', value)
        }
        onSubmit={handlePasswordReset}
        onClose={loginActions.hidePasswordModal}
      />
    </div>
  );
}

export default LoginPage;
