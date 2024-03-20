import React from "react";
import { FaPlus } from "react-icons/fa6";

const Table = () => {
  return (
    <table className="w-full">
      <tr className="text-[#a4a4a7] bg-white text-base tracking-tight font-menagrotesk-semi">
        <th className="border-[1px] border-[#a4a4a7] text-start flex justify-between items-center px-2 py-2">
          <span className="flex items-center gap-x-2">
            {" "}
            <input  id="red-checkbox" type="checkbox" value="" class="w-4 h-4"/>
            Brand
          </span>
          <FaPlus />
        </th>
        <th className="border-[1px] border-[#a4a4a7] text-start px-2 py-2">
          Description
        </th>
        <th className="border-[1px] border-[#a4a4a7] text-start px-2 py-2">
          Members
        </th>
        <th className="border-[1px] border-[#a4a4a7] text-start px-2 py-2">
          Categories
        </th>
        <th className="border-[1px] border-[#a4a4a7] text-start px-2 py-2">
          Tags
        </th>
        <th className="border-[1px] border-[#a4a4a7] text-start px-2 py-2">
          Next Meeting
        </th>
      </tr>
    </table>
  );
};

export default Table;
