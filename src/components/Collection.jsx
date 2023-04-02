import React from "react";
import Victorian from "../images/Victoria.png";

const Collection = () => {
  return (
    <div className="bg-[#293526] max-w-screen mx-auto p-4 flex flex-col justify-center items-center">
      <div className="flex flex-col pb-6 md:pb-14">
        <h3 className="text-[#FC4308] text-sm md:text-base flex items-center justify-center p-6 ">
          November 2022
        </h3>
        <h1 className="text-[#FC4308] text-3xl md:text-5xl font-medium flex items-center justify-center">
          Victorian Collection
        </h1>
      </div>
      <div className="w-full md:w-[80%] lg:w-[60%]">
        <img src={Victorian} alt="" className="w-full h-auto object-cover" />
      </div>
      <div className="">
        <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] text-sm md:text-base">
          View case study
        </button>
      </div>
    </div>
  );
};

export default Collection;
