import React, { useState } from "react";
import { ShoppingItem } from "../../components/custom";
import { TopNavBar } from "../../components/shared";
import "./styles.css";

export default function ShoppingDashboard(props) {
  const [cartState, setCartState] = useState(0);
  const [prodTitles, setProdTitles] = useState([]);

  const listOfProducts = [
    { id: 0, name: "Ball Pen", price: 123 },
    { id: 1, name: "Shirt", price: 32 },
    { id: 2, name: "Pants", price: 23 },
    { id: 3, name: "Glue", price: 45 },
    { id: 4, name: "Paper", price: 56 },
    { id: 5, name: "Notebooks", price: 36 },
  ];

  function incrementCart(item) {
    setCartState(cartState + 1);
    setProdTitles([...prodTitles, item.name]);
  }

  return (
    <div className="shopDash-container">
      <TopNavBar sizeOfCart={cartState} tags={prodTitles.join(" , ")} />
      <div className="grid-view">
        {listOfProducts.map((item, index) => {
          console.log(item);
          console.log(index);
          return (
            <ShoppingItem
              title={item.name}
              price={item.price}
              clickAction={() => incrementCart(item)}
            />
          );
        })}
      </div>
    </div>
  );
}
