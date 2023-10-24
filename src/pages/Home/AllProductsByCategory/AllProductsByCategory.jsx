import React, { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import ProductsCard from "../../../components/ProductsCard";
import SectionTitle from "../../../components/SectionTitle";
import "./AllProductsByCategory.css";

const AllProductsByCategory = () => {
  // States
  const [categories, setCategories] = useState([]);
  const [tab, setTab] = useState("Mobiles");

  //  Using the 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    fetch(`https://easy-shop-server-five.vercel.app/products/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [tab]);
  console.log(categories);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      {/* title */}
      <SectionTitle
        heading={"Categories"}
        subHeading={"Find Products Across a Spectrum of Categories"}
      />

      {/* Tab container */}
      <div className="text-center font-medium m-4">
        <Tabs>
          <TabList className="md:flex justify-start items-center list-none m-0 px-20 md:px-0 gap-4  dark:text-gray-300">
            <Tab className="custom-tab" onClick={() => setTab("Mobiles")}>
              Mobiles
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Clothes")}>
              Clothes
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Furniture")}>
              Furniture
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Books")}>
              Books
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Electronics")}>
              Electronics
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3">
        {/* Implement map */}
        {categories?.map((category) => (
          <>
            <ProductsCard key={category?._id} category={category} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProductsByCategory;
