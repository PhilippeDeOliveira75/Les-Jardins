import './home.scss';
import { Champ } from '@assets/import';
import { AboutUs, ProductCard, Contact } from '@components/import';
import * as images from '@assets/import';
import productsData from '@data/products.json';

const { featuredProducts } = productsData;

function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="home__hero">
        <img src={Champ} alt="Potager" className="home__hero-bg" />
        <div className="home__hero-content">
          <h1>Bienvenue au Potager de Moselle</h1>
          <p>Légumes frais directement du producteur à votre assiette à Metz</p>
          <a href="#products" className="btn-primary">Voir nos légumes</a>
        </div>
      </section>

      {/* À propos */}
      <AboutUs />

      {/* Produits phares */}


      {/* Contact */}
          <Contact />

    </main>
  );
}

export default Home;