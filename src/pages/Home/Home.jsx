import React from "react";
import { Helmet } from "react-helmet-async";
import About from "./About/About";
import AllProductsByCategory from "./AllProductsByCategory/AllProductsByCategory";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import OurPartners from "./OurPartners/OurPartners";
import PopularProducts from "./PopularProducts/PopularProducts";
import ShortInfo from "./ShortInfo/ShortInfo";

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
      <ShortInfo />
      <About />
      <Contact />
      <Featured />
      <OurPartners />
    </div>
  );
};

export default Home;
