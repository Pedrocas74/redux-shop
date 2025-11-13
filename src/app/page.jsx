
import Hero from '@components/Hero';
import InfoSection from '@components/InfoSection';
// import ProductsList from '@features/products/ProductsList';
import Reviews from '@components/Reviews';
import Footer from '@components/Footer';
import PaymentBanner from '@components/PaymentBanner.';
import LazyProductsSection from '@components/LazyProductsSection';
import { Suspense } from 'react';


export default function Home() {
  return (
    <main>
      <Suspense>
        <PaymentBanner /> 
      </Suspense>

      <Hero />  
      <InfoSection />
      <LazyProductsSection />
      <Reviews />
      <Footer />
    </main>
  );
}