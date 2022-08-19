import React from "react";
import "./App.css";
import Card from "./components/card";

export default function App() {
  const cards = [
    { title: "Shoes", price: 200 },
    { title: "Tshirt", price: 100 },
    { title: "Pants", price: 400 },
  ];

  return (
    <div className="App">
      {cards.map((item) => (
        <Card {...item} />
      ))}
      {/* <Card title="Shoes" price="100" />
      <Card title="Pants" price="500" />
      <Card title="Hats" price="400" /> */}
    </div>
  );
}
