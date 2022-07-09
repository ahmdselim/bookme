import React from "react";
import Navbar from "../../components/Home/Navbar";
import Login from "../../components/Login/Login";
import "./style.scss";

const LoginPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
