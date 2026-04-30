import "./Main.css";
import products from "./Products.json";

export default function Main() {
  return (
    <>
      <div className="grid">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} грн</p>
          </div>
        ))}
      </div>
    </>
  );
}