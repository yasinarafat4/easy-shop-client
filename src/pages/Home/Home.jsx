import React from "react";
import AllProductsByCategory from "./AllProductsByCategory/AllProductsByCategory";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllProductsByCategory />
      <Featured />
    </div>
  );
};

export default Home;
