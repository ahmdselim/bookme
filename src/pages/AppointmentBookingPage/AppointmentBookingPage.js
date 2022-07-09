import React from "react";
import AppointmentBooking from "../../components/AppointmentBooking/AppointmentBooking";
import Navbar from "../../components/Home/Navbar";
import "./style.scss";

const AppointmentBookingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <AppointmentBooking />
    </div>
  );
};

export default AppointmentBookingPage;
