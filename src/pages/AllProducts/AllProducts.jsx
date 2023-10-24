import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import ProductsCard from "../../components/ProductsCard";


const AllProducts = () => {
  // States
  const [products, setProducts] = useState([]);

  //  Using the 'useEffect' hook to perform side effects
  useEffect(() => {
    fetch("https://easy-shop-server-five.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      {/* Title */}
      <PageTitle heading={"All Products"} />
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3">
        {/* Implement map */}
        {products.map((product) => (
          <>
            <ProductsCard key={product._id} category={product} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
