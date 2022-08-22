import React, { useState } from "react"; // * import the state here
import "./styles.css";

export default function ShopItem(props) {
  const [mul, setMul] = useState(0); // * defining the state multiplier here
  const { title, price, clickAction } = props;
  return (
    <div className="shop-item-container">
      <p className="shop-item-title">{title}</p>
      <p className="shop-item-price">{`${price} $ ${mul > 0 ? "* " + mul : ""}`}</p>
      <p
        className="shop-item-button"
        onClick={() => {
          clickAction();
          setMul(mul + 1);
        }}
      >
        +
      </p>
    </div>
  );
}
