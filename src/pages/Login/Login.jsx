import React from "react";
import { Helmet } from "react-helmet-async";
import AuthenticationSvg from "../../components/AuthenticationSvg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full py-4 lg:py-10 dark:bg-slate-900 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | Login</title>
      </Helmet>

      <h1 className="text-3xl lg:text-5xl font-bold text-center">Login now!</h1>
      <p className="py-2 text-center">Login now to connect with us.</p>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="text-center lg:text-left">
          <AuthenticationSvg />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
