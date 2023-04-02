import React from "react";
import Amara from "../images/Amara.png";

const SecondCase = () => {
  return (
    <div className="bg-[#293526] max-w-screen mx-auto pt-8 pb-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="box-border flex flex-col justify-center items-center p-0 w-560 h-640 bg-cover bg-center border-2 border-solid border-[#8E2909] rounded-md">
          <img
            src={Amara}
            alt=""
            className="flex-none order-0 self-stretch flex-grow object-contain w-full h-4/6"
          />
        </div>
        <div className="flex flex-col justify-center items-start md:w-[50vw] lg:w-[450px] md:h-auto h-full gap-4 md:gap-8">
          <h3 className="text-[#FC4308] text-sm font-normal">Janurary 2010</h3>
          <div className="">
            <h1 className="text-[#FC4308] text-3xl md:text-5xl font-medium mb-6">
              Amara Lopez
            </h1>
            <p className="text-[#FC4308] text-sm md:text-base">
              Amara is a talented artist who creates stunning pieces of abstract
              art. Her use of bold colors and fluid shapes results in a truly
              unique and captivating style. With each piece, Amara strives to
              evoke emotions and spark the imagination of the viewer, making her
              art not only visually striking but also deeply meaningful.
            </p>
          </div>
          <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] text-sm md:text-base">
            View case study
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondCase;
