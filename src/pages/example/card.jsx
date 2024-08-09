import React from 'react';

const card = ({ video, title, description }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl max-w-sm mx-auto">
      <div className="overflow-hidden rounded-t-3xl">
        <video src={video} loop autoPlay className="w-full h-auto rounded-t-3xl" />
      </div>
      <div className="flex flex-col p-6 mb-4">
        <div>
          <h2 className="text-xl font-bold text-[#333333]">{title}</h2>
        </div>
        <p className="text-[#333333] text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default card;
