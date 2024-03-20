import React from "react";
import { FaPlus } from "react-icons/fa6";
import TreeDropDown from "../dropdown/TreeDropDown";

const Folders = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-2   font-menagrotesk-semi text-[#a4a4a7] mt-2">
        <h1>Folders</h1>
        <FaPlus />
      </div>
      <TreeDropDown
        name={"Products"}
        options={["Roadmap", "Feedback", "Performance", "Team", "Analytics"]}
      />
      <TreeDropDown
        name={"Sales"}
        options={["Roadmap", "Feedback", "Performance"]}
      />
      <TreeDropDown
        name={"Design"}
        options={["Roadmap", "Feedback", "Performance"]}
      />
      <TreeDropDown
        name={"Office"}
        options={["Roadmap", "Feedback", "Performance"]}
      />
      <TreeDropDown
        name={"Legal"}
        options={["Roadmap", "Feedback", "Performance"]}
      />
    </div>
  );
};

export default Folders;
