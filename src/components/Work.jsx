import React from "react";
import Work1 from "../images/work1.png";
import Work2 from "../images/work2.png";
import Work3 from "../images/work3.png";

const Work = () => {
  return (
    <div className="bg-[#0E1513] max-w-screen mx-auto pt-16 pb-32 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-screen-xl w-full mx-auto relative">
        <h1 className="text-[#FC4308] text-xl md:text-4xl font-bold mb-8">
          Our Work
        </h1>
        <div className="container flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img src={Work1} alt="" className="w-full object-contain" />
          </div>
          <div className="flex-1">
            <img src={Work2} alt="" className="w-full object-contain" />
          </div>
          <div className="flex-1">
            <img src={Work3} alt="" className="w-full object-contain" />
          </div>
        </div>
        <button className="mt-8 md:mt-12 flex ml-auto border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308]">
          View all work
        </button>
      </div>
    </div>
  );
};
export default Work;
