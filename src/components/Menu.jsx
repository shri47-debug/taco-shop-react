import React from 'react';

const items = [
  {
    name: "Beef Taco",
    description: "Juicy beef, salsa, and cheddar.",
    price: "₹99",
    image: "/beef.jpg"
  },
  {
    name: "Veg Taco",
    description: "Grilled veggies with guac and cheese.",
    price: "₹89",
    image: "/veg.jpg"
  },
  {
    name: "Spicy Chicken Taco",
    description: "Chicken with jalapeños and sour cream.",
    price: "₹109",
    image: "/chicken.jpg"
  }
];

export default function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <h2>Menu</h2>
        <div className="menu-grid">
          {items.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}