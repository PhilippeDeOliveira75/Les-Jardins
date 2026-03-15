import './productCard.scss';

function ProductCard({ product }) {

  return (

    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <div className="product-card__info">
        <h3>{product.name}</h3>
      </div>
    </div>

  );
  
}

export default ProductCard 