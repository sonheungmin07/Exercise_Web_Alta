import React from "react";
import "./style.css";

type HeaderProps = {
  handleChange: (index: number) => void;
};

const Header = (props: HeaderProps) => {
  const handleLogout = (index: number) => {
    localStorage.clear();
    window.location.reload();
  };

  const { handleChange } = props;

  return (
    <div className="header">
      <div>
        <ul>
          <li>
            <a
              onClick={() => {
                handleChange(1);
              }}
            >
              Flowers
            </a>
          </li>
          <li>
            <a onClick={() => handleChange(2)}>Change color</a>
          </li>
          <li>
            <button onClick={() => handleLogout(2)}>Logout</button>
          </li>
        </ul>
      </div>
      <h1>ALTA ENTERPRISE SEMESTER FOR FRONT END</h1>
    </div>
  );
};

export default Header;
