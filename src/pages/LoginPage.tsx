import {
  LoginHeader,
  LoginForm,
  LoginFooter,
  ForgotPasswordModal,
} from '@/components/login';

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
      <ForgotPasswordModal />
    </div>
  );
}

export default LoginPage;
