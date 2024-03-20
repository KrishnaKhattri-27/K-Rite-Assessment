import React from "react";
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ handleSearch, query }) => {
  return (
    <nav className="flex justify-between items-center border-b-[1px] border-[#a4a4a7] px-4 py-3">
      <h1 className=" tracking-tighter text-lg font-menagrotesk-semi">
        Products
      </h1>
      <div className="flex items-center gap-x-4">
        <div class="w-[250px] shadow-lg">
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
        <div className="p-2 bg-white rounded-xl shadow-lg hover:bg-[#d3d3d4]cursor-pointer">
          <TiMessages size={21} />
        </div>
        <div className="p-2 bg-white rounded-xl shadow-lg hover:bg-[#d3d3d4] cursor-pointer">
          <IoSettings size={21} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
