import React from "react";
import "./styles.css";

export default function Header({ title }) {
  return <h1 className="appication_headers">{title}</h1>;
}

export function NewHeader({ label }) {
  return (
    <>
      <button className="btn">{label}</button>
      <button title="unique-comp" className="btn">
        Cats
      </button>
    </>
  );
}
