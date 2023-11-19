import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:py-16 py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image*/}
        <div
          className="w-full lg:w-1/2 mb-6 md:mb-0 md:mr-6"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/L8mVQSM/about-us.png"
            alt="About Us"
            className="mx-auto md:mx-0 rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-4">
            About Us
          </h2>
          <p className="mb-4">
            Welcome to Easy Shop — where style meets simplicity. We believe in
            making online shopping a delightful experience. Our curated
            collection of products brings together quality, affordability, and
            the latest trends.{" "}
          </p>
          <p className="mb-4">
            With a passion for customer satisfaction, we strive to make every
            purchase a seamless journey. Explore our virtual aisles and discover
            a world of fashion-forward choices. Join us as we redefine online
            shopping, one click at a time."
          </p>
          <Link to="/about">
            <button className="flex items-center justify-center gap-1 text-indigo-800 border-[2px] md:border-[3px] border-indigo-800 hover:bg-orange-600 hover:text-white hover:border-orange-600 rounded px-3 py-2 lg:py-3 duration-500 text-sm md:text-lg font-semibold">
              More About Us <BsArrowUpRight className="mt-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
