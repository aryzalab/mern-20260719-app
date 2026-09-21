import { Link } from "react-router";

const Header = () => {
  return (
    <nav
      style={{
        padding: "1rem",
        background: "yellow",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
