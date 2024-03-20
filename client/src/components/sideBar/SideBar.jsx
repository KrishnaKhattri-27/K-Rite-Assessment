import React from "react";
import face from "../../assets/img2.jpg";
import Teams from "./Teams";
import hub from "../../assets/hub.webp";
import TreeDropDown from "../dropdown/TreeDropDown";
import Folders from "./Folders";
import SidebarFooter from "./SidebarFooter";

const SideBar = () => {
  return (
    <div className="rounded-2xl bg-white shadow-xl w-full lg:w-[25%] h-full py-4 px-2 overflow-y-auto flex flex-col gap-y-6 justify-between sidebar">
      <div>
        <div className="flex justify-between items-center mb-2 px-4">
          <div className="flex gap-x-2 items-center">
            <img src={hub} className="w-8 h-8 rounded-lg" alt="" />
            <div className="mt-1">
              <h1 className="text-sm font-menagrotesk-light">INC</h1>
              <h1 className="mt-[-8px] tracking-tighter text-lg font-menagrotesk-semi">
                InnovateHub
              </h1>
            </div>
          </div>
          <img src={face} alt="" className="rounded-full w-8 h-8" />
        </div>
        <Teams />
        <Folders />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default SideBar;
