import "./Main.css";
import products from "./Products.json";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleBuy = (id) => {
    if (!user) {
      navigate("/login");
      return;
    }

    navigate(`/buy/${id}`);
  };

  return (
    <>
      <div>
        {user ? (
          <h2>Ви ввійшли як: {user.username}</h2>
        ) : (
          <h2>Користувач не увійшов</h2>
        )}
      </div>

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
    </>
  );
}
