import React, { useEffect } from "react";
import MakeRequest from "./utils/apiHandler";

function App() {
  async function apiCall() {
    const result = await MakeRequest("http://127.0.0.1:5000/store/1").put({ name: "Sharma Store" });

    console.log(result);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return <div className="App"></div>;
}

export default App;
