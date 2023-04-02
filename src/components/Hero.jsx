import React from "react";
import Icon from "../images/Icon wrapper.png";
import HeroImage from "../images/Image Wrapper.png";

const Hero = () => {
  return (
    <div className="bg-[#293526] max-w-screen mx-auto pt-16 pb-32 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-screen-xl w-full mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-[#FC4308]">
          {/* Left side  */}
          <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 pb-8 md:pb-0">
            <h1 className="font-medium text-5xl md:text-7xl lg:text-8xl leading-snug max-w-xl">
              We Capture the World
            </h1>
            <div>
              <p className="text-base md:text-lg lg:text-xl font-normal leading-6 md:leading-8 max-w-md">
                At our studio, we don't just take pictures - we capture the
                world. Our passion for photography goes beyond just snapping a
                photo - we strive to create images that tell a story, evoke
                emotions, and capture the essence of the world around us.
              </p>
            </div>
            <div className="w-16 h-16 rounded-full flex justify-center items-center">
              <img src={Icon} alt="" className="w-16 h-16" />
            </div>
          </div>
          {/* Right side  */}
          <div className="flex justify-center items-center">
            <img src={HeroImage} alt="" className="w-full md:max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
