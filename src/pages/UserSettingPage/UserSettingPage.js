import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import UserSetting from "../../components/UserSetting/UserSetting";
import "./style.scss";

const UserSettingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <UserSetting />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default UserSettingPage;
