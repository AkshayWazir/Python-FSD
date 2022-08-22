import React from "react";
import "./styles.css";

export default function ShopItem(props) {
  const { title, price } = props;
  return (
    <div className="shop-item-container">
      <p className="shop-item-title">{title}</p>
      <p className="shop-item-price">{`${price} $`}</p>
      <p className="shop-item-button">+</p>
    </div>
  );
}
