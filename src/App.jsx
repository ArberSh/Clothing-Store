import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyUs from './components/WhyUs';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <WhyUs />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
