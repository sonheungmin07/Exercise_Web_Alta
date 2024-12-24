import React, { useState } from "react";
import "./style.css";

const Test3b = () => {
  const [color, setColor] = useState<boolean>(true);

  return (
    <>
      <div className="container3b">
        <div
          className="item"
          style={{ backgroundColor: color ? "#0000ff" : "#ff0000" }}
        ></div>
        <div style={{ padding: 20 }}>
          <button className="btn" onClick={() => setColor(!color)}>
            Change color
          </button>
        </div>
        <div
          className="item"
          style={{ backgroundColor: color ? "#ff0000" : "#0000ff" }}
        ></div>
      </div>
    </>
  );
};

export default Test3b;
