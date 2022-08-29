import React from "react";
import { useSelector } from "react-redux";

export default function DispSqu(props) {
  const count = useSelector((store) => store.counter).value;

  function spreadingSquares(value) {
    let tempArr = [];
    for (let i = 0; i < value; i++) {
      tempArr.push(i);
    }
    return tempArr;
  }

  return (
    <div className="display-grid">
      {spreadingSquares(count).map((item) => (
        <span className="square"></span>
      ))}
    </div>
  );
}
