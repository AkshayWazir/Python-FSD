import React from "react";
import "./styles.css";

export default function TopNavBar(props) {
  const { title = "E-com Store", sizeOfCart = 0, tags } = props;
  return (
    <div className="topNavBar-container">
      <p className="topNavBar-title">{title}</p>
      <p>{tags}</p>
      <span className="icon-container">
        <img src="images/cart.svg" className="topNavBar-icon" alt="cart" />
        {sizeOfCart > 0 && <p className="topNavBar-icon-tooltip">{sizeOfCart}</p>}
      </span>
    </div>
  );
}
