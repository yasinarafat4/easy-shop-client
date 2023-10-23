import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductsCard = ({ category }) => {
  const { image, name, price, ratings } = category;
  return (
    <div className="cursor-pointer m-4 shadow-lg p-4 grid grid-cols-2 justify-center items-center gap-4 dark:text-white">
      <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer m-4 w-11/12 lg:w-10/12 mx-auto">
        <div className="group-hover:bg-black/40 w-11/12 h-full absolute z-40 transition-all duration-300"></div>
        <img
          className="w-4/5 h-full rounded-md group-hover:scale-125 transition-all duration-500"
          src={image ? image : "No image found"}
          alt=""
        />
      </div>

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
        <button
          //   onClick={handleAddToCart}
          style={{ borderBottom: "3px solid #DD6B20" }}
          className="bg-[#E8E8E8] hover:bg-slate-100 hover:duration-500 text-orange-600 font-semibold py-2 px-4 rounded-md text-[10px] xl:text-[13px]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
