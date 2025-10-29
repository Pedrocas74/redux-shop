import ProductsList from '@features/products/ProductsList';
import Hero from '@components/Hero';
import InfoSection from '@components/InfoSection';
import Reviews from '@components/Reviews';


export default function Home() {
  return (
    <main>
      <Hero />  
      <InfoSection />
      <ProductsList />
      <Reviews />
    </main>
  );
}