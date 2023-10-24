import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const BtnAddToCart = ({ id, image, name, price }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (product) => {
    console.log("products", product);
    if (user && user.email) {
      const cartItem = {
        productId: id,
        price,
        name,
        image,
        email: user.email,
      };
      fetch("https://easy-shop-server-five.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // Using refetch to realtime update the cart and show notification
            refetch();
            toast.success("Item added");
          }
        });
    } else {
      Swal.fire({
        title: "Please login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        style={{ borderBottom: "3px solid #DD6B20" }}
        className="bg-[#E8E8E8] hover:bg-slate-100 hover:duration-500 text-orange-600 font-semibold py-2 px-4 rounded-md text-[10px] xl:text-[13px]"
      >
        ADD TO CART
      </button>
    </>
  );
};

export default BtnAddToCart;
