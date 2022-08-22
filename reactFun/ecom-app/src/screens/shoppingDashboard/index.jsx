import React from "react";
import { TopNavBar } from "../../components/shared";
import "./styles.css";

export default function ShoppingDashboard(props) {
  return (
    <div className="shopDash-container">
      <TopNavBar sizeOfCart={0} />
    </div>
  );
}
