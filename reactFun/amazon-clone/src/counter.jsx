import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, subCount } from "./redux/todoSlice";

export default function CountNum(props) {
  const count = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <span className="add-cont">
      <span className="btn" onClick={() => dispatch(subCount())}>
        -
      </span>
      <span className="btn">{count.value}</span>
      <span className="btn" onClick={() => dispatch(addCount(3))}>
        +
      </span>
    </span>
  );
}
