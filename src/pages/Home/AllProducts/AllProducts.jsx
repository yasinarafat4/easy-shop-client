import React, { useEffect, useState } from "react";
import ProductsCard from "../../../components/ProductsCard";
import SectionTitle from "../../../components/SectionTitle";
// import { Tab, TabList, Tabs } from "react-tabs";

const AllProducts = () => {
  // States
  const [categories, setCategories] = useState([]);
  //   const [tab, setTab] = useState("");

  //  Using the 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    fetch(`/public/products.json`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      {/* title */}
      <SectionTitle
        heading={"Categories"}
        subHeading={"Find Products Across a Spectrum of Categories"}
      />

      {/* Tab container
      <div className="text-center font-medium m-4">
        <Tabs>
          <TabList className="custom-tab-list">
            <Tab className="custom-tab" onClick={() => setTab("Sports Car")}>
              Sports Car
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Regular Car")}>
              Regular Car
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Truck")}>
              Truck
            </Tab>
          </TabList>
        </Tabs>
      </div> */}

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3">
        {/* Implement map */}
        {categories.map((category) => (
          <>
            <ProductsCard key={category._id} category={category} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
