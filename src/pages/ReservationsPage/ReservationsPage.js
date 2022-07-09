import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import Reservations from "../../components/Reservations/Reservations";

const ReservationsPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Reservations />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationsPage;
