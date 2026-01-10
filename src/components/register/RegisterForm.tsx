import React from 'react';
import AuthCode from '@/components/login/AuthCode';

interface RegisterFormProps {
  phone: string;
  verifyCode: string;
  password: string;
  loading: boolean;
  onPhoneChange: (value: string) => void;
  onVerifyCodeChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function RegisterForm({
  phone,
  verifyCode,
  password,
  loading,
  onPhoneChange,
  onVerifyCodeChange,
  onPasswordChange,
  onSubmit,
}: RegisterFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-[488px] bg-white p-7 shadow-sm rounded-xl"
    >
      <div className="font-medium text-lg text-black mb-5">账号注册</div>

      {/* 手机号 */}
      <div className="w-full mb-5">
        <div className="font-medium text-base text-black mb-4">手机号码</div>
        <div className="relative flex items-center">
          <span className="w-14 h-[52px] leading-[52px] absolute left-0.5 top-0.5 text-sm text-gray-500 px-2.5 bg-gray-50 border-r border-gray-300 z-10 rounded-l-lg">
            +86
          </span>
          <input
            type="number"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
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
            value={verifyCode}
            onChange={(e) => onVerifyCodeChange(e.target.value)}
            placeholder="验证码"
            className="w-[70%] h-[54px] mr-2.5 px-4 border border-gray-300 rounded-lg text-sm bg-white"
          />
          <div className="w-[28%] h-[54px] leading-[54px] text-center bg-gray-50 rounded-lg border border-gray-300">
            <AuthCode
              phone={phone}
              value={verifyCode}
              onChange={onVerifyCodeChange}
            />
          </div>
        </div>
      </div>

      {/* 密码 */}
      <div className="w-full mb-5">
        <div className="font-medium text-base text-black mb-4">密码</div>
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
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
  );
}
