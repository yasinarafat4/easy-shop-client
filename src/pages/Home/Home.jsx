import React from "react";
import { Helmet } from "react-helmet-async";
import AllProductsByCategory from "./AllProductsByCategory/AllProductsByCategory";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import OurPartners from "./OurPartners/OurPartners";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | Home</title>
      </Helmet>

      {/* Home page components */}
      <Banner />
      <AllProductsByCategory />
      <PopularProducts />
      <OurPartners />
      <Featured />
    </div>
  );
};

export default Home;
