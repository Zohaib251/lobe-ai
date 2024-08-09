import React from "react";

const Card = ({ image, title, description, date }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-sm mx-auto cursor-pointer duration-300 transform transition-transform ease hover:scale-105">
      <div className="overflow-hidden rounded-t-3xl">
        <img src={image} alt={title} className="w-full h-auto rounded-t-3xl" />
      </div>
      <div className="flex flex-col p-6 mb-4">
        <div>
          <h2 className="text-base font-bold text-[#333333]">{title}</h2>
        </div>
        <p className="text-[#333333] mt-3 text-base">{description}</p>
        <p className="text-[#989898] text-base mt-6">{date}</p>
      </div>
    </div>
  );
};

export default Card;
