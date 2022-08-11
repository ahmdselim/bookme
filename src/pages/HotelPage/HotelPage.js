import React from "react";
import Navbar from "../../components/Home/Navbar";
import Hotel from "../../components/Hotel/Hotel";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import "./style.scss";

const HotelPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Hotel />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;
