import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/sonner';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
});

export const Route = rootRoute;
