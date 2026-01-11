import { useStore } from '@tanstack/react-store';
import { userStore } from '../stores/userStore';
import { navigationStore } from '../stores/navigationStore';
import { modalStore } from '../stores/modalStore';
import { dialogStore } from '../stores/dialogStore';
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

export default function MingShuPage() {
  const userState = useStore(userStore);
  const navState = useStore(navigationStore);
  const modalState = useStore(modalStore);
  const dialogState = useStore(dialogStore);

  const switchMenu = (menu: string) => {
    navigationStore.setState((prev) => ({ ...prev, activeMenu: menu as any }));
  };

  const addSubAccount = () => {
    modalStore.setState((prev) => ({ ...prev, AddSubAccountModelShow: true }));
  };

  const showMyVip = () => {
    modalStore.setState((prev) => ({ ...prev, myMemberPageShow: true }));
  };

  const showBaziPaipan2 = (service: string, icon: string) => {
    navigationStore.setState((prev) => ({
      ...prev,
      showBaziContent: true,
      selectedItem: service,
      title: service,
      titleIcon: icon,
    }));
  };

  const showVipModal = () => {
    modalStore.setState((prev) => ({ ...prev, vipModelVisible: true }));
  };

  const goBack = () => {
    navigationStore.setState((prev) => ({ ...prev, showBaziContent: false }));
  };

  const handleSelect = (item: string) => {
    navigationStore.setState((prev) => ({ ...prev, selectedItem: item }));
  };

  const goBackToMingshu = () => {
    navigationStore.setState((prev) => ({
      ...prev,
      showBaziContent: false,
      activeMenu: '命书',
    }));
  };

  // TODO: Implement these handlers
  const handleClickReport = () => {};
  const handleNewDialog = () => {};
  const handleSelectHistory = (item: any) => {};
  const handleCreateNewReport = () => {};
  const handleSelectReportHistory = (item: any) => {};
  const handleUpdateLatestReport = (data: any) => {};
  const cesuanbeijingSide = (data: any) => {};
  const showMyMemberPage = () => {
    modalStore.setState((prev) => ({ ...prev, myMemberPageShow: true }));
  };

  // VIP Modal handlers
  const confirmVip = () => {
    console.log('VIP confirmed');
    modalStore.setState((prev) => ({ ...prev, vipModelVisible: false }));
  };

  const pollOrderStatus = () => {
    console.log('Polling order status');
  };

  const redeemCodeSuccess = () => {
    console.log('Redeem code success');
    modalStore.setState((prev) => ({ ...prev, vipModelVisible: false }));
  };

  // StartHunLian handlers
  const funShowReport = (data: any) => {
    console.log('Show report:', data);
    dialogStore.setState((prev) => ({ ...prev, reportView: true }));
  };

  const onPaySuccess = () => {
    console.log('Pay success');
  };

  const cesuanbeijingFun = (data: any) => {
    console.log('Cesuanbeijing:', data);
    dialogStore.setState((prev) => ({ ...prev, reportMessage: data }));
  };

  const getReportFive = (data: any) => {
    console.log('Get report five:', data);
  };

  // Modal handlers
  const showXingbiDetail = () => {
    modalStore.setState((prev) => ({ ...prev, showXingbi: true }));
  };

  const closeModal = () => {
    modalStore.setState((prev) => ({ ...prev, showXingbi: false }));
  };

  const showeditModal = () => {
    modalStore.setState((prev) => ({ ...prev, showEditUserInfo: true }));
  };

  const close = () => {
    modalStore.setState((prev) => ({ ...prev, showEditUserInfo: false }));
  };

  const showSubAccModal = () => {
    modalStore.setState((prev) => ({ ...prev, subAccModal: true }));
  };

  const closeSubAccModal = () => {
    modalStore.setState((prev) => ({ ...prev, subAccModal: false }));
  };

  const closeAddSubAccountModal = () => {
    modalStore.setState((prev) => ({ ...prev, AddSubAccountModelShow: false }));
  };

  const updateXiaohao = () => {
    // TODO: Refresh sub account list
    console.log('Update xiaohao list');
  };

  const onClose = () => {
    modalStore.setState((prev) => ({ ...prev, myMemberPageShow: false }));
  };

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
      <MingShuSidebar
        userInfo={userState.userInfo}
        subAccounts={userState.subAccounts}
        money={userState.money}
        activeMenu={navState.activeMenu}
        onSwitchMenu={switchMenu}
        onAddSubAccount={addSubAccount}
        onShowMyVip={showMyVip}
      />

      {/* 右侧内容区 */}
      <div style={{ flex: 1, backgroundColor: '#fff' }}>
        {navState.showBaziContent ? (
          <div style={{ display: 'flex', height: '100%' }}>
            {/* BaziSidebar component */}
            <BaziSidebar
              titleIcon={navState.titleIcon}
              title={navState.title}
              activeMenu={navState.activeMenu}
              onBack={goBack}
              onSelect={handleSelect}
              onClickReport={handleClickReport}
              onNewDialog={handleNewDialog}
              onSelectHistory={handleSelectHistory}
              onBackToMingshu={goBackToMingshu}
              onCreateNewReport={handleCreateNewReport}
              onSelectReportHistory={handleSelectReportHistory}
              onUpdateLatestReport={handleUpdateLatestReport}
              onShowVip={showVipModal}
              onCesuanbeijingFunction={cesuanbeijingSide}
              onShowMyMemberPage={showMyMemberPage}
            />
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
                {navState.activeMenu} / {navState.title} /
                <span style={{ color: '#000' }}>{navState.selectedItem}</span>
              </div>

              {/* TODO: Content based on selectedItem */}
              {navState.selectedItem === '八字排盘' && <BaziPaipan />}

              {navState.selectedItem.endsWith('报告') && (
                <BaziReport
                  title={navState.selectedItem}
                  message={dialogState.reportMessage}
                  onUpdateReportList={() => {}}
                  onShowLoading={(show) =>
                    modalStore.setState((prev) => ({
                      ...prev,
                      u_loading: show,
                    }))
                  }
                  onNewDialogCreated={(dialog) => {}}
                />
              )}

              {navState.selectedItem.endsWith('对话') && (
                <BaziDialog
                  currentDialog={dialogState.currentDialog}
                  isNew={dialogState.isNew}
                  currentData={dialogState.currentData}
                  isPollingCancelled={dialogState.isPollingCancelled}
                  hasGeneratedReport={!!dialogState.latestReportData}
                  onNewDialogCreated={(dialog) => {}}
                  onUpdateMoney={(amount) =>
                    userStore.setState((prev) => ({ ...prev, money: amount }))
                  }
                />
              )}

              {/* VIP 功能入口（如"婚恋合盘"） */}
              {isSpecialEntry(navState.selectedItem) && (
                <StartHunLian
                  title={navState.selectedItem}
                  onShowReport={funShowReport}
                  onPaySuccess={onPaySuccess}
                  onCesuanbeijingFunction={cesuanbeijingFun}
                  onShowVip={showVipModal}
                  onGetReportFive={getReportFive}
                  onShowMyMemberPage={showMyMemberPage}
                />
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
              <WelcomePage
                activeMenu={navState.activeMenu}
                onShowBazi={showBaziPaipan2}
                onShowVipModal={showVipModal}
              />
            )}

            {navState.activeMenu === '运阁' && (
              <YungeWelcome
                onShowBazi={showBaziPaipan2}
                onShowVipModal={showVipModal}
              />
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
      {modalState.vipModelVisible && (
        <VipModal
          visible={modalState.vipModelVisible}
          onUpdateVisible={(visible) =>
            modalStore.setState((prev) => ({
              ...prev,
              vipModelVisible: visible,
            }))
          }
          onConfirm={confirmVip}
          onPollOrderStatus={pollOrderStatus}
          onRedeemCodeSuccess={redeemCodeSuccess}
        />
      )}

      {modalState.myMemberPageShow && (
        <MyMemberPage
          onClose={onClose}
          onShowModal={showXingbiDetail}
          onShoweditModal={showeditModal}
          onShowSubAccModal={showSubAccModal}
          onPollOrderStatus={pollOrderStatus}
        />
      )}

      {modalState.showXingbi && (
        <XingbiDetail
          showModal={modalState.showXingbi}
          money={userState.money}
          onClose={closeModal}
        />
      )}

      {modalState.showEditUserInfo && (
        <EditUserInfo
          showModal={modalState.showEditUserInfo}
          editType="1"
          onClose={close}
        />
      )}

      {modalState.subAccModal && (
        <SubAccountList
          showModal={modalState.subAccModal}
          onClose={closeSubAccModal}
        />
      )}

      {modalState.AddSubAccountModelShow && (
        <AddSubAccount
          showModal={modalState.AddSubAccountModelShow}
          onCancel={closeAddSubAccountModal}
          onUpdateXiaohao={updateXiaohao}
        />
      )}

      {modalState.u_loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div style={{ color: '#fff', fontSize: '18px' }}>
            {modalState.loadingText}
          </div>
        </div>
      )}
    </div>
  );
}
