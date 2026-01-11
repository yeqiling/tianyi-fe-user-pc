import { useEffect } from 'react';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';
import { toast } from 'sonner';
import MingShuSidebar from '@/components/mingshu/MingShuSidebar';
import AddSubAccount from '@/components/mingshu/AddSubAccount';
import EditUserInfo from '@/components/mingshu/EditUserInfo';
import LoadingOverlay from '@/components/mingshu/LoadingOverlay';
import MyMemberPage from '@/components/mingshu/MyMemberPage';
import SubAccountList from '@/components/mingshu/SubAccountList';
import VipModal from '@/components/mingshu/VipModal';
import XingbiDetail from '@/components/mingshu/XingbiDetail';
import { userActions } from '@/stores/userStore';
import { clearAuth, isTokenValid } from '@/utils/auth';
import { apiService } from '../services/api';

type MingshuLoaderData = {
  storedUser: any | null;
  userInfo: any | null;
  money: number | null;
  isVip: boolean | null;
  subAccounts: any[] | null;
};

const readStoredUser = (): any | null => {
  const storedUserRaw = localStorage.getItem('user');
  if (!storedUserRaw) {
    return null;
  }

  try {
    return JSON.parse(storedUserRaw);
  } catch (error) {
    console.warn('Failed to parse stored user info:', error);
    return null;
  }
};

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
  loader: async (): Promise<MingshuLoaderData> => {
    const storedUser = readStoredUser();

    const userId = storedUser?.userId;
    const userInfoPromise = userId
      ? apiService.getUserInfoById(String(userId))
      : Promise.resolve(null);

    const [userInfoResult, moneyResult, vipResult, subAccountsResult] =
      await Promise.allSettled([
        userInfoPromise,
        apiService.getUserMoney(),
        apiService.getIsVip(),
        apiService.getSubAccounts(),
      ]);

    const userInfo =
      userInfoResult.status === 'fulfilled' &&
      userInfoResult.value &&
      userInfoResult.value.code === 0 &&
      userInfoResult.value.data
        ? userInfoResult.value.data
        : null;

    const money =
      moneyResult.status === 'fulfilled' && moneyResult.value.code === 0
        ? (moneyResult.value.data?.money ?? 0)
        : null;

    const isVip =
      vipResult.status === 'fulfilled' && vipResult.value.code === 0
        ? Boolean(vipResult.value.data)
        : null;

    const subAccounts =
      subAccountsResult.status === 'fulfilled' &&
      subAccountsResult.value.code === 0
        ? Array.isArray(subAccountsResult.value.data)
          ? subAccountsResult.value.data
          : []
        : null;

    return {
      storedUser,
      userInfo,
      money,
      isVip,
      subAccounts,
    };
  },
  component: MingShuLayout,
});

function MingShuLayout() {
  const { storedUser, userInfo, money, isVip, subAccounts } =
    Route.useLoaderData();

  useEffect(() => {
    localStorage.setItem('saveFiveReport', 'false');

    if (storedUser) {
      userActions.login(storedUser);
    }

    if (userInfo) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(userInfo));
      }
      userActions.login(userInfo);
    }

    if (typeof money === 'number') {
      userActions.setMoney(money);
    }

    if (typeof isVip === 'boolean') {
      userActions.setVip(isVip);
      if (typeof window !== 'undefined') {
        localStorage.setItem('isVip', String(isVip));
      }
    }

    if (Array.isArray(subAccounts)) {
      userActions.setSubAccounts(subAccounts);
    }
  }, [storedUser, userInfo, money, isVip, subAccounts]);

  return (
    <div
      style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f5f5' }}
    >
      <MingShuSidebar />

      <div style={{ flex: 1, backgroundColor: '#fff' }}>
        <Outlet />
      </div>

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
