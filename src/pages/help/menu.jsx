import React from "react";

const Menu = ({ activeIndex, setActiveIndex }) => {
  const menuItems = [
    { name: "Welcome", link: "#" },
    { name: "Label", link: "#" },
    { name: "Train", link: "#" },
    { name: "Results", link: "#" },
    { name: "Play", link: "#" },
    { name: "Export", link: "#" },
    { name: "Improving", link: "#" },
    { name: "Tips", link: "#" },
    { name: "Community", link: "https://www.reddit.com/r/Lobe/" },
    { name: "Lobe Tour", link: "/tour" },
    { name: "Examples", link: "/examples" },
    { name: "Contact Us", link: "#" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[730px]">
      <div className="flex flex-col items-left text-[#333333] justify-center overflow-y-auto w-full px-4 py-6 scrollbar-hidden">
        {menuItems.map((item, index) => (
          <a
            href={item.link}
            key={index}
            target={item.name === "Community" ? "_blank" : "_self"}
            rel={item.name === "Community" ? "noopener noreferrer" : ""}
            className={`text-lg font-semibold py-2 px-7 rounded-lg ${
              activeIndex === index
                ? "bg-[#00E1B1] text-white"
                : "text-[#333333]"
            } ${item.name === "Community" ? "mt-10" : "mt-4"}`}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
