import React from 'react'
import { TiMessages } from "react-icons/ti";
import { IoSettings } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b-[1px] border-[#a4a4a7] px-4 py-3">
    <h1 className=" tracking-tighter text-lg font-menagrotesk-semi">
      Products
    </h1>
    <div className="flex items-center gap-x-4">
      <div class="w-[250px]">
        {/* <label 
          for="default-search"
          class=" text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label> */}
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            {/* <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg> */}
            <FiSearch size={21}/>

          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-2.5 pl-9 pt-3 text-base text-[#a4a4a7] border border-[#a4a4a7] rounded-lg bg-white font-menagrotesk-semi"
            placeholder="Search for.."
            required
          />

        </div>
      </div>
      <div className="p-2 bg-white rounded-xl  cursor-pointer">
      <TiMessages  size={21}/>
      </div>
      <div className="p-2 bg-white rounded-xl cursor-pointer">
      <IoSettings  size={21}/>


      </div>
    </div>
  </nav>
  )
}

export default Navbar
