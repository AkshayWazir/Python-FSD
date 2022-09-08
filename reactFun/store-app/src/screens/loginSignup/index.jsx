import React, { useState } from "react";
import "./styles.css";

export default function LoginSignupPage(props) {
  const [data, setData] = useState({ username: "", password: "" });

  async function loginUser() {}

  async function signupUser() {}

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
    </div>
  );
}
