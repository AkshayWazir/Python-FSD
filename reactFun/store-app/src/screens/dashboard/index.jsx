import React from "react";
import "./styles.css";
import APICalls from "./apis";

export default function Dashboard(props) {
  return (
    <div>
      <span onClick={() => APICalls.getAllStores()}>Call API</span>
    </div>
  );
}
