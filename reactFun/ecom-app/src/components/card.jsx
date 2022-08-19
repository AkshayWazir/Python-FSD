import React from "react";

export default function Card(props) {
  const { title, price } = props;

  return (
    <div className="card-border">
      <img src="./images/clothes.jpg" className="image-clothes" alt="clothes" />
      <p className="title">{title}</p>
      <span className="vertical-align">
        <p className="title-bold">Price :</p>
        <p className="title-normal">{price}$</p>
      </span>
      <span className="cart-container">
        <img src="./images/cart.svg" alt="cart" className="cart-icon" />
      </span>
    </div>
  );
}
