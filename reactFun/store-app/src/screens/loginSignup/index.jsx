import React, { useState } from "react";
import "./styles.css";
import { sigupUserApiCall } from "./apis";

export default function LoginSignupPage(props) {
  const [data, setData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");

  async function loginUser() {}

  async function signupUser() {
    let res = await sigupUserApiCall(data);
    if (res.state) {
      setStatus("Accound Created");
      setData({ username: "", password: "" });
    } else {
      setStatus("Failed to create Account, ", res.data);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <input
          className="login-inputbox-1"
          placeholder="Enter Username"
          type="text"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          className="login-inputbox-2"
          placeholder="Enter Password"
          type="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <span className="login-button" onClick={signupUser}>
          Register
        </span>
        <span className="login-button" onClick={loginUser}>
          Login
        </span>
      </div>
      {status.length > 0 && <span>{status}</span>}
    </div>
  );
}
