import './featuredProducts.scss';
import * as images from '@assets/import';
import productsData from '@data/products.json';

const { featuredProducts } = productsData;

export default function FeaturedProducts() {

  return (

    <section className="home__products" id="products">
      <h2>Nos légumes de saisons</h2>
      <div className="home__products-grid">
        {featuredProducts.map((p) => {
          const img = images[p.image];
          return (
            <div key={p.name} className="product-card">
              <div className="product-card__image-wrapper">
                <img src={img} alt={p.name} className="product-card__image" />
                <span className="product-card__badge">🗓 {p.season}</span>
              </div>
              <div className="product-card__info">
                <h3 className="product-card__name">{p.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>

  );
  
}
