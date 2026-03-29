import './productCard.scss';
import * as images from '@assets/import';
import productsData from '@data/products.json';

const { featuredProducts } = productsData;

// Associe une couleur de badge selon la saison de début
function getSeasonColor(season) {
  const s = season.toLowerCase();
  if (s.startsWith('jan') || s.startsWith('fév') || s.startsWith('mar')) return 'spring';
  if (s.startsWith('avr') || s.startsWith('mai') || s.startsWith('jui')) return 'summer';
  if (s.startsWith('jul') || s.startsWith('aoû') || s.startsWith('sep')) return 'autumn';
  return 'winter';
}

function ProductCard({ product }) {
  const seasonClass = getSeasonColor(product.season);

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <span className={`product-card__badge product-card__badge--${seasonClass}`}>
          🗓 {product.season}
        </span>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
      </div>
    </div>
  );
}

// Section complète intégrée directement dans le composant
export function ProductsSection() {
  return (
    <section className="home__products" id="products">
      <h2>Nos légumes de saison</h2>
      <div className="home__products-grid">
        {featuredProducts.map((p) => (
          <ProductCard
            key={p.name}
            product={{ ...p, image: images[p.image] }}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCard;
