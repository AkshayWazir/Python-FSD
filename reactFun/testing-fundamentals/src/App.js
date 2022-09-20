import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState({});
  useEffect(() => {
    console.log(file);
  }, [file]);

  function upload_files(params) {
    // TODO upload the file
    const data = new FormData();
    data.append("file", file);
    axios.post("http://127.0.0.1:5000/fileUpload", data);
  }

  return (
    <div className="App">
      <input type="file" onChange={(val) => setFile(val.target.files[0])} />
      <button onClick={upload_files}>Upload</button>
    </div>
  );
}

export default App;
