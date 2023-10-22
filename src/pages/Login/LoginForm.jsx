import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";

const LoginForm = () => {
  // States
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);

  // Hook form functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      {/* Email field */}
      <div className="form-control">
        <label htmlFor="email" className="label label-text">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          className="w-full p-2 border-b border-gray-300 dark:text-slate-800 rounded outline-none"
          id="email"
          name="email"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Password field */}
      <div className="form-control mb-4 relative">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type={togglePasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className="w-full p-2 border-b border-gray-300 dark:text-slate-800 rounded outline-none"
          {...register("password", {
            required: true,
          })}
        />

        <div
          onClick={() => setTogglePasswordVisible(!togglePasswordVisible)}
          className="absolute cursor-pointer right-1 bottom-2"
        >
          {togglePasswordVisible ? (
            <AiFillEye className="text-xl text-gray-600" />
          ) : (
            <AiFillEyeInvisible className="text-xl text-gray-600" />
          )}
        </div>

        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter correct password!
          </span>
        )}
      </div>
      {/* Login button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-600 w-full text-white hover:bg-indigo-700 py-2 px-4 rounded-3xl"
          type="submit"
        >
          Login
        </button>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
        Don&apos;t have an account?
        <Link to="/register" className="text-blue-500 underline ml-1">
          Register
        </Link>
      </p>
      <span className="text-center">OR</span>
      <GoogleLogin />
    </form>
  );
};

export default LoginForm;