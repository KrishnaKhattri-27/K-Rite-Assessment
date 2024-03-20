import React from "react";
import Dropdown from "../dropdown/Dropdown";
import { FaSortAlphaDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineImportantDevices } from "react-icons/md";
import { CgAddR } from "react-icons/cg";

const Filters = ({sortHandler}) => {
  const options = ["dasho", "kdjcka", "askjb"];
  return (
    <div className="flex justify-between items-center border-b-[1px] border-[#a4a4a7] px-5 py-3">
      <div className="flex gap-x-4 items-center">
        <Dropdown name={"All Brands"} options={options} />
        <Dropdown name={"Desk"} options={options} />
        <Dropdown name={"Tags"} options={options} />
        <div className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-2 items-center  cursor-pointer text-[#a4a4a7]" onClick={sortHandler}>
          <FaSortAlphaDown />
          <h1>Sort</h1>
        </div>
        <div className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-2 items-center cursor-pointer text-[#a4a4a7]">
          <IoFilterSharp />
          <h1>Filter</h1>
        </div>
      </div>
      <div className="flex gap-x-4 ">
        <div className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-2  items-center cursor-pointer">
          <CgAddR />
          <h1>Filter</h1>
        </div>
        <div className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-2 items-center cursor-pointer">
          <MdOutlineImportantDevices />
          <h1>Import/Export</h1>
        </div>
      </div>
    </div>
  );
};

export default Filters;
