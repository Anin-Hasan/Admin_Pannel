import React from "react";
import Navbar from "./Navbar";
import ProSidebar from "./ProSidebar";
import Charts from "./Charts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <ProSidebar />
        <Charts />
      </div>
    </div>
  );
};

export default Home;
