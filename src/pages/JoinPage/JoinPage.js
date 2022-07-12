import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import Join from "../../components/Join/Join";
import "./style.scss";

const JoinPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Join />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default JoinPage;
