import { useState, useEffect, useRef } from 'react';
import './App.css';

// Import all components
import Heading from './Components/Heading';
import MainHeader from './Components/MainHeader';
import MainNavigation from './Components/MainNavigation';
import Swiper from './Components/Slider';
import Product from './Components/Product';
import TrendingProducts from './Components/TrendingProducts';
import DealDay from './Components/DealDay';
import Electronics from './Components/Electronics';
import AdSwiper from './Components/AdSwiper';
import NewArrival from './Components/NewArrival';
import DFS from './Components/DFS';
import LatestNews from './Components/LatestNews';
import FixedNav from './Components/FixedNav';
import Instagram from './Components/Instagram';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';

function App() {
  const [showFixedNav, setShowFixedNav] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedNav(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Header section that we're watching */}
      <div ref={headerRef}>
        <Heading />
        <MainHeader />
        <MainNavigation />
      </div>

      {/* Fixed navigation that appears when scrolling */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showFixedNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <FixedNav />
      </div>

      {/* Main content sections */}
      <Swiper />
      <Product />
      <TrendingProducts />
      <DealDay />
      <Electronics />
      <AdSwiper />
      <NewArrival />
      <DFS />
      <LatestNews />
      <Instagram />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
