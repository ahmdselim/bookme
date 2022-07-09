import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Nav /> */}
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
