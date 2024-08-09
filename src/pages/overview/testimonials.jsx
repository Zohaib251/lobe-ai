import React from "react";
import image1 from "../../image/home/testimonials/image1.jpg";
import image2 from "../../image/home/testimonials/image2.jpg";
import image3 from "../../image/home/testimonials/image3.jpg";
const testimonials = () => {
  return (
    <div className="bg-[#F2F3F5] flex overflow-x-auto no-scrollbar px-4 space-x-8 justify-start  lg:justify-center items-center py-3 ">
      <a href="">
        <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 w-64 text-gray-800 duration-300 transform transition-transform ease hover:scale-105 flex-shrink-0">
          <div className="flex items-center mb-4">
            <img
              src={image1}
              alt="Chris Cachor"
              className="w-12 h-12 rounded-full mr-4"
            />
          </div>
          <p className="text-md text-[#333333]">
            As soon as I used Lobe I was completely blown away. I don't have to
            spend days trying to learn machine learning. Simply label some
            images and boom, it really just works.
          </p>
          <div className="mt-12">
            <h3 className="text-md text-[#333333] font-bold">Chris Cachor</h3>
            <p className="text-md font-semibold text-[#767676]">
              Software Engineer
            </p>
          </div>
        </div>
      </a>
      <a href="">
        <div className="bg-[#FFFFFF] lg:mt-28 rounded-2xl shadow-lg p-6 w-64 text-gray-800 duration-300 transform transition-transform ease hover:scale-105 flex-shrink-0">
          <div className="flex items-center mb-4">
            <img
              src={image2}
              alt="Kate Longley-Wood"
              className="w-12 h-12 rounded-full  mr-4"
            />
          </div>
          <p className="text-md text-[#333333]">
            We’ve been using Lobe to quickly process previously untapped sources
            of data so that we can improve our models of nature-dependent
            tourism to promote better decision-making in our oceans.
          </p>
          <div className="mt-7">
            <h3 className="text-md text-[#333333] font-bold">
              Kate Longley-Wood
            </h3>
            <p className="text-md font-semibold text-[#767676]">Ocean Mapper</p>
          </div>
        </div>
      </a>
      <a href="">
        <div className="bg-[#FFFFFF] lg:mt-48 rounded-2xl shadow-lg p-6 w-64 text-gray-800 duration-300 transform transition-transform ease hover:scale-105 flex-shrink-0">
          <div className="flex items-center mb-4">
            <img
              src={image3}
              alt="Sean Cusack"
              className="w-12 h-12 rounded-full mr-4"
            />
          </div>
          <p className="text-md text-[#333333]">
            Lobe is so easy and takes so much of the complicated stuff out of
            machine learning. Even my kid was begging me to sit in front of the
            computer and categorize my bees for me.
          </p>
          <div className="mt-12">
            <h3 className="text-md text-[#333333] font-bold">Sean Cusack</h3>
            <p className="text-md font-semibold text-[#767676]">Beekeeper</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default testimonials;
