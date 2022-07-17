import "./Products.css";

const Product = ({ product, increasedCount }) => {
  const { image, category, title, price } = product;
  return (
    <div className="product">
      <img src={image} alt={title} className="product__img" />
      <div className="product__details">
        <span className="product__category">{category}</span>
        <h2 className="product__title">{title}</h2>
        <h3 className="product__price">Price: ${price}</h3>
        <button className="product__button" onClick={increasedCount}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
