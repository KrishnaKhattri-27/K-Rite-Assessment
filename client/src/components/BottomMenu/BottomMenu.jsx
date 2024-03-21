import React from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "../dropdown/Dropdown";

const BottomMenu = ({ counter, reomveCheckHandler }) => {
  const options = ["dasho", "kdjcka", "askjb"];

  return (

    // Rendering only if atleast one checkbox is checked
    counter > 0 && (
      <div className="hidden sm:flex absolute bottom-10 left-1/2 lg:left-[70%] -translate-x-1/2 lg:-translate-x-3/4  items-center gap-x-2 bg-white rounded-xl p-2 shadow-xl z-[100]">

        {/* counter diplay section for the checked box */}
        <div className="flex items-center gap-x-1">
          <span className="w-5 h-5 text-center pt-0.5 font-menagrotesk-light text-xs bg-black text-white rounded-lg">
            {counter}
          </span>
          <span className="font-menagrotesk text-sm">selected</span>
        </div>

        {/* Archive button */}
        <button className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#d3d3d4] flex gap-x-1  items-center cursor-pointer border-[1px] border-[#d3d3d4] shadow-lg">
          <HiOutlineArchiveBox size={18} />
          <span>Archive</span>
        </button>

        {/* Delete Button */}
        <button className="font-menagrotesk-semi text-red-600 bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#d3d3d4] flex gap-x-1  items-center cursor-pointer border-[1px] border-[#d3d3d4] shadow-lg">
          <MdDeleteOutline size={18} />
          <span>Delete</span>
        </button>

        {/* DropDown Menu Button */}
        <Dropdown name={"Menu"} options={options} />

        {/* Cross Icon */}
        <RxCross2 size={21} onClick={reomveCheckHandler}/>
      </div>
    )
  );
};

export default BottomMenu;
