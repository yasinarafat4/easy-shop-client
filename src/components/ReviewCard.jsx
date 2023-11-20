import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const ReviewCard = ({ review }) => {
  const { imageSrc, name, opinion, rating } = review;

  return (
    <div className="my-10 border shadow-sm rounded-md">
      <div className="px-3 py-16 flex w-full items-center flex-col bg-white dark:bg-slate-700 rounded-lg">
        <div className="w-40 h-36">
        <img
          className="bg-slate-50  rounded-full dark:bg-slate-800 border-slate-200 dark:border-slate-800"
          src={imageSrc}
          alt="client-image"
        />
        </div>

        <h2 className="py-3 text-2xl font-bold">{name}</h2>
        <div className="mb-2">
          <Rating style={{ maxWidth: 160 }} value={rating} readOnly />
        </div>
        <div className="text-5xl">
          <ImQuotesLeft />
        </div>
        <div>
          <p className="text-center">{opinion}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
