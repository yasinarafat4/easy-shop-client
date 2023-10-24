import React from "react";
import AllProductsByCategory from "./AllProductsByCategory/AllProductsByCategory";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import OurPartners from "./OurPartners/OurPartners";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllProductsByCategory />
      <PopularProducts />
      <OurPartners />
      <Featured />
    </div>
  );
};

export default Home;
