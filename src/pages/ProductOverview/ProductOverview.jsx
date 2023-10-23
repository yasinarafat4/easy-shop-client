import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductOverview = () => {
  const productOverview = useLoaderData();
  console.log(productOverview);
  const { name, image, price, ratings, features, details } = productOverview;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default ProductOverview;
