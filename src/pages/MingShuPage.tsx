import { useEffect } from 'react';
import { useStore } from '@tanstack/react-store';
import { navigationStore } from '../stores/navigationStore';
import { userActions } from '../stores/userStore';
import { apiService } from '../services/api';
import WelcomePage from '../components/mingshu/WelcomePage';
import YungeWelcome from '../components/mingshu/YungeWelcome';
import BaziSidebar from '../components/mingshu/BaziSidebar';
import BaziPaipan from '../components/mingshu/BaziPaipan';
import BaziReport from '../components/mingshu/BaziReport';
import BaziDialog from '../components/mingshu/BaziDialog';
import VipModal from '../components/mingshu/VipModal';
import StartHunLian from '../components/mingshu/StartHunLian';
import MyMemberPage from '../components/mingshu/MyMemberPage';
import XingbiDetail from '../components/mingshu/XingbiDetail';
import EditUserInfo from '../components/mingshu/EditUserInfo';
import SubAccountList from '../components/mingshu/SubAccountList';
import AddSubAccount from '../components/mingshu/AddSubAccount';
import MingShuSidebar from '../components/mingshu/MingShuSidebar';
import LoadingOverlay from '../components/mingshu/LoadingOverlay';

export default function MingShuPage() {
  const navState = useStore(navigationStore);
  const breadcrumbTitle = navState.title || navState.selectedItem;

  useEffect(() => {
    localStorage.setItem('saveFiveReport', 'false');

    const storedUserRaw = localStorage.getItem('user');
    let storedUser: any | null = null;
    if (storedUserRaw) {
      try {
        storedUser = JSON.parse(storedUserRaw);
        if (storedUser) {
          userActions.login(storedUser);
        }
      } catch (error) {
        console.warn('Failed to parse stored user info:', error);
      }
    }

    const loadInitialData = async () => {
      const userId = storedUser?.userId;
      const userInfoPromise = userId
        ? apiService.getUserInfoById(String(userId))
        : Promise.resolve(null);

      const [
        userInfoResult,
        moneyResult,
        vipResult,
        subAccountsResult,
      ] = await Promise.allSettled([
        userInfoPromise,
        apiService.getUserMoney(),
        apiService.getIsVip(),
        apiService.getSubAccounts(),
      ]);

      if (
        userInfoResult.status === 'fulfilled' &&
        userInfoResult.value &&
        userInfoResult.value.code === 0 &&
        userInfoResult.value.data
      ) {
        localStorage.setItem('user', JSON.stringify(userInfoResult.value.data));
        userActions.login(userInfoResult.value.data);
      }

      if (
        moneyResult.status === 'fulfilled' &&
        moneyResult.value.code === 0
      ) {
        userActions.setMoney(moneyResult.value.data?.money ?? 0);
      }

      if (
        vipResult.status === 'fulfilled' &&
        vipResult.value.code === 0
      ) {
        userActions.setVip(Boolean(vipResult.value.data));
        localStorage.setItem('isVip', String(vipResult.value.data));
      }

      if (
        subAccountsResult.status === 'fulfilled' &&
        subAccountsResult.value.code === 0
      ) {
        userActions.setSubAccounts(
          Array.isArray(subAccountsResult.value.data)
            ? subAccountsResult.value.data
            : []
        );
      }
    };

    void loadInitialData();
  }, []);

  // Check if current item should show StartHunLian
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
    <div
      style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <MingShuSidebar />

      {/* 右侧内容区 */}
      <div style={{ flex: 1, backgroundColor: '#fff' }}>
        {navState.showBaziContent ? (
          <div style={{ display: 'flex', height: '100%' }}>
            {/* BaziSidebar component */}
            <BaziSidebar />
            {/* Main content area */}
            <div style={{ flex: 1, padding: '20px' }}>
              {/* 面包屑 */}
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

              {/* TODO: Content based on selectedItem */}
              {navState.selectedItem === '八字排盘' && <BaziPaipan />}

              {navState.selectedItem.endsWith('报告') && (
                <BaziReport />
              )}

              {navState.selectedItem.endsWith('对话') && (
                <BaziDialog />
              )}

              {/* VIP 功能入口（如"婚恋合盘"） */}
              {isSpecialEntry(navState.selectedItem) && (
                <StartHunLian />
              )}

              {/* 默认内容 */}
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
        ) : (
          <div>
            {/* Welcome pages based on activeMenu */}
            {(navState.activeMenu === '命书' ||
              navState.activeMenu === '宝阁') && (
              <WelcomePage />
            )}

            {navState.activeMenu === '运阁' && (
              <YungeWelcome />
            )}

            {navState.activeMenu === 'kefu' && (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2>客服咨询</h2>
                <p>客服功能开发中</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      <VipModal />
      <MyMemberPage />
      <XingbiDetail />
      <EditUserInfo />
      <SubAccountList />
      <AddSubAccount />
      <LoadingOverlay />
    </div>
  );
}
