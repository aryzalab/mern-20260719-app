function Card({ name, category, price }) {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h1>{name}</h1>
      <h4 style={{ color: "red" }}>{category}</h4>
      <h3 style={{ color: "blue" }}>{price}</h3>
    </div>
  );
}

export default Card;
