import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //Add state to manage the mobile dropdown menu
  const [nav, setNav] = useState(false);
  // Toggle the mobile dropdown menu when the icon is clicked
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#293526] max-w-screen mx-auto px-6 py-4 flex items-center justify-between">
      {/* logo  */}
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          alt="logo"
          aria-label="Capture Studio"
          className="w-8 h-8"
        />
        <h1 className="text-[#FC4308] text-lg font-bold">Capture Studio</h1>
      </div>

      {/* Links  */}
      <nav className="hidden md:flex items-center gap-4 text-[#FC4308]">
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
        <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] hover:bg-[#FC4308] hover:text-[#293526] transition duration-300">
          Contact
        </button>
      </nav>

      {/* dropdown menu  */}
      <div className="md:hidden z-20">
        <button
          onClick={handleClick}
          className="text-[#FC4308] focus:outline-none"
        >
          {!nav ? (
            <FaBars className="text-[#FC4308]" />
          ) : (
            <FaTimes className="text-[#FC4308]" />
          )}
        </button>
      </div>
      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#020409] z-10 flex flex-col justify-center items-center text-[#FC4308] text-lg">
          <div className="p-5 bg-[#0D1E20] w-full h-full flex flex-col items-center justify-center gap-4">
            <Link exact to="/" activeClassName="text-accent">
              Projects
            </Link>
            <Link to="/portraits" activeClassName="text-accent">
              Portraits
            </Link>
            <Link to="/fashion" activeClassName="text-accent">
              Fashion
            </Link>
            <Link to="/fine-art" activeClassName="text-accent">
              Fine Art
            </Link>
            <button className="border border-[#FC4308] border-solid px-4 py-2 text-[#FC4308] hover:bg-[#FC4308] hover:text-[#293526] transition duration-300 focus:outline-none">
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
