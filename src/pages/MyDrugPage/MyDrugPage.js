import React from "react";
import Navbar from "../../components/Home/Navbar";
import Footer from "../../components/Home/Footer";
import Subscribe from "../../components/Home/Subscribe";
import MyDrug from "../../components/myDrug/MyDrug";

const MyDrugPage = () => {
  return (
    <div className="container">
      <Navbar />
      <MyDrug />
      <div className="content">
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
};

export default MyDrugPage;
