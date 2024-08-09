import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Lobe?",
      answer: (
        <>
          <p>
            Lobe is a free, private desktop application that has everything you
            need to take your machine learning ideas from prototype to
            production.
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            <span className="underline mr-1">Label</span> your example
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            <span className="underline mr-1">Train</span> a model
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Evaluate training <span className="underline ml-1">Results</span>
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            <span className="underline">Play</span> with your model
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            <span className="underline mr-1">Export</span> and use your model in
            an app
          </p>
        </>
      ),
    },
    {
      question: "What is machine learning?",
      answer: (
        <>
          <p>
            Machine learning is software that learns to perform a task from a
            collection of examples rather than through a person explicitly
            defining rules and formulas. This learning software is called a{" "}
            <span className="font-bold text-[#333333]">model</span>. Teaching a
            model through examples is called{" "}
            <span className="font-bold text-[#333333]">training</span>.
          </p>
          <p className="mt-5">
            Learn more in this{" "}
            <span className="underline">beginner crash course</span>.
          </p>
        </>
      ),
    },
    {
      question: "What kind of machine learning can I train with Lobe?",
      answer: (
        <p>
          This version of Lobe learns to look at images using{" "}
          <span className="font-bold text-[#333333]">
            image classification -
          </span>{" "}
          categorizing an image into a single label overall. We are working to
          expand to more types of problems and data in future versions.
        </p>
      ),
    },
    {
      question: "What is image classification?",
      answer: (
        <>
          <p>
            Image classification is categorizing an image into a single label to
            represent its content. Apps using image classification could:
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Tell you when someone is coming up your front steps
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Send you photos of a new bird that just started showing up at your
            bird feeder
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Count the number of push-ups you’ve done in a workout
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Alert you when a shelf is empty
          </p>
          <p className="mt-5">
            <span className="icon-checkmark bg-[#00DDB3] text-white rounded-full p-1 text-xs mr-2"></span>
            Read signs in your environment
          </p>
          <p className="mt-10">
            Lobe is not doing any reasoning or understanding of the content in
            your images. Image classification learns to find any patterns from
            your images - things like textures, colors, and shapes - that can be
            used to separate your labels.
          </p>
          <p className="mt-10">
            See <span className="underline">Label</span> to help Lobe learn the
            correct patterns.
          </p>
        </>
      ),
    },
    {
      question: "How do I use my model?",
      answer: (
        <>
          <p>
            A model is a piece of code. You can export your model into a variety
            of industry-standard formats to run on Mac and Windows, the web, or
            mobile and edge devices. You can also export and use your model in{" "}
            <span className="underline ml-1">Power Platform</span>. See our{" "}
            <span className="underline mx-1">GitHub</span> for sample projects
            and other tools for working with Lobe. We are also working on a
            collection of apps and integrations to help run your model without
            any code.
          </p>
          <p className="mt-5">
            See more in <span className="underline ml-1">Export</span>.
          </p>
        </>
      ),
    },
    {
      question: "How much does Lobe cost?",
      answer: <p>Lobe is free and runs entirely on your computer.</p>,
    },
    {
      question: "Do I need any machine learning experience?",
      answer: (
        <p>
          No machine learning knowledge is necessary. Lobe follows best
          practices while automatically building and training a model for you.
        </p>
      ),
    },
    {
      question: "Are my images and models private?",
      answer: (
        <>
          <p>
            Yes, all of your images and models stay private on your computer.
            Lobe runs and trains machine learning models entirely on your own
            device. Your project images and models are never uploaded to the
            cloud or visible to us.
          </p>
          <p className="text-base mt-10">
            If you <span className="underline mx-1">opt-in</span> to app
            analytics,{" "}
            <span className="underline mx-1">
              learn more about what is collected
            </span>
            .
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`w-72 mt-10 lg:w-[600px] border-b-2 pb-10 cursor-pointer transition-colors duration-300 `}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="flex text-[#333333] justify-between items-center">
            <h3 className="text-base md:text-lg font-bold transition-colors duration-300 ">
              {item.question}
            </h3>
            <span
              className={`${
                activeIndex === index
                  ? "icon-cheveron-up"
                  : "icon-cheveron-down"
              }`}
            ></span>
          </div>
          {activeIndex === index && (
            <div className="mt-5 text-[#656565] transition-opacity duration-300 ease-in-out">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
