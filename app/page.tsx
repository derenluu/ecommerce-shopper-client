import Hero from '@/components/Hero';
import NewCollection from '@/components/NewCollection';
import NewsLetter from '@/components/NewsLetter';
import Offers from '@/components/Offers';
import Popular from '@/components/Popular';

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </>
  );
}
