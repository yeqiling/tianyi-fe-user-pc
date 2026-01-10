import { Link } from '@tanstack/react-router';

interface LoginFooterProps {
  onForgotPassword: () => void;
}

export function LoginFooter({ onForgotPassword }: LoginFooterProps) {
  return (
    <>
      {/* 注册与忘记密码链接 */}
      <div className="mx-auto w-[488px] flex items-center justify-between text-[13px] text-slate-600 mt-6">
        <div>
          还没有账号？
          <Link
            to="/register"
            className="text-blue-600 cursor-pointer underline"
          >
            立即注册
          </Link>
        </div>
        <span onClick={onForgotPassword} className="cursor-pointer underline">
          忘记密码？
        </span>
      </div>

      {/* 服务条款 */}
      <div className="mx-auto w-[488px] flex items-center justify-center text-xs text-gray-500 mt-5 text-center">
        登录即表示您同意
        {/*terms*/}
        {/*privacy*/}
        <Link to="/" className="text-blue-600 no-underline mx-0.5">
          《服务条款》
        </Link>
        和
        <Link to="/" className="text-blue-600 no-underline mx-0.5">
          《隐私政策》
        </Link>
      </div>
    </>
  );
}
