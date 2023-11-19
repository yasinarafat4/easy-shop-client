import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();

  // using array reduce to sum
  const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  // Delete handling functionality
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://easy-shop-server-five.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Product has been deleted.", "success");
            }
          });
      }
    });
  };

  // Payment handler
  const handlePayment = () => {
    Swal.fire(
      "Payment Integration",
      "I regret to inform you that due to time limitations, I am unable to implement this feature at the moment. I appreciate your understanding and patience. Rest assured, if I have the opportunity, I will work on implementing it in the future.",
      "question"
    );
  };

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900">
      {/* Dynamic page title */}
      <Helmet>
        <title>Easy Shop | My Cart</title>
      </Helmet>

      {/* Title */}
      <PageTitle heading={"My Added Products"} />

      {/* Calculating total price container */}
      <div className="font-bold uppercase flex justify-evenly items-center mb-2">
        <div className="space-y-3 md:space-y-0 md:flex gap-10">
          <h2 className="text-xs md:text-xl">
            Total Orders: {cart?.length || 0}
          </h2>
          <h2 className="text-xs md:text-xl">Total Price: {total || 0}</h2>
        </div>

        <button
          onClick={handlePayment}
          className="px-3 md:px-4 py-1 md:py-2 bg-indigo-600 text-white border-none rounded-sm md:rounded-md"
        >
          Pay
        </button>
      </div>

      {/* Selected products table */}
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
                className="py-10 px-4 text-red-500 text-sm md:text-lg dark:bg-slate-900 dark:text-red-500 text-center"
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
                    : "bg-white dark:bg-slate-900 dark:text-white text-[10px] md:text-base text-center"
                }
              >
                <td className="py-3 px-4 text-[10px] md:text-base text-center dark:bg-slate-900 dark:text-white">
                  {index + 1}
                </td>
                <td className="py-3 px-4 dark:bg-slate-900 dark:text-white">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded mx-auto"
                  />
                </td>
                <td className="py-3 px-4 dark:bg-slate-900 dark:text-white">
                  {item.name}
                </td>
                <td className="py-3 px-4 dark:bg-slate-900 dark:text-white">
                  {item.price}
                </td>
                <td className="py-3 px-4 dark:bg-slate-900 dark:text-white">
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700 ml-2"
                  >
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
