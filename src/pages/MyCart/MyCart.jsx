import React from "react";
import PageTitle from "../../components/PageTitle";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-800">
      <PageTitle heading={"My Added Products"} />
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr className="bg-slate-400 dark:bg-slate-700 text-white text-[10px] md:text-base">
            <th className="py-3 px-4">Action</th>
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Item Image</th>
            <th className="py-3 px-4">Item Name</th>
            <th className="py-3 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="py-10 px-4 text-red-500 text-sm md:text-lg dark:bg-slate-800 dark:text-red-500 text-center"
              >
                You have not selected any products yet!
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr
                key={item._id}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 text-[10px] md:text-base text-center"
                    : "bg-white dark:bg-slate-800 dark:text-white text-[10px] md:text-base text-center"
                }
              >
                <td className="py-3 px-4 text-[10px] md:text-base text-center dark:bg-slate-800 dark:text-white">
                  {index + 1}
                </td>
                <td className="py-3 px-4 dark:bg-slate-800 dark:text-white">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded mx-auto"
                  />
                </td>
                <td className="py-3 px-4 dark:bg-slate-800 dark:text-white">
                  {item.name}
                </td>
                <td className="py-3 px-4 dark:bg-slate-800 dark:text-white">
                  {item.price}
                </td>
                <td className="py-3 px-4 dark:bg-slate-800 dark:text-white">
                  <button className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
