import "./Main.css";
import products from "./Products.json";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleBuy = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }
    navigate(`/buy/${id}`);
  };

  return (
    <div className="grid">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} грн</p>
          <button onClick={() => handleBuy(product.id)}>Купити</button>
        </div>
      ))}
    </div>
  );
}