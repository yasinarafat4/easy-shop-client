import React, { useEffect, useState } from "react";
import PopularProductsCard from "../../../components/PopularProductsCard";
import SectionTitle from "../../../components/SectionTitle";

const PopularProducts = () => {
  // States
  const [popularProducts, setPopularProducts] = useState([]);

  //   Handling sideeffect for all popular data
  useEffect(() => {
    fetch("https://easy-shop-server-five.vercel.app/popular")
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data);
      });
  }, []);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      {/* title */}
      <SectionTitle
        heading={"Popular Products"}
        subHeading={"Discover our customer favorites"}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-2">
        {popularProducts.map((popular) => (
          <PopularProductsCard key={popular._id} popular={popular} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
