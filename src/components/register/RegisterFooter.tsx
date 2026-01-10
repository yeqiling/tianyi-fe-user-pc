import { Link } from '@tanstack/react-router';

export function RegisterFooter() {
  return (
    <>
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
