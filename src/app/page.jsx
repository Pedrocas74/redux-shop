import ProductsList from '@features/products/ProductsList';
import Hero from '@components/Hero';
import InfoSection from '@components/InfoSection';


export default function Home() {
  return (
    <main>
      <Hero />  
      <InfoSection />
      <ProductsList />
    </main>
  );
}