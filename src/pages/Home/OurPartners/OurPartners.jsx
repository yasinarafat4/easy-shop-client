import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle";

const OurPartners = () => {
  const [isPaused, setIsPaused] = useState(false);

  //   Marquee handlers
  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900">
      {/* title */}
      <SectionTitle
        heading={"Our Partners"}
        subHeading={"Our Trusted Collaborators"}
      />
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={40}
        gradient={false}
        pauseOnHover={!isPaused}
        className="mt-10 mb-20 cursor-pointer"
      >
        <img
          className="mr-12 w-[200px] object-contain h-[200px]"
          src="https://i.ibb.co/C92jgw9/logo-1.png"
          alt=""
        />
        <img
          className="mr-12 w-[300px] object-contain h-[200px]"
          src="https://i.ibb.co/VxKmyJT/logo-2.png"
          alt=""
        />
        <img
          className="mr-12 w-[300px] object-contain h-[150px]"
          src="https://i.ibb.co/rmPFzD0/logo-3.png"
          alt=""
        />
        <img
          className="mr-12 w-[300px] object-contain h-[150px]"
          src="https://i.ibb.co/JBZg96D/logo-4.png"
          alt=""
        />
        <img
          className="mr-12 mt-2 w-[300px] object-contain h-[150px]"
          src="https://i.ibb.co/ByyMd4h/logo-5.png"
          alt=""
        />
        <img
          className="mr-12 w-[300px] object-contain h-[150px]"
          src="https://i.ibb.co/qW29k9Z/logo-6.png"
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default OurPartners;
