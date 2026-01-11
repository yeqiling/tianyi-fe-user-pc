import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { navigationActions } from '@/stores/navigationStore';

export const Route = createFileRoute('/mingshu/kefu')({
  component: KefuRoute,
});

function KefuRoute() {
  useEffect(() => {
    navigationActions.setActiveMenu('kefu');
    navigationActions.hideBaziContent();
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>客服咨询</h2>
      <p>客服功能开发中</p>
    </div>
  );
}
