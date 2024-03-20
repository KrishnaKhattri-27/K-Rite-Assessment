import React from "react";
import TeamData from "./data/TeamsData";
import { CgAddR } from "react-icons/cg";

const Teams = () => {
  return (
    <div className="border-[1px] border-[#c2c3c6] bg-white w-full rounded-2xl pt-2 shadow-lg">
      {TeamData?.map((e) => (
        <div
          key={TeamData.indexOf(e)}
          className="flex justify-between items-center py-2 mx-2 rounded-xl cursor-pointer px-2 hover:bg-[#d3d3d4]"
        >
          <div className="flex items-center gap-x-2">
            {e.logo}
            <h1 className="text-base tracking-tight font-menagrotesk-semi">
              {e.name}
            </h1>
          </div>
          <div className="border-[1px] border-[#74777f] px-2 rounded-xl font-menagrotesk text-sm text-black">
            {e.shortcut}
          </div>
        </div>
      ))}
      <div className="flex gap-x-2 items-center py-2 cursor-pointer px-2 mx-2 border-t-[1px] border-[#c2c3c6]  text-[#a4a4a7]">
        <CgAddR size={21}/>
        <h1 className="text-base tracking-tight font-menagrotesk-semi">
          Create a team
        </h1>
      </div>
    </div>
  );
};

export default Teams;
