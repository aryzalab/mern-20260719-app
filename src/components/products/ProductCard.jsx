import { Link } from "react-router";

function ProductCard({ id, name, imageUrl, brand, price }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="content">
        <h4>{name}</h4>
        <p>
          Brand: <strong>{brand}</strong>
        </p>
        <h5>Rs. {price}</h5>
        <div className="actions">
          <Link className="button" to={`/products/${id}`}>View</Link>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
