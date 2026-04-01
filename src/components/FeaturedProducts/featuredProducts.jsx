import './featuredProducts.scss';
import * as images from '@assets/import';
import productsData from '@data/products.json';

const { featuredProducts } = productsData;

export default function FeaturedProducts() {

  return (

    <section className="featured" id="products">

      <h2 className="featured__title">Nos légumes de saisons</h2>
      
      <div className="featured__grid">
        {featuredProducts.map((p) => (
          <div key={p.name} className="featured__card">
            <div className="featured__card-visual">
              <img src={images[p.image]} alt={p.name} className="featured__card-img" />
              <span className="featured__card-badge">🗓 {p.season}</span>
            </div>
            <div className="featured__card-body">
              <h3 className="featured__card-name">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>

  );
}