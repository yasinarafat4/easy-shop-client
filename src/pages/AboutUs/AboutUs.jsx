import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";

const AboutUs = () => {
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | About Us</title>
      </Helmet>
      {/* Title */}
      <PageTitle heading={"About Us"} />

      <div className="pb-8">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 md:mb-0 md:mr-6">
            <img
              src="https://i.ibb.co/L8mVQSM/about-us.png"
              alt="About Us"
              className="w-full lg:w-10/12 mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="mb-4 lg:text-lg">
              We are committed to providing you with the best online shopping
              experience. Our mission is to offer high-quality products and
              excellent customer service.
            </p>
            <p className="mb-4 lg:text-lg">
              We believe in fast and reliable shipping to get your orders to you
              as quickly as possible. If you have any questions or need
              assistance, our 24/7 customer support team is here to help.
            </p>
            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Offering Premium Quality Products</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Ensuring Fast and Reliable Shipping</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Providing Secure Payment Options</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Curating a Diverse Product Selection</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Prioritizing Customer Satisfaction</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Offering Hassle-Free Returns</p>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-green-500 mr-2 text-lg">&#10003;</span>
              <p>Providing Competitive Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
