import React from "react";
import Navbar from "../../components/header/navbar";
import Card from "./card";
import Footer from "../../components/footer/footer";

import video1 from "../../video/overview/example/Plants.mp4";
import video2 from "../../video/overview/example/Hand Count.mp4";
import video3 from "../../video/overview/example/Feel the Burn.mp4";
import video4 from "../../video/overview/example/Laughing.mp4";
import video5 from "../../video/overview/example/Painting with Mike.mp4";
import video6 from "../../video/overview/example/Mask Up.mp4";
import video7 from "../../video/overview/example/Whales.mp4";
import video8 from "../../video/overview/example/Bees.mp4";
import video9 from "../../video/overview/example/Sleeping.mp4";
import video10 from "../../video/overview/example/Checkout.mp4";
import video11 from "../../video/overview/example/Wildfire.mp4";
import video12 from "../../video/overview/example/Microscope.mp4";
import video13 from "../../video/overview/example/African Wildlife.mp4";
import video14 from "../../video/overview/example/Compression.mp4";
import video15 from "../../video/overview/example/Telescope.mp4";
import video16 from "../../video/overview/example/Deforestation.mp4";

const Example = () => {
  const videos = [
    {
      src: video1,
      title: "Plant Species",
      description:
        "Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
    },
    {
      src: video2,
      title: "Hand Gestures",
      description:
        "Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
    },
    {
      src: video3,
      title: "Personal Trainer",
      description:
        "Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.",
    },
    {
      src: video4,
      title: "Emotional Reactions",
      description:
        "Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
    },
    {
      src: video5,
      title: "Interactive Painting",
      description:
        "Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
    },
    {
      src: video6,
      title: "Safety Precautions",
      description:
        "Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
    },
    {
      src: video7,
      title: "Whale Watching",
      description:
        "Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.",
    },
    {
      src: video8,
      title: "Beehive Health",
      description:
        "Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
    },
    {
      src: video9,
      title: "Baby Monitor",
      description:
        "Train your app to detect when babies are sleeping or awake to notify parents before they start crying.",
    },
    {
      src: video10,
      title: "Smart Checkout",
      description:
        "Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.",
    },
    {
      src: video11,
      title: "Fire Watch",
      description:
        "Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.",
    },
    {
      src: video12,
      title: "Scientific Research",
      description:
        "Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.",
    },
    {
      src: video13,
      title: "Wildlife Behavior",
      description:
        "Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.",
    },
    {
      src: video14,
      title: "Equipment Analytics",
      description:
        "Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.",
    },
    {
      src: video15,
      title: "Telescopic Imagery",
      description:
        "Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.",
    },
    {
      src: video16,
      title: "Aerial Imagery",
      description:
        "Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="justify-center text-center px-6 pt-14 lg:px-0">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className=" text-5xl font-bold text-[#333333]">
            Lobe
            <span className="text-[#04DDB2]"> Examples</span>
          </h2>
          <p className=" text-[#333333] pt-5 text-xl font-normal">
          One tool, endless possibilities. Discover all the<br/> machine learning models you can train with Lobe.
          </p>
        </div>
      </div>
      <div className="py-16 px-4">
        <div className="container mx-auto">
          {videos
            .reduce((rows, video, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(video);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-col lg:flex-row justify-center gap-8   items-center mb-8">
                {row.map((video, cardIndex) => (
                  <div key={cardIndex} className="">
                    <Card
                      video={video.src}
                      title={video.title}
                      description={video.description}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Example;
