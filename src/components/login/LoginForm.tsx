import React from 'react';

interface LoginFormProps {
  phone: string;
  password: string;
  loading: boolean;
  onPhoneChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function LoginForm({
  phone,
  password,
  loading,
  onPhoneChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
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
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
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
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="密码"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-lg text-sm bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full h-[54px] text-white text-[15px] rounded-lg flex items-center justify-center mt-6 border-none ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gray-500 cursor-pointer'
        }`}
      >
        {loading ? '登录中...' : '步入玄境'}
      </button>
    </form>
  );
}
