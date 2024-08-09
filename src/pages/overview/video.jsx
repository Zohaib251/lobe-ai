import React, { useState, useEffect, useRef } from "react";
import Home from "../../video/overview/Home.mp4";
import HomeMobile from "../../video/overview/HomeMobile.mp4";

const Video = () => {
  const words = [
    "identify plants",
    "see gestures",
    "count reps",
    "feel emotions",
    "sense colors",
    "check safety",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [videoSrc, setVideoSrc] = useState(isLargeScreen ? Home : HomeMobile);
  const [paragraphText, setParagraphText] = useState(
    isLargeScreen
      ? "Lobe helps you train machine learning models with a free, easy to use tool."
      : "Create machine learning models with a free, easy to use tool."
  );
  const [showArrow, setShowArrow] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const wordDuration = 5; // seconds
      const index = Math.floor(currentTime / wordDuration) % words.length;
      setCurrentWordIndex(index);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [words.length]);

  useEffect(() => {
    const handleResize = () => {
      const isScreenLarge = window.innerWidth > 768;
      setIsLargeScreen(isScreenLarge);
      setVideoSrc(isScreenLarge ? Home : HomeMobile);
      setParagraphText(
        isScreenLarge
          ? "Lobe helps you train machine learning models with a free, easy to use tool."
          : "Create machine learning models with a free, easy to use tool."
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show the arrow if the user is at the top of the page
      setShowArrow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" });
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="relative flex flex-col justify-between">
      <div className="flex flex-col-reverse lg:flex-row my-10 lg:my-0 lg:mt-10 justify-center lg:ml-20 text-center lg:text-left">
        <div className="">
          <h2 className="font-bold text-4xl lg:text-6xl text-[#333333]">
            Train apps to
            <br />
            <span className="text-[#04DDB2]">{words[currentWordIndex]}</span>
          </h2>
          <p className="text-xl lg:text-2xl lg:w-[480px] my-5 text-[#333333]">
            {paragraphText}
          </p>
          <div className="flex flex-row lg:space-y-3 space-y-2 justify-center lg:justify-start space-x-4 ">
            <button className="font-bold py-2 px-4 rounded-3xl text-xl lg:text-2xl duration-300 transform transition-transform ease hover:scale-105 bg-customMediumGreen text-white">
              Download
            </button>
            <div className="text-[#29E2BD] cursor-pointer font-bold text-lg lg:text-xl duration-300 transform transition-transform ease hover:scale-105">
              <a onClick={handleOpenModal}>
                <p>
                  Watch Tour <span className="icon-play2"></span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className=" lg:mt-[-150px] ">
          <video
            src={videoSrc}
            loop
            autoPlay
            muted
            className="h-auto lg:h-[700px]"
            ref={videoRef}
          ></video>
        </div>
      </div>

      {/* Conditionally render the arrow for large screens */}
      {isLargeScreen && showArrow && (
        <div className="absolute bottom-5 left-0 right-0 flex justify-center overflow-visible">
          <div
            className="hero-arrow cursor-pointer animate-bounce"
            onClick={scrollToContent}
            style={{ opacity: 1 }}
          >
            <svg width="58px" height="24px" viewBox="0 0 58 24" version="1.1">
              <title>See More</title>
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                opacity="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  transform="translate(-771.000000, -986.000000)"
                  stroke="#000000"
                  strokeWidth="3"
                >
                  <g transform="translate(771.000000, 986.000000)">
                    <polyline
                      id="download-arrow"
                      points="8 8 29 16 50 8"
                    ></polyline>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default Video;
