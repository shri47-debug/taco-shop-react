import React from 'react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
       <h2 style={{ color: '#222' }}>Welcome to the Tastiest Tacos in Town!</h2>
<p style={{ color: '#444' }}>
  Fresh, handmade, and full of flavor. 🌮
</p>


        {/* 👇 Image inserted here */}
        <img
          src="/taco-banner.jpg"
          alt="Taco Fiesta"
          style={{
            display: 'block',
            margin: '20px auto',
            maxWidth: '80%',
            borderRadius: '12px'
          }}
        />

        <a href="#menu" className="btn">Explore Menu</a>
      </div>
    </section>
  );
}
