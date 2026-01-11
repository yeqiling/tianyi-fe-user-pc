import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { navigationActions } from '@/stores/navigationStore';
import YungeWelcome from '@/components/mingshu/YungeWelcome';

export const Route = createFileRoute('/mingshu/yunge')({
  component: YungeRoute,
});

function YungeRoute() {
  useEffect(() => {
    navigationActions.setActiveMenu('运阁');
    navigationActions.hideBaziContent();
  }, []);

  return <YungeWelcome />;
}
