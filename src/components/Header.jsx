import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-items">
          <div className="logo">ElectroStore</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="actions">
            <span>🔍</span>
            <span>🛒</span>
            <span>👤</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
