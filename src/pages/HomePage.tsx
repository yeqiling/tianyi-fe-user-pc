import { useStore } from '@tanstack/react-store';
import {
  homeNavigationStore,
  setActiveNav,
} from '../stores/homeNavigationStore';
import Header from '../components/home/Header';
import HomeView from '../components/home/HomeView';
import ProductView from '../components/home/ProductView';
import AboutView from '../components/home/AboutView';
import AboutMy from '../components/home/AboutMy';
import ProductDetail from '../components/home/ProductDetail';

export default function HomePage() {
  const { activeNav } = useStore(homeNavigationStore);

  const goDetail = (num: number) => {
    setActiveNav(num);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {activeNav === 0 && <HomeView />}
        {activeNav === 1 && <ProductView />}
        {activeNav === 2 && <AboutView onGoDetail={goDetail} />}
        {activeNav === 3 && <AboutMy onGoDetail={goDetail} />}
        {activeNav === 4 && <ProductDetail onGoDetail={goDetail} />}
      </main>
    </div>
  );
}
