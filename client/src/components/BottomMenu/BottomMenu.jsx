import React from "react";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "../dropdown/Dropdown";

const BottomMenu = ({ counter, reomveCheckHandler }) => {
  const options = ["dasho", "kdjcka", "askjb"];

  return (
    counter > 0 && (
      <div className=" absolute bottom-5 left-3/4 -translate-x-3/4 flex items-center gap-x-2 bg-white rounded-xl p-2 shadow-lg z-[100]">
        <div className="flex items-center gap-x-1">
          <span className="w-5 h-5 text-center pt-0.5 font-menagrotesk-light text-xs bg-black text-white rounded-lg">
            {counter}
          </span>
          <span className="font-menagrotesk text-sm">selected</span>
        </div>
        <div className="font-menagrotesk-semi bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-1  items-center cursor-pointer border-[1px] border-[#a4a4a7] shadow-lg">
          <HiOutlineArchiveBox size={18} />
          <h1>Archive</h1>
        </div>
        <div className="font-menagrotesk-semi text-red-600 bg-white font-medium rounded-xl text-sm px-3 py-2 text-center hover:bg-[#a4a4a7] flex gap-x-1  items-center cursor-pointer border-[1px] border-[#a4a4a7] shadow-lg">
          <MdDeleteOutline size={18} />
          <h1>Delete</h1>
        </div>
        <Dropdown name={"Menu"} options={options} />
        <RxCross2 size={21} onClick={reomveCheckHandler}/>
      </div>
    )
  );
};

export default BottomMenu;
