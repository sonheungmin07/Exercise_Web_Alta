// import styles from "./style.css";
import React from "react";
import "./style.css";

const Demo1 = () => {
  return (
    <>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <div className="header">
          <h1>Welcome to Alta Software</h1>
          <p>Lê Việt Hùng</p>
        </div>

        <div
          className="container"
          style={{
            position: "absolute",
            top: "120px",
            bottom: "60px",
            left: "0",
            width: "100%",
            // marginBottom: "20px",
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

        <div className="footer">
          <p>@Copyright to AltaSoftware</p>
        </div>
      </div>
    </>
  );
};

export default Demo1;
