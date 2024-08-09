import React from "react";

import video1 from "../../video/overview/example/Laughing.mp4";
import video2 from "../../video/overview/example/Mask Up.mp4";
import video3 from "../../video/overview/example/Feel the Burn.mp4";
import video4 from "../../video/overview/example/Plants.mp4";
import video5 from "../../video/overview/example/Painting with Mike.mp4";
import video6 from "../../video/overview/example/Bees.mp4";
import video7 from "../../video/overview/example/Whales.mp4";
import video8 from "../../video/overview/example/Hand Count.mp4";
import video9 from "../../video/overview/example/African Wildlife.mp4";
import video10 from "../../video/overview/example/Microscope.mp4";
import video11 from "../../video/overview/example/Checkout.mp4";
import video12 from "../../video/overview/example/Compression.mp4";
import video13 from "../../video/overview/example/Sleeping.mp4";
import video14 from "../../video/overview/example/Telescope.mp4";
import video15 from "../../video/overview/example/Deforestation.mp4";
import video16 from "../../video/overview/example/Wildfire.mp4";

const Example = () => {
  const videos = [
    { src: video1, text: "Emotional Reaction", link: "/examples" },
    { src: video2, text: "Safety Precautions", link: "/examples" },
    { src: video3, text: "Personal Trainer", link: "/examples" },
    { src: video4, text: "Plant Species", link: "/examples" },
    { src: video5, text: "Interactive Painting", link: "/examples" },
    { src: video6, text: "Beehives Health", link: "/examples" },
    { src: video7, text: "Whale Watching", link: "/examples" },
    { src: video8, text: "Hand Gestures", link: "/examples" },
    { src: video9, text: "Wildlife Behavior", link: "/examples" },
    { src: video10, text: "Scientific Research", link: "/examples" },
    { src: video11, text: "Smart Checkout", link: "/examples" },
    { src: video12, text: "Equipment Analytics", link: "/examples" },
    { src: video13, text: "Baby Monitor", link: "/examples" },
    { src: video14, text: "Telescopic Imagery", link: "/examples" },
    { src: video15, text: "Aerial Imagery", link: "/examples" },
    { src: video16, text: "Fire Watch", link: "/examples" },
  ];

  return (
    <div className="bg-[#F2F3F5] flex flex-col justify-center items-center py-16 overflow-hidden">
      <div className="justify-center text-center px-6 lg:px-0">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-left text-3xl lg:text-6xl font-bold text-[#333333]">
            Lobe
            <span className="text-[#04DDB2]"> Examples</span>
          </h2>
          <p className="text-left text-[#333333] pt-5 text-xl font-normal">
            One tool, endless possibilities. Discover all the things you can
            <br /> train your app to do with Lobe.
          </p>
        </div>
      </div>

      <div className="overflow-hidden py-16 w-full">
        {/* First Row */}
        <div className="relative flex animate-marquee-left space-x-4">
          <div className="flex space-x-4" style={{ minWidth: "2000px" }}>
            {videos.slice(0, 8).map((video, index) => (
              <a
                key={index}
                href={video.link}
                className="relative duration-300 transform transition-transform ease hover:scale-105 hover:shadow-xl"
                style={{ flex: "0 0 230px" }} // Fixed width for each video
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "auto" }} // Ensure video takes full width of the container
                  className="rounded-3xl"
                />
                <div className="absolute top-1 left-2 text-white p-2 text-lg font-bold ">
                  {video.text}
                </div>
              </a>
            ))}
            {/* Duplicate videos for seamless looping */}
            {videos.slice(0, 8).map((video, index) => (
              <a
                key={index + 8}
                href={video.link}
                className="relative duration-300 transform transition-transform ease hover:scale-105 hover:shadow-xl"
                style={{ flex: "0 0 230px" }} // Fixed width for each video
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "auto" }} // Ensure video takes full width of the container
                  className="rounded-3xl"
                />
                <div className="absolute top-1 left-2 text-white p-2 text-lg font-bold ">
                  {video.text}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative flex mt-8 animate-marquee-right space-x-4">
          <div className="flex space-x-4" style={{ minWidth: "2000px" }}>
            {videos.slice(8, 16).map((video, index) => (
              <a
                key={index}
                href={video.link}
                className="relative duration-300 transform transition-transform ease hover:scale-105"
                style={{ flex: "0 0 230px" }} // Fixed width for each video
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "auto" }} // Ensure video takes full width of the container
                  className="rounded-3xl"
                />
                <div className="absolute top-1 left-2 text-white p-2 text-lg font-bold">
                  {video.text}
                </div>
              </a>
            ))}
            {/* Duplicate videos for seamless looping */}
            {videos.slice(8, 16).map((video, index) => (
              <a
                key={index + 16}
                href={video.link}
                className="relative duration-300 transform transition-transform ease hover:scale-105"
                style={{ flex: "0 0 230px" }} // Fixed width for each video
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "auto" }} // Ensure video takes full width of the container
                  className="rounded-3xl"
                />
                <div className="absolute top-1 left-2 text-white p-2 text-lg font-bold">
                  {video.text}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
