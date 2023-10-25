import React from "react";
import { Helmet } from "react-helmet-async";
import AuthenticationSvg from "../../components/AuthenticationSvg";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="w-full py-4 lg:py-10 dark:bg-slate-800 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | Register</title>
      </Helmet>
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Register now!
      </h1>
      <p className="py-2 text-center">Register now to connect with us.</p>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-center lg:text-left">
          <AuthenticationSvg />
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
