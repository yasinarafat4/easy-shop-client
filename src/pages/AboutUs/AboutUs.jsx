import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";

const AboutUs = () => {
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | About Us</title>
      </Helmet>
      {/* Title */}
      <PageTitle heading={"About Us"} />
    </div>
  );
};

export default AboutUs;
