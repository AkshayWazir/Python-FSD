import React from "react";
import CountNum from "./counter";
import DispSqu from "./squares";



// * make two components in which one component takes the input 
// * and the other component show's the response 
function App() {
  return (
    <div className="App">
      <CountNum />
      <DispSqu />
    </div>
  );
}

export default App;
