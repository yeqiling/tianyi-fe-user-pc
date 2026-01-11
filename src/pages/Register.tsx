import {
  RegisterHeader,
  RegisterForm,
  RegisterFooter,
} from '@/components/register';

export function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-5 px-7 box-border">
      <RegisterHeader />
      <RegisterForm />
      <RegisterFooter />
    </div>
  );
}

export default RegisterPage;
