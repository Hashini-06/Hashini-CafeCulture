"use client"; // Since it uses React state/hooks

import React, { useState } from "react";

const menuItems = [
  { name: "Espresso", description: "Strong and bold coffee shot." },
  { name: "Cappuccino", description: "Espresso with steamed milk foam." },
  { name: "Latte", description: "Espresso with steamed milk." },
  { name: "Americano", description: "Espresso diluted with hot water." },
  { name: "Mocha", description: "Chocolate flavored latte." },
  { name: "Cold Coffee", description: "Chilled coffee with milk." },
  { name: "Green Tea", description: "Refreshing and healthy tea." },
  { name: "Black Coffee", description: "Plain brewed coffee." },
  { name: "Brownie", description: "Chocolate dessert." },
  { name: "Croissant", description: "Buttery flaky pastry." },
];

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
  };

  const { name, description } = menuItems[currentIndex];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f5f5dc",
        minHeight: "80vh",
      }}
    >
      <h1 style={{ color: "brown", marginBottom: "20px" }}>Menu</h1>
      <div
        style={{
          border: "2px solid brown",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "darkgreen", marginBottom: "10px" }}>{name}</h2>
        <p style={{ color: "gray", fontSize: "16px" }}>{description}</p>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={prevSlide}
            style={{
              marginRight: "20px",
              padding: "10px 20px",
              backgroundColor: "brown",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            style={{
              padding: "10px 20px",
              backgroundColor: "brown",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
