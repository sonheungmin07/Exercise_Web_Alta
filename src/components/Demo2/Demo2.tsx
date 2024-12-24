import React from "react";
import "./Demo2.css";

const Demo2 = () => {
  return (
    <>
      <div
        className="container"
        style={{
          left: "0",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <div className="subcontainer">
          <div className="item">
            <img className="img" src="../images/flower1.jpg" alt="" />
          </div>
          <div className="item">
            <img className="img" src="../images/flower2.jpg" />
          </div>
          <div className="item">
            <img className="img" src=".//images/flower3.jpg" />
          </div>
        </div>

        <div className="subcontainer">
          <div className="item">
            <img className="img" src=".//images/flower3.jpg" />
          </div>
          <div className="item">
            <img className="img" src="../images/flower2.jpg" />
          </div>
          <div className="item">
            <img className="img" src="../images/flower1.jpg" alt="" />
          </div>
        </div>

        <div className="subcontainer">
          <div className="item">
            <img className="img" src="../images/flower2.jpg" />
          </div>
          <div className="item">
            <img className="img" src=".//images/flower1.jpg" />
          </div>
          <div className="item">
            <img className="img" src="../images/flower3.jpg" alt="" />
          </div>
        </div>

        <div className="subcontainer">
          <div className="item">
            <img className="img" src="../images/flower2.jpg" />
          </div>
          <div className="item">
            <img className="img" src=".//images/flower1.jpg" />
          </div>
          <div className="item">
            <img className="img" src="../images/flower3.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo2;
