import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { navigationActions } from '@/stores/navigationStore';
import WelcomePage from '@/components/mingshu/WelcomePage';

export const Route = createFileRoute('/mingshu/baoge')({
  component: BaogeRoute,
});

function BaogeRoute() {
  useEffect(() => {
    navigationActions.setActiveMenu('宝阁');
    navigationActions.hideBaziContent();
  }, []);

  return <WelcomePage />;
}
