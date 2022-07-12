import React from "react";
import Setting from "../../components/Setting/Setting";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import "./style.scss";

const SettingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Setting />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default SettingPage;
