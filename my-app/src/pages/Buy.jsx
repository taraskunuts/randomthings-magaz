import { useParams, useNavigate } from "react-router-dom";
import products from "./Products.json";
import "./Buy.css";

export default function Buy() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <p className="buy-error">Товар не знайдено</p>;
  }

  const pay = () => {
    // 
    navigate("/");
  };

  return (
    <div className="buy-wrapper">
      <div className="buy-card">
        <h1>Оплата</h1>
        <div className="buy-info">
          <p className="buy-name">{product.name}</p>
          <p className="buy-price">{product.price} грн</p>
        </div>
        <button className="buy-btn" onClick={pay}>Оплатити</button>
      </div>
    </div>
  );
}