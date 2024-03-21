import React, { useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";
import Hamburger from "./Hamburger";

const Navbar = ({ handleSearch, query }) => {
  const [screenSize, setScreenSize] = useState(false);
  const [showmenu, setShowmenu] = useState(false);

  //   Function to check the screen width,(so as we can enable hamsburger menu)
  const changedisplay = () => {
    if (window.innerWidth < 1024) setScreenSize(true);
    else {
      setScreenSize(false);
      setShowmenu(false);
    }
  };

  window.addEventListener("resize", changedisplay);

  const hamsburgerhandler = () => {
    setShowmenu(!showmenu);
  };

  const handleClick = () => {
    setShowmenu(false);
  };

  useEffect(() => {
    changedisplay();
  }, []);

  return (
    <nav className="flex  relative overflow-y-visible justify-between items-center border-b-[1px] border-[#a4a4a7] px-4 py-3 z-[1700]">

      <div className="flex gap-x-2 sm:gap-x-4">
       {/* Hamburger Menu Icon */}
        <div
          className={` lg:hidden cursor-pointer z-[5000] flex flex-col justify-center items-end ${
            showmenu ? "change" : ""
          }  h-6 w-6 mt-21`}
          onClick={hamsburgerhandler}
        >
          <i className={`block w-full bg-black h-1 linex  line1 mb-1`}></i>
          <i className={`block w-full linex h-1 bg-black line2 mb-1`}></i>
          <i className={`block linex w-full bg-black h-1 line3`}></i>
        </div>

          {/* Heading */}
        <h1 className=" tracking-tighter text-lg font-menagrotesk-semi">
          Products
        </h1>
      </div>

      <div className="flex items-center gap-x-4">
        {/* Seacrch Bar */}
        <div class="w-[150px] sm:w-[250px] shadow-lg">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <FiSearch size={21} />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2.5 pl-9 pt-3 text-base text-[#a4a4a7] border border-[#a4a4a7] rounded-lg bg-white font-menagrotesk-semi"
              placeholder="Search for.."
              value={query}
              onChange={handleSearch}
              required
            />
          </div>
        </div>

        {/* Setting and Message icon */}
        <div className="p-2 hidden sm:block bg-white rounded-xl shadow-lg hover:bg-[#d3d3d4]cursor-pointer">
          <TiMessages size={21} />
        </div>
        <div className="p-2 hidden sm:block bg-white rounded-xl shadow-lg hover:bg-[#d3d3d4] cursor-pointer">
          <IoSettings size={21} />
        </div>
      </div>

      {/* Absolute Hamburger menu rendering on required screen width */}
      {screenSize ? (
        <Hamburger showmenu={showmenu} handleClick={handleClick} />
      ) : null}
      
    </nav>
  );
};

export default Navbar;
