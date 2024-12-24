import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Demo1911 from "./components/Demo1911/Demo1911";

function App() {
  const [index, setIndex] = useState<number>(1);

  const handleLogin = (index: number) => {
    setIndex(index);
  };

  return (
    <>
      {/* {localStorage.getItem("username") ? (
        <Dashboard />
      ) : index === 1 ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <Dashboard />
      )} */}
      <Demo1911 />
    </>
  );
}

export default App;
