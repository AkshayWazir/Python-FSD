import React from "react";

export default function CountNum(props) {
  const { count, setCount } = props;
  return (
    <span className="add-cont">
      <span className="btn" onClick={() => setCount(count - 1)}>
        -
      </span>
      <span className="btn">{count}</span>
      <span className="btn" onClick={() => setCount(count + 1)}>
        +
      </span>
    </span>
  );
}
