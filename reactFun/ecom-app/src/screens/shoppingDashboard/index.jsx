import React from "react";
import { TopNavBar } from "../../components/shared";
import "./styles.css";

export default function ShoppingDashboard(props) {
  const listOfProducts = [
    { id: 0, name: "Ball Pen", price: 123 },
    { id: 1, name: "Shirt", price: 32 },
    { id: 2, name: "Pants", price: 23 },
    { id: 3, name: "Glue", price: 45 },
    { id: 4, name: "Paper", price: 56 },
    { id: 5, name: "Notebooks", price: 36 },
  ];

  return (
    <div className="shopDash-container">
      <TopNavBar sizeOfCart={0} />
      <div>
        
      </div>
    </div>
  );
}
