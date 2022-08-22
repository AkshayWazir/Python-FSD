import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  return (
    <div className="topNavBar-container">
      <p className="topNavBar-title">Ecom Store</p>
      <span className="icon-container">
        <img src="images/cart.svg" className="topNavBar-icon" alt="cart" />
      </span>
    </div>
  );
}
