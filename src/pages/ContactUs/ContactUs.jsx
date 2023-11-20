import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xa27017",
        "template_xmlqfzu",
        form.current,
        "EZqoPl1QBq6NL4AbD"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message Has Been Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-indigo-700 px-2 py-3 lg:px-8 dark:bg-slate-900 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | Contact Us</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {/*  Text Container*/}
        <div className="lg:col-span-2 xl:col-span-3 mx-3 md:mx-20 lg:mx-5 space-y-3">
          <p className="text-xl md:text-2xl xl:text-3xl text-white font-semibold">
            Contact Us
          </p>
          <p className="font-bold text-3xl md:text-5xl xl:text-7xl text-white">
            Let’s collaborate <br /> to bring your <br /> vision to life!
          </p>
          <p className="text-[13px] md:text-xl lg:text-base xl:text-2xl text-white">
            Share your idea! Our team will reach out to discuss it and <br />{" "}
            provide you with an estimate.
          </p>
        </div>
        {/* Form Container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:col-span-2 xl:col-span-2 dark:bg-slate-800 dark:text-white bg-indigo-600 flex flex-col justify-center items-center gap-2 md:gap-3 rounded-lg mx-3 md:mx-20 lg:mx-5 py-4 md:py-8 mt-6 mb-3"
        >
          <input
            placeholder="Full Name"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-blue-700 outline-none w-11/12 md:w-10/12"
            type="text"
            name="user_name"
          />
          <input
            placeholder="Email Address"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-blue-700 w-11/12 md:w-10/12 outline-none"
            type="email"
            name="user_email"
          />
          <input
            placeholder="Phone Number"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-blue-700 w-11/12 md:w-10/12 outline-none"
            type="number"
            name="number"
          />
          <input
            placeholder="Subject"
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-blue-700 w-11/12 md:w-10/12 outline-none"
            type="text"
            name="subject"
          />
          <textarea
            className="px-4 py-2 md:py-3 rounded-3xl border-2 border-blue-700 w-11/12 md:w-10/12 outline-none"
            name="message"
            cols="20"
            rows="4"
            placeholder="How can we help?"
          ></textarea>
          <div className="">
            <input
              className="bg-orange-600 text-base md:text-lg py-[10px] cursor-pointer text-white mt-1 rounded-full px-4 md:px-6 w-full"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
