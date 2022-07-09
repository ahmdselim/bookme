import React from "react";
import Nav from "../../components/Home/Nav";
import Navbar from "../../components/Home/Navbar";
import Search from "../../components/Search/Search";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import "./style.scss";

const SearchPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Search />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
