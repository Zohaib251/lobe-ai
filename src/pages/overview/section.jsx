import React, { useState, useEffect, useRef } from "react";
import video1 from "../../video/overview/section/video1.mp4";
import video1Mobile from "../../video/overview/section/video1Mobile.mp4";
import video2 from "../../video/overview/section/video2.mp4";
import video2Mobile from "../../video/overview/section/video2Mobile.mp4";
import video3 from "../../video/overview/section/video3.mp4";
import video3Mobile from "../../video/overview/section/video3Mobile.mp4";

const Section = () => {
  const [isMobile, setIsMobile] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handlePlayOnView = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayOnView, {
      threshold: 0.5, // Adjust based on how much of the video should be in view to start playing
    });

    if (video1Ref.current) observer.observe(video1Ref.current);
    if (video2Ref.current) observer.observe(video2Ref.current);
    if (video3Ref.current) observer.observe(video3Ref.current);

    return () => {
      if (video1Ref.current) observer.unobserve(video1Ref.current);
      if (video2Ref.current) observer.unobserve(video2Ref.current);
      if (video3Ref.current) observer.unobserve(video3Ref.current);
    };
  }, []);

  return (
    <div className="bg-[#fff] py-20">
      <div className="justify-center text-center px-6 lg:px-0 ">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-left text-3xl lg:text-6xl font-bold text-[#333333]">
            Label, Train,
            <span className="text-[#04DDB2]"> Use</span>
          </h2>
          <p className="text-left text-[#333333] pt-5 text-lg font-normal">
            Lobe simplifies the process of machine learning into three
            <br /> easy steps. Collect and label your images. Train your model
            <br /> and understand your results. Then play, improve, and export
            <br /> your model.
          </p>
        </div>
      </div>
      {/* Video 1 */}
      <div>
        <div className="flex justify-center mt-20 items-center ">
          <video
            ref={video1Ref}
            src={isMobile ? video1Mobile : video1}
            muted
            className="h-auto lg:h-[700px] object-cover"
          ></video>
        </div>
        <div className="justify-center lg:mt-[-200px] z-10 text-center px-6 lg:px-0 ">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-left text-2xl lg:text-5xl font-bold text-[#333333]">
              <span className="text-[#04DDB2]"> Label </span> your images
            </h2>
            <p className="text-left text-[#333333] pt-5 text-xl font-normal">
              Collect bursts using your webcam, or drag in
              <br /> a folder of images from your computer. Then
              <br /> quickly label your images to create a machine
              <br />
              learning dataset.
            </p>
          </div>
        </div>
      </div>
      {/* Video 2 */}
      <div>
        <div className="flex justify-center items-center">
          <video
            ref={video2Ref}
            src={isMobile ? video2Mobile : video2}
            muted
            className="h-auto lg:h-[700px] object-cover "
          ></video>
        </div>
        <div className="flex items-center flex-col justify-center lg:ml-[38%] 2xl:ml-[30%] lg:mt-[-200px] z-10 text-center px-6 lg:px-0">
          <div className="max-w-[800px] w-full">
            <h2 className="text-left text-2xl lg:text-5xl font-bold text-[#333333]">
              <span className="text-[#04DDB2]"> Train </span> automatically
            </h2>
            <p className="text-left text-[#333333] pt-5 text-xl font-normal">
              Automatically train on your own computer without any
              <br /> setup or configuration. Understand the strengths and
              <br /> weaknesses of your model with live visual results.
            </p>
          </div>
        </div>
      </div>
      {/* Video 3 */}
      <div>
        <div className="flex justify-center mt-20 items-center ">
          <video
            ref={video3Ref}
            src={isMobile ? video3Mobile : video3}
            muted
            className="h-auto lg:h-[700px]  object-cover"
          ></video>
        </div>
        <div className="justify-center lg:mt-[-200px] z-10 text-center px-6 lg:px-0 ">
          <div className=" max-w-[800px] mx-auto">
            <h2 className="text-left text-2xl lg:text-5xl  font-bold text-[#333333]">
              <span className="text-[#04DDB2]"> Use </span>your model
            </h2>
            <p className="text-left text-[#333333] pt-5 text-xl font-normal">
              Use your model with your webcam or
              <br /> images from your computer. Improve your
              <br /> results by giving your model feedback on its
              <br /> predictions, then finally export it to your
              <br /> app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
