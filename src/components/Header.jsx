import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>Taco Fiesta</h1>
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}