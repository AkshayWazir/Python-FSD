import React, { useState } from "react";
import CountNum from "./counter";
import DispSqu from "./squares";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CountNum count={count} setCount={setCount} />
      <DispSqu count={count} />
    </div>
  );
}

export default App;
