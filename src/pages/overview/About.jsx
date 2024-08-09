import React from "react";
import image from "../../image/home/About/About.jpg";
import video1 from "../../video/overview/About/Easy.mp4";
import video2 from "../../video/overview/About/Private.mp4";
import video3 from "../../video/overview/About/Anywhere.mp4";
import video4 from "../../video/overview/About/imageClassification.mp4";
import video5 from "../../video/overview/About/objectDetection.mp4";
import video6 from "../../video/overview/About/dataClassification.mp4";

const About = () => {
  return (
    <div className="bg-[#F2F3F5] py-16">
      <div className="justify-center text-center px-6 lg:px-0 ">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-left text-3xl lg:text-6xl font-bold text-[#333333]">
            Machine learning <br /> made{" "}
            <span className="text-[#04DDB2]">easy</span>
          </h2>
          <p className="text-left text-[#333333] pt-5 text-lg font-normal">
            Lobe has everything you need to bring your machine learning
            <br /> ideas to life. Just show it examples of what you want it to
            <br /> learn, and it automatically trains a custom machine learning
            <br /> model that can be shipped in your app.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center px-5 pt-10 ">
        <img src={image} alt="" />
      </div>

      <div className="flex flex-col md:flex-row lg:space-x-28 space-y-8 mx-8 lg:mx-0 lg:space-y-0 justify-center text-center">
        <div className="text-left">
          <div className="space-y-3 w-60">
            <video
              src={video1}
              autoPlay
              muted
              className="rounded-xl w-12"
            ></video>
            <h3 className="font-bold text-2xl text-[#333333]">Easy to Use</h3>
            <p className="text-[#333333] font-normal text-lg">
              Designed to be easy enough for anyone to use. No code or
              experience required.
            </p>
          </div>
        </div>
        <div className="text-left">
          <div className="space-y-3  w-60">
            <video
              src={video2}
              autoPlay
              muted
              className="rounded-xl  w-12"
            ></video>
            <h3 className="font-bold text-2xl text-[#333333]">
              Free and Private
            </h3>
            <p className="text-[#333333] font-normal text-lg">
              Train for free on your own computer without uploading your data to
              the cloud.
            </p>
          </div>
        </div>
        <div className="text-left">
          <div className="space-y-3  w-60">
            <video
              src={video3}
              autoPlay
              muted
              className="rounded-xl  w-12"
            ></video>
            <h3 className="font-bold text-2xl text-[#333333]">
              Export Anywhere
            </h3>
            <p className="text-[#333333] font-normal text-lg">
              Available for Mac and Windows. Export your model and ship it on
              any platform you choose.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center text-center px-6 pt-20 lg:px-0 ">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-left text-4xl  font-bold text-[#333333]">
            <span className="text-[#04DDB2]">Project</span> Templates
          </h2>
          <p className="text-left text-[#333333] pt-5 text-xl font-normal">
            Lobe will automatically select the right machine learning
            <br /> architecture for your project. Image classification is
            <br /> available now, with more templates coming soon.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar pt-14 px-4">
        <div className="flex space-x-8 lg:space-x-9 justify-start lg:justify-center text-center w-full px-4 lg:px-0">
          <div className="bg-white py-6 px-7 pb-10 rounded-3xl flex-shrink-0 lg:w-72">
            <div className="space-y-3">
              <video
                src={video4}
                autoPlay
                muted
                className="w-48 mx-auto"
              ></video>
              <h3 className="font-bold lg:text-xl text-xl text-[#333333]">
                Image Classification
              </h3>
              <p className="text-[#333333] pb-4 font-normal text-lg">
                Label an image based
                <br />
                on its content.
              </p>
              <p className="bg-customMediumGreen text-white text-sm rounded-xl font-semibold mx-10">
                Available Now
              </p>
            </div>
          </div>

          <div className="bg-white py-6 px-7 pb-10 rounded-3xl flex-shrink-0 lg:w-72 ">
            <div className="space-y-3">
              <video
                src={video5}
                autoPlay
                muted
                className="w-48 mx-auto"
              ></video>
              <h3 className="font-bold lg:text-xl text-xl text-[#333333]">
                Object Detection
              </h3>
              <p className="text-[#333333] pb-4 font-normal text-lg">
                Locate an object inside
                <br />
                of an image.
              </p>
              <p className="bg-[#EEF0F2] text-[#393939] text-sm rounded-xl font-semibold mx-10">
                Coming Soon
              </p>
            </div>
          </div>

          <div className="bg-white py-6 px-7 pb-10 rounded-3xl flex-shrink-0 lg:w-72">
            <div className="space-y-3">
              <video
                src={video6}
                autoPlay
                muted
                className="w-48 mx-auto"
              ></video>
              <h3 className="font-bold lg:text-xl text-xl text-[#333333]">
                Data Classification
              </h3>
              <p className="text-[#333333] pb-4 font-normal text-lg">
                Label data in a table
                <br />
                based on its content.
              </p>
              <p className="bg-[#EEF0F2] text-[#393939] text-sm rounded-xl font-semibold mx-10">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
