import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Demo2 from "../Demo2/Demo2";
import Test3b from "../Test3b";

const Dashboard = () => {
  const [seleted, setSelected] = useState<number>(1);

  const handleChange = (index: number) => {
    setSelected(index);
  };
  return (
    <div>
      <Header handleChange={handleChange} />
      {seleted === 1 ? <Demo2 /> : <Test3b />}
      <Footer />
    </div>
  );
};

export default Dashboard;
