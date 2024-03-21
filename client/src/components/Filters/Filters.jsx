import React from "react";
import Dropdown from "../dropdown/Dropdown";
import { FaSortAlphaDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineImportantDevices } from "react-icons/md";
import { CgAddR } from "react-icons/cg";

const Filters = ({sortHandler}) => {
  const options = ["dasho", "kdjcka", "askjb"];
  return (
    <div className="flex flex-wrap gap-y-2 justify-between items-center border-b-[1px] border-[#a4a4a7] px-5 py-3">

      <div className="flex gap-x-4 gap-y-2 items-center flex-wrap">
        {/* All Dropdowns */}
        <Dropdown name={"All Brands"} options={options} />
        <Dropdown name={"Desk"} options={options} />
        <Dropdown name={"Tags"} options={options} />

        {/* Sort Button */}
        <button className="font-menagrotesk-semi bg-[#d3d3d4] font-medium rounded-xl text-sm px-3 py-2 text-center shadow flex gap-x-2 items-center  cursor-pointer text-black" onClick={sortHandler}>
          <FaSortAlphaDown />
          <span>Sort</span>
        </button>

        {/* Filter Button */}
        <button className="font-menagrotesk-semi  border-[1px] border-[#d3d3d4] bg-[#d3d3d4] font-medium rounded-xl text-sm px-3 py-2 text-center shadow flex gap-x-2 items-center  cursor-pointer text-black">
          <IoFilterSharp />
          <span>Filter</span>
        </button>
      </div>


      <div className="flex gap-x-4 ">
        {/* Metting button */}
        <button className="font-menagrotesk-semi bg-white shadow     font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#d3d3d4] flex gap-x-2  items-center cursor-pointer">
          <CgAddR />
          <span>Meeting</span>
        </button>

        {/* Import/Export Button */}
        <button className="font-menagrotesk-semi bg-white shadow     font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#d3d3d4] flex gap-x-2  items-center cursor-pointer">
          <MdOutlineImportantDevices />
          <span>Import/Export</span>
        </button>
      </div>
    </div>
  );
};

export default Filters;
