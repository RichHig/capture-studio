import React from "react";
import Logo from "../images/Logo.png";
import Social from "../images/Social Links.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0E1513] flex flex-col items-center py-10 px-5 md:py-24 md:px-10">
      {/* Top  */}
      <div className="flex flex-col md:flex-row justify-between md:items-center w-full max-w-6xl">
        <div className="flex items-center mb-6 md:mb-0">
          <img
            src={Logo}
            alt="logo"
            aria-label="Capture Studio"
            className="h-4 w-auto"
          />
          <h1 className="text-[#FC4308] text-xl font-bold ml-2">
            Capture Studio
          </h1>
        </div>
        <div className="flex items-center gap-4 text-[#FC4308]">
          <Link to="/" className="hover:text-accent transition">
            Projects
          </Link>
          <Link to="/" className="hover:text-accent transition">
            Portraits
          </Link>
          <Link to="/" className="hover:text-accent transition">
            Fashion
          </Link>
          <Link to="/" className="hover:text-accent transition">
            Fine Art
          </Link>
        </div>
      </div>
      {/* Bottom  */}
      <div className="flex flex-col items-center md:flex-row justify-between w-full max-w-6xl mt-10 md:mt-16 border-t-2 border-t-[#FC4308] pt-6 md:pt-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-[#FC4308] text-sm">
            © 2023 Capture Studio. All rights reserved.
          </p>
        </div>
        <div>
          <img src={Social} alt="" className="flex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
