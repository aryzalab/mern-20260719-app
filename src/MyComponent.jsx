function MyComponent({ label, info, title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{label}</h2>
      <h5>{subtitle}</h5>
      <p>{info}</p>
    </>
  );
}

export default MyComponent;
