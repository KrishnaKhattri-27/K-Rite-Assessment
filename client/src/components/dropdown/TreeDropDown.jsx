import React, { useState } from "react";
import "./style.css";
import { MdOutlineFolder } from "react-icons/md";
import { CgAddR } from "react-icons/cg";

const TreeDropDown = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);

//   Toggling the dropdown 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative">
        {/* Dropdown button */}
      <button
        id={name + "dropdownDefaultButton"}
        onClick={toggleDropdown}
        className={`text-black  hover:bg-[#d3d3d4] font-medium rounded-lg text-base px-3 py-2 text-center flex  justify-between items-center font-menagrotesk-semi w-full  ${
          isOpen ? "bg-[#d3d3d4]" : "bg-white"
        }  `}
        type="button"
      >

        {/* Label for the respective dropdown */}
        <div className="flex gap-x-1 items-center">
          <MdOutlineFolder size={21} />
          {name}
        </div>

        {/* Dropdown icon */}
        <svg
          className={`w-2.5 h-2.5 ml-2 ${isOpen ? " rotate-180" : "rotate-0"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>


        {/* Condionally rendering, if the the dropdown is opened or closed */}
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 w-[80%] border-l-[1px] border-[#d3d3d4] ml-3"
        >
          <ul
            className="pt-2 px-2 text-sm text-black"
            aria-labelledby={name + "dropdownDefaultButton"}
          >
            {/* Maping all the options of dropdown */}
            {options?.map((e, index) => (
              <li key={index}>
                <span
                  className="block px-4 py-2 text-base option rounded-lg font-menagrotesk-semi cursor-pointer hover:bg-[#d3d3d4]"
                  onClick={() => setIsOpen(false)}
                >
                  {e}
                </span>
              </li>
            ))}

            {/* Add new sub present at last in every dropdowm */}
            <div className="flex gap-x-1    items-center  cursor-pointer px-2 py-2 text-[#a4a4a7] option  pl-4">
              <CgAddR size={21} />
              <h1 className="text-base tracking-tight font-menagrotesk-semi">
                Add new sub
              </h1>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TreeDropDown;
