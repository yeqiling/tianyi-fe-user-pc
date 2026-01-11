import { createFileRoute, redirect } from '@tanstack/react-router';
import { toast } from 'sonner';
import { clearAuth, isTokenValid } from '@/utils/auth';
import MingShuPage from '../pages/MingShuPage';

export const Route = createFileRoute('/mingshu')({
  beforeLoad: async () => {
    if (isTokenValid()) {
      return;
    }

    toast('登录已过期，请重新登录');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    clearAuth();
    throw redirect({ to: '/login' });
  },
  component: MingShuPage,
});
