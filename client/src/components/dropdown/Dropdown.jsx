import React, { useState } from "react";

const Dropdown = ({ name, options }) => {
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
        className="text-black bg-white hover:bg-[#d3d3d4] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center font-menagrotesk-semi  border-[1px] border-[#d3d3d4] shadow"
        type="button"
      >
        {/* Label for the respective dropdown */}
        {name}

         {/* Dropdown icon */}
        <svg
          className="w-2.5 h-2.5 ml-2"
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
          className="z-10 absolute top-[108%] bg-white divide-y divide-gray-100 rounded-lg shadow min-w-full dark:bg-gray-700"
        >
          <ul
            className="p-2 text-sm text-black bg-white rounded-lg"
            aria-labelledby={name + "dropdownDefaultButton"}
          >
            {/* Maping options */}
            {options?.map((e, index) => (
              <li key={index}>
                <span
                  className="block px-4 py-2 hover:bg-[#d3d3d4] cursor-pointer  rounded-lg font-menagrotesk"
                  onClick={()=>setIsOpen(false)}
                >
                  {e}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
