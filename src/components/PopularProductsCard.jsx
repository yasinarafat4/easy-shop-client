import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularProductsCard = ({ popular }) => {
  const { name, image, price, ratings, features } = popular;
  return (
    <div className="w-full border p-4 rounded-md shadow-md dark:text-white">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full rounded-md" />
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Features:</p>
        <ul className="list-disc list-inside pl-4">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between">
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
        <div>
          <p className="text-lg font-semibold">Price: {price}</p>
        </div>
      </div>
    </div>
    
  );
};

export default PopularProductsCard;
