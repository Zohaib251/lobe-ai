import React from "react";

const Footer = () => {
  return (
    <div className="my-20 mx-5 lg:mx-20">
      <div className="text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-[#333333]">
          Train your app
          <br /> with Lobe
        </h2>
        <button className="my-10 font-bold text-xl lg:text-2xl py-2 px-6 rounded-3xl duration-300 transform transition-transform ease hover:scale-105 bg-customMediumGreen text-white">
          Download
        </button>
      </div>
      <hr className="h-1 bg-customMediumGray opacity-15 mt-10" />

      <div className="mt-20 flex flex-wrap justify-center lg:space-x-20 text-center lg:text-left">
        <div className="w-full lg:w-auto mb-10 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-4">
              <div className="flex items-center relative">
                <h1 className="text-2xl text-customNeutralGray font-bold mr-4">
                  lobe
                </h1>
                <div className="relative pb-1">
                  <div
                    className="absolute w-3 h-3 rounded-sm transform origin-bottom-right z-10"
                    style={{ backgroundColor: "#F34747" }}
                  ></div>

                  <div
                    className="absolute w-3 h-3 bg-opacity-90 rounded-sm transform origin-top-left -translate-y-2 -translate-x-2 z-20"
                    style={{ backgroundColor: "#00DDB3" }}
                  ></div>

                  <div
                    className="absolute w-1 h-1 rounded-br-sm rounded-tl-sm z-30 mix-blend-multiply"
                    style={{ backgroundColor: "#333333" }}
                  ></div>
                </div>
              </div>
            </div>
            <ul className="text-customDarkGray space-y-2 lg:space-y-4">
              <li>A product by Microsoft.</li>
              <li>All rights reserved.</li>
              <li>© Microsoft 2021</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-auto mb-10 lg:mb-0">
          <ul className="text-customDarkGray space-y-2 lg:space-y-4">
            <li className="font-bold">About</li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">Download</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="\">Overview</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="\examples">Example</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="\blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto mb-10 lg:mb-0">
          <ul className="text-customDarkGray space-y-2 lg:space-y-4">
            <li className="font-bold">General</li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">Notice</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">License</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a
                href="https://news.microsoft.com/microsoft-public-relations-contacts/"
                target="_blank"
              >
                Press Inquiry
              </a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">Press Image</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto mb-10 lg:mb-0">
          <ul className="text-customDarkGray space-y-2 lg:space-y-4">
            <li className="font-bold">Resources</li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="\help">Help</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="\tour">Tour</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">Contact</a>
            </li>
            <li className="duration-300 transform transition-transform ease hover:scale-105">
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-start space-x-4">
          <a
            href="https://www.reddit.com/r/Lobe/"
            target="_blank"
            className="duration-300 transform transition-transform ease hover:scale-105"
          >
            <span className="icon-bubble bg-customMediumGreen rounded-full p-2 text-white text-lg"></span>
          </a>
          <a
            href="https://x.com/lobe_ai"
            target="_blank"
            className="duration-300 transform transition-transform ease hover:scale-105"
          >
            <span className="icon-twitter bg-customMediumGreen rounded-full p-2 text-white text-lg"></span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw"
            target="_blank"
            className="duration-300 transform transition-transform ease hover:scale-105"
          >
            <span className="icon-youtube-play bg-customMediumGreen rounded-full p-2 text-white text-lg"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
