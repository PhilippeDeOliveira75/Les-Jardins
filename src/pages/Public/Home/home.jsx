import './home.scss';
import { Champ } from '@assets/import';
import { Intro, AboutUs, FeaturedProducts, Contact } from '@components/import';

function Home() {
  return (
    <main className="home">

      <Intro />
      <AboutUs />
      <FeaturedProducts />
      <Contact />

    </main>
  );
}

export default Home;