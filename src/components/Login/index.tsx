import React, { useState } from "react";
import "./style.css";

type loginProps = {
  handleLogin: (index: number) => void;
};

const Login = (props: loginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("username", "admin");
      props.handleLogin(2);
    } else {
      alert("Error");
    }
  };

  return (
    <div className="login">
      <form action="" className="form">
        <div className="form-group">
          <label htmlFor="">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn-login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
