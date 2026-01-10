import { useStore } from '@tanstack/react-store'
import { navigationStore, setActiveNav } from '../stores/navigationStore'
import Header from '../components/Header'
import HomeView from '../components/HomeView'
import ProductView from '../components/ProductView'
import AboutView from '../components/AboutView'
import AboutMy from '../components/AboutMy'
import ProductDetail from '../components/ProductDetail'

export default function HomePage() {
  const { activeNav } = useStore(navigationStore)

  const goDetail = (num: number) => {
    setActiveNav(num)
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      <main className="pt-20">
        {activeNav === 0 && <HomeView />}
        {activeNav === 1 && <ProductView />}
        {activeNav === 2 && <AboutView onGoDetail={goDetail} />}
        {activeNav === 3 && <AboutMy onGoDetail={goDetail} />}
        {activeNav === 4 && <ProductDetail onGoDetail={goDetail} />}
      </main>
    </div>
  )
}
