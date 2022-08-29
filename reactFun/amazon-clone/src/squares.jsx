import React from "react";

export default function DispSqu(props) {
  const { count } = props;

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
