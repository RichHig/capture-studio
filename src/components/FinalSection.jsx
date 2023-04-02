import React from "react";

const FinalSection = () => {
  return (
    <div className="bg-[#0E1513] flex flex-col items-center py-10 px-5 md:py-24 md:px-10">
      <div className="text-[#FC4308] text-center">
        <h2 className="font-medium text-4xl md:text-8xl mb-6">
          Capture the world with us!
        </h2>
        <p className="text-base md:text-lg max-w-lg mx-auto">
          We are dedicated to promoting emerging and established artists alike,
          offering a space for them to share their unique perspectives with the
          world. Our mission is to provide a platform that celebrates the beauty
          of art in all its forms and inspires creativity, curiosity, and
          imagination in our viewers.
        </p>
      </div>
      <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] text-sm md:text-base mt-8">
        Contact Us
      </button>
    </div>
  );
};

export default FinalSection;
