import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeText } from "./redux/todoSlice";

export default function CountNum(props) {
  const count = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <span className="add-cont">
      <input onChange={(e) => dispatch(changeText(e.target.value))} />
    </span>
  );
}
