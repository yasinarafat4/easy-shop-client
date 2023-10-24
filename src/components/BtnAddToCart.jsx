import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const BtnAddToCart = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      toast.success("Item added")
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
