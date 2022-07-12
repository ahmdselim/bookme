import React from "react";
import Categories from "./Explorer/Categories";
import Country from "./Explorer/Country";
import Head from "./Explorer/Head";
import Subscribe from "./Subscribe";

const Content = () => {
  return (
    <div className="content">
      <Head />
      <Country />
      <Categories />
      <Subscribe />
    </div>
  );
};

export default Content;
