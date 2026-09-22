import heroImage from "/assets/images/hero.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-items">
          <img src={heroImage} alt="hero" className="hero-img" />
          <div className="hero-content">
            <h1>
              Futuristic <span>Electronic</span> Gadgets
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              consequatur corporis esse quia ullam illum. Ullam itaque quis
              culpa fugit?
            </p>
            <div className="actions">
              <button className="explore">Explore</button>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
