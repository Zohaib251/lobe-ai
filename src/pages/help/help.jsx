import React, { useState } from "react";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import Menu from "./menu";
import Faq from "./Faq";
const help = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center px-6 pt-10 lg:px-0">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-6xl font-bold text-[#333333]">
            Lobe
            <span className="text-[#04DDB2]"> Help</span>
          </h2>
          <p className="text-[#333333] pt-5 text-2xl font-normal">
            Everything you need to know to train great
            <br />
            machine learning models with Lobe.
          </p>
        </div>
      </div>
      <div className=" flex justify-center space-x-0 lg:space-x-10 my-20">
        <div className="hidden lg:block">
          <Menu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
        <div>
          <Faq activeIndex={activeIndex} />

          {/* Ask a question in the Lobe community*/}
          <div className="w-72 mt-10 lg:w-[600px] border-b-2 pb-10 cursor-pointer transition-colors duration-300">
            <a href="https://www.reddit.com/r/Lobe/ " target="_blank">
              <div className="flex text-[#333333] justify-between items-center">
                <h3 className="text-base md:text-lg font-bold transition-colors duration-300 ">
                  <span className="icon-bubble text-[#F64A00] text-xl mr-2"></span>
                  Ask a question in the Lobe community.
                </h3>
                <span className={`icon-cheveron-right text-lg `}></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default help;
