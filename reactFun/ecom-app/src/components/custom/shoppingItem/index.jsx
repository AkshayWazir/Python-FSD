import React from "react";
import "./styles.css";

export default function ShopItem(props) {
  return (
    <div className="shop-item-container">
      <p className="shop-item-title">Product Name</p>
      <p className="shop-item-price">234 $</p>
      <p className="shop-item-button">+</p>
    </div>
  );
}
