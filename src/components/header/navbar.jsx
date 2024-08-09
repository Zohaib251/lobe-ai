import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 flex items-center justify-between  py-4 px-8 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white bg-opacity-90 backdrop-blur-3xl"
          : "bg-white shadow-transparent"
      }`}
    >
      <Link to="/">
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
      </Link>

      {/* Menu Toggle Button */}
      <div
        className="menu-toggle md:hidden mr-2 bg-[#EEF0F2] rounded-3xl p-3 cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-[#333333] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[#333333] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[#333333]"></span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen
            ? "fixed top-16 left-0 w-full h-auto bg-white bg-opacity-95 backdrop-blur-3xl flex flex-col items-left space-y-4 py-8 px-5 font-bold border-t-2 border-black border-opacity-10"
            : "hidden md:flex flex-grow items-center justify-center font-bold md:space-x-14"
        } transition-all duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className={`${
            currentPath === "/"
              ? "text-customDarkGray"
              : "text-customMediumGray"
          } hover:text-customDarkGray transform transition-transform duration-300 ease hover:scale-110`}
        >
          Overview
        </Link>
        <Link
          to="/examples"
          className={`${
            currentPath === "/examples"
              ? "text-customDarkGray"
              : "text-customMediumGray"
          } hover:text-customDarkGray transform transition-transform duration-300 ease hover:scale-110`}
        >
          Examples
        </Link>
        <Link
          to="/tour"
          className={`${
            currentPath === "/tour"
              ? "text-customDarkGray"
              : "text-customMediumGray"
          } hover:text-customDarkGray transform transition-transform duration-300 ease hover:scale-110`}
        >
          Tour
        </Link>
        <Link
          to="/blog"
          className={`${
            currentPath === "/blog"
              ? "text-customDarkGray"
              : "text-customMediumGray"
          } hover:text-customDarkGray transform transition-transform duration-300 ease hover:scale-110`}
        >
          Blog
        </Link>
        <Link
          to="/help"
          className={`${
            currentPath === "/help"
              ? "text-customDarkGray"
              : "text-customMediumGray"
          } hover:text-customDarkGray transform transition-transform duration-300 ease hover:scale-110`}
        >
          Help
        </Link>

        {/* Download Button on Small Screen */}
        {isMenuOpen && (
          <button className="font-bold py-2 px-4 rounded-3xl duration-300 transform transition-transform ease hover:scale-105 bg-customMediumGreen text-white ">
            Download
          </button>
        )}
      </nav>

      {/* Download Button on Large Screen */}
      <button
        className={`hidden md:block font-bold py-2 px-4 rounded-3xl duration-300 transform transition-transform ease hover:scale-105  ${
          scrolled
            ? "bg-customMediumGreen text-white"
            : "bg-[#EEF0F2] text-[#3D3D3D]"
        }`}
      >
        Download
      </button>
    </div>
  );
};

export default Navbar;
