import React from "react";
import { useLoaderData } from "react-router-dom";
import BtnAddToCart from "../../components/BtnAddToCart";

const ProductOverview = () => {
  const productOverview = useLoaderData();

  const { _id, name, image, price, features, details } = productOverview;
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">{name}</h1>
      <div className="lg:flex justify-center items-center">
        <div>
          <img
            src={image}
            alt={name}
            className="w-full md:w-2/4 rounded-lg mb-4 mx-auto"
          />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Features:</h2>
            <ul className="list-disc list-inside">
              {features.map((feature, index) => (
                <li key={index} className="ml-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Details:</h2>
            <p className="mb-4">{details}</p>
            <p className="text-lg font-semibold mb-4">
              Price: <span className="text-base font-normal">{price}</span>
            </p>
            <BtnAddToCart id={_id} image={image} name={name} price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
