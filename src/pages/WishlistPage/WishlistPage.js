import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import Wishlist from "../../components/Wishlist/Wishlist";
import "./style.scss";

const WishlistPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Wishlist />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
