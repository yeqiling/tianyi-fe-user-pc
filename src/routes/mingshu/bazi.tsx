import { useEffect } from 'react';
import { useStore } from '@tanstack/react-store';
import { createFileRoute } from '@tanstack/react-router';
import { navigationActions, navigationStore } from '@/stores/navigationStore';
import BaziSidebar from '@/components/mingshu/BaziSidebar';
import BaziPaipan from '@/components/mingshu/BaziPaipan';
import BaziReport from '@/components/mingshu/BaziReport';
import BaziDialog from '@/components/mingshu/BaziDialog';
import StartHunLian from '@/components/mingshu/StartHunLian';

export const Route = createFileRoute('/mingshu/bazi')({
  component: MingshuBaziRoute,
});

function MingshuBaziRoute() {
  const navState = useStore(navigationStore);
  const breadcrumbTitle = navState.title || navState.selectedItem;

  useEffect(() => {
    navigationActions.showBaziContent();
  }, []);

  const isSpecialEntry = (item: string) => {
    const special = [
      '学业发展',
      '2026年运',
      '婚恋合盘',
      '事业合盘',
      '每日运势',
      '前世今生',
      '起名',
      '好运锦囊',
    ];
    return special.includes(item);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <BaziSidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <div
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '20px',
            padding: '10px 0',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          {navState.activeMenu} / {breadcrumbTitle} /
          <span style={{ color: '#000' }}>{navState.selectedItem}</span>
        </div>

        {navState.selectedItem === '八字排盘' && <BaziPaipan />}

        {navState.selectedItem.endsWith('报告') && <BaziReport />}

        {navState.selectedItem.endsWith('对话') && <BaziDialog />}

        {isSpecialEntry(navState.selectedItem) && <StartHunLian />}

        {!navState.selectedItem.endsWith('报告') &&
          !navState.selectedItem.endsWith('对话') &&
          navState.selectedItem !== '八字排盘' &&
          !isSpecialEntry(navState.selectedItem) && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3>功能开发中</h3>
              <p>敬请期待</p>
            </div>
          )}
      </div>
    </div>
  );
}
