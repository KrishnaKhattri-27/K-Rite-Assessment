import React from "react";
import SideBar from "../sideBar/SideBar";
// 
const Hamburger = ({showmenu,handleClick}) => {
  return (
    <div
      className={`bg-white text-lg w-[70%]  absolute z-[2000] h-screen top-0 transition-all duration-500 pt-10 ${
        showmenu ? "left-0" : "-left-[70%]"
      }`}
    >
     <SideBar/>
    </div>
  );
};

export default Hamburger;
