import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";

const SidebarFooter = () => {
  return (
    <div>
      <button
        id={"dropdownDefaultButton"}
        className={`text-black  font-medium rounded-lg text-base px-3 py-2 text-center flex  justify-between items-center font-menagrotesk-semi w-full   `}
        type="button"
      >
        <div className="flex gap-x-2 items-center">
          <RiContactsFill size={21} />
          Invite teammates
        </div>
      </button>
      
      <button
        id={"dropdownDefaultButton"}
        // onClick={toggleDropdown}
        className={`text-black   font-medium rounded-lg text-base px-3  py-2 text-center flex  justify-between items-center font-menagrotesk-semi w-full   `}
        type="button"
      >
        <div className="flex gap-x-2 items-center">
          <IoIosHelpCircleOutline size={21} />
          Help and first steps{" "}
        </div>
        <div className="rounded-lg ">
          <span className="w-5 h-5 p-1 text-black bg-[#d3d3d4] rounded-md text-xs">
            0/6
          </span>
        </div>
      </button>

      <button
        id={"dropdownDefaultButton"}
        // onClick={toggleDropdown}
        className={`text-black  bg-[#d3d3d4] font-medium rounded-lg text-sm pl-3 pr-1 py-1 text-center flex  justify-between items-center font-menagrotesk-semi w-full   `}
        type="button"
      >
        <div className="flex gap-x-2 items-center">
          <span className="w-5 h-5 bg-white rounded-md">7</span>
          days left on trial{" "}
        </div>
        <div className="bg-black p-2 rounded-lg">
          <h1 className="text-white font-menagrotesk">Add biling</h1>
        </div>
      </button>
    </div>
  );
};

export default SidebarFooter;
