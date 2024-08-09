import React from "react";
import Navbar from "../../components/header/navbar";
import Card from "./card";
import Footer from "../../components/footer/footer";
import image1 from "../../image/blog/image1.png";
import image2 from "../../image/blog/image2.jpg";
import image3 from "../../image/blog/image3.jpg";
import image4 from "../../image/blog/image4.jpg";
import image5 from "../../image/blog/image5.jpg";
import image6 from "../../image/blog/image6.jpg";
import image7 from "../../image/blog/image7.jpg";

const blog = () => {
  const images = [
    {
      src: image1,
      title: "Use your model in Power Platform",
      description:
        "We're excited to announce a new integration with Microsoft Power Platform.",
      date: "Release . November 15,2021",
    },
    {
      src: image2,
      title: "Introducing new ways to use your model",
      description:
        "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
      date: "Release . March 23,2021",
    },
    {
      src: image3,
      title: "Using your model 101",
      description:
        "Learn everything you need to know to export your model and use it in your app.",
      date: "Product . March 23,2021",
    },
    {
      src: image4,
      title: "Machine Learning Kit with Adafruit",
      description:
        "Introducing a brand new machine learning kit from Adafruit and Lobe.",
      date: "Product . March 31,2021",
    },
    {
      src: image5,
      title: "Four New Features in Lobe",
      description:
        "Select your camera source, export your model to new formats, and more in the new Lobe.",
      date: "Release . December 10,2020",
    },
    {
      src: image6,
      title: "Endless Camera Sources",
      description:
        "Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
      date: "Product . December 10,2020",
    },
    {
      src: image7,
      title: "Machine Learning Made Easy",
      description:
        "Everything you need to train custom machine learning models in a free, easy to use app.",
      date: "Release . October 26,2020",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center px-6 pt-10 lg:px-0">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-5xl font-bold text-[#333333]">
            Lobe
            <span className="text-[#04DDB2]"> Blog</span>
          </h2>
          <p className="text-[#333333] pt-5 text-xl font-normal">
            Read about our newest releases, and get tips on how to
            <br />
            create custom machine learning models with Lobe.
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          {images
            .reduce((rows, image, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(image);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col lg:flex-row justify-center gap-8 items-center mb-8"
              >
                {row.map((image, cardIndex) => (
                  <div key={cardIndex} className="">
                    <Card
                      image={image.src}
                      title={image.title}
                      description={image.description}
                      date={image.date}
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

export default blog;
