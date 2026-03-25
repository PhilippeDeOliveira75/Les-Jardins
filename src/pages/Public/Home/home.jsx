import './home.scss';
import { Champ } from '@assets/import';
import { AboutUs, ProductCard } from '@components/import';
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
      <section className="home__products" id="products">
        <h2>Nos légumes de saison</h2>
        <div className="home__products-grid">
          {featuredProducts.map((p) => (
            <ProductCard key={p.name} product={{ ...p, image: images[p.image] }} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="home__contact" id="contact">
        <h2>Contactez-nous</h2>
        <p>Adresse, téléphone, email ou formulaire ici</p>
        <a href="#contact-form" className="btn-primary">Nous contacter</a>
      </section>

    </main>
  );
}

export default Home;