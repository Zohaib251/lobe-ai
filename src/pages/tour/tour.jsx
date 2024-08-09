import React, { useState } from "react";
import Navbar from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import image from "../../image/tour/Video.jpg";

const Tour = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center px-6 pt-10 lg:px-0">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-5xl font-bold text-[#333333]">
            Lobe
            <span className="text-[#04DDB2]"> Tour</span>
          </h2>
          <p className="text-[#333333] pt-5 text-xl font-normal">
            Build your first machine learning model in ten
            <br />
            minutes. No code or experience required.
          </p>
        </div>
        <img
          src={image}
          alt="Tour Image"
          className="rounded-3xl mt-16 w-2/3 hover:shadow-2xl duration-300 transform transition-transform ease hover:scale-105 cursor-pointer"
          onClick={handleOpenModal}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#5C5C5C] bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative bg-black  rounded-lg max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-[#5C5C5C] text-4xl font-semibold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Tour;
