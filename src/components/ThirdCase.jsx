import React from "react";
import Priya from "../images/priya.png";

const ThirdCase = () => {
  return (
    <div className="bg-[#293526] max-w-screen mx-auto pt-8 pb-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col justify-center items-start md:w-[50vw] lg:w-[450px] md:h-auto h-full gap-4 md:gap-8">
          <h3 className="text-[#FC4308] text-sm font-normal">September 2021</h3>
          <div className="">
            <h1 className="text-[#FC4308] text-3xl md:text-5xl font-medium mb-6">
              Priya Patel
            </h1>
            <p className="text-[#FC4308] text-sm md:text-base">
              Priya is an emerging photographer with a passion for exploring the
              intersections between color, texture, and emotion. Drawing
              inspiration from her Indian heritage and her experiences living in
              different parts of the world, Priya's art invites viewers to
              connect with their own sense of identity and place in the world.
            </p>
          </div>
          <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] text-sm md:text-base">
            View case study
          </button>
        </div>
        <div className="box-border flex flex-col justify-center items-center p-0 w-560 h-640 bg-cover bg-center border-2 border-solid border-[#8E2909] rounded-md">
          <img
            src={Priya}
            alt=""
            className="flex-none order-0 self-stretch flex-grow object-contain w-full h-4/6"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdCase;
