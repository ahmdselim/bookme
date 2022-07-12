import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Header />
      <Content />
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
