export default function History() {
  const history =
    JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div>
      <h1>Історія покупок</h1>

      {history.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.price} грн</p>
        </div>
      ))}
    </div>
  );
}