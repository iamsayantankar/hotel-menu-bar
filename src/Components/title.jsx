import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex items-center overflow-hidden justify-center mb-16">
      <img
        src="/media/shape/set-left.png"
        alt="Left decoration"
        className="w-12 h-12 md:w-fit md:h-fit"
      />
      <h2 className="sm:text-4xl text-2xl md:mx-3 text-nowrap font-bold text-white my-8">
        {title}
      </h2>
      <img
        src="/media/shape/set-right.png"
        alt="Right decoration"
        className="w-12 h-12 md:w-fit md:h-fit"
      />
    </div>
  );
};

export default Title;
