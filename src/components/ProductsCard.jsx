import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import BtnAddToCart from "./BtnAddToCart";

const ProductsCard = ({ category }) => {
  const { _id, image, name, price, ratings } = category;


  return (
    <div className="m-4 border p-4 grid grid-cols-2 justify-center items-center gap-4 dark:text-white rounded-md">
      <Link to={`/productOverview/${_id}`}>
        <div className="group relative overflow-hidden rounded-xl cursor-pointer m-4 w-11/12 lg:w-10/12 mx-auto">
          <div className="group-hover:bg-black/40 w-11/12 h-full absolute z-40 transition-all duration-300"></div>
          <img
            className="w-full xl:w-4/5 h-full rounded-md group-hover:scale-125 transition-all duration-500"
            src={image ? image : "No image found"}
            alt=""
          />
          <div className="absolute -bottom-full left-8 group-hover:bottom-16  transition-all duration-500 z-50">
            <span className="text-white text-lg">View Details</span>
          </div>
        </div>
      </Link>
      <div className="space-y-1 xl:space-y-2">
        <p className="text-sm md:text-base lg:text-sm xl:text-lg dark:text-slate-300 text-slate-600">
          <span className="font-semibold  dark:text-white text-slate-500">
            Name:
          </span>{" "}
          {name}
        </p>
        <p className="text-sm md:text-base lg:text-sm xl:text-lg dark:text-slate-300 text-slate-500">
          <span className="font-semibold  dark:text-white text-slate-600">
            Price:
          </span>{" "}
          {price}
        </p>
        <div className="flex-grow-1">
          <Rating
            placeholderRating={ratings}
            emptySymbol={
              <FaRegStar className="text-sm md:text-base text-yellow-400"></FaRegStar>
            }
            readonly
            placeholderSymbol={
              <FaStar className="text-sm md:text-base text-yellow-400"></FaStar>
            }
            fullSymbol={<FaStar></FaStar>}
          />
        </div>
        {/* Add to cart button */}
        <BtnAddToCart />
      </div>
    </div>
  );
};

export default ProductsCard;
