import React from "react";

const benefits = [
  {
    icon: "🚚",
    label: "Free Shipping",
    info: "on orders over Rs. 1000",
  },
  {
    icon: "🎧",
    label: "24/7 support",
    info: "dedicated team",
  },
  {
    icon: "🔁",
    label: "30 day returns",
    info: "hassle free",
  },
  {
    icon: "🛡",
    label: "1-year warranty",
    info: "on all products",
  },
];

function BenefitCard({ icon, label, info }) {
  return (
    <div className="benefit-card">
      <span>{icon}</span>
      <h3>{label}</h3>
      <p>{info}</p>
    </div>
  );
}

function Benefits() {
  return (
    <section id="benefits">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="benefit-items">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.info}
              info={benefit.info}
              label={benefit.label}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
