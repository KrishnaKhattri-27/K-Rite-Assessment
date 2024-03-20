import React from "react";
import { FaPlus } from "react-icons/fa6";

const TableContent = ({ checkBoxHandler, Data }) => {
  const backgroundSelector = (f) => {
    let temp = {
      backgroundColor: "",
      color: "",
      borderColor: "",
      whiteSpace: "nowrap",
    };
    switch (f) {
      case "E-commerce":
        temp.backgroundColor = "#ffa5001c";
        temp.color = "orange";
        temp.borderColor = "orange";
        break;

      case "SaaS":
        temp.backgroundColor = "#0080001c";
        temp.color = "green";
        temp.borderColor = "green";
        break;

      case "B2B":
        temp.backgroundColor = "#0000ff1c";
        temp.color = "blue";
        temp.borderColor = "blue";
        break;

      case "Automation":
        temp.backgroundColor = "#8000801c";
        temp.color = "purple";
        temp.borderColor = "purple";
        break;

      default:
        temp.backgroundColor = "#0000001c";
        temp.color = "black";
        temp.borderColor = "black";
        break;
    }
    return temp;
  };

  const backgroundSelector1 = (f) => {
    let temp = {
      backgroundColor: "",
      color: "",
      borderColor: "",
      whiteSpace: "nowrap",
    };
    switch (f) {
      case "No contact":
        temp.backgroundColor = "#ff00001c";
        temp.color = "red";
        temp.borderColor = "red";
        break;

      case "Tomorrow":
        temp.backgroundColor = "#0000ff1c";
        temp.color = "blue";
        temp.borderColor = "blue";
        break;

      case "Next month":
        temp.backgroundColor = "#0000001c";
        temp.color = "black";
        temp.borderColor = "black";
        break;

      default:
        temp.backgroundColor = "#0080001c";
        temp.color = "green";
        temp.borderColor = "green";
        break;
    }
    return temp;
  };
  return (
    <tbody>
      {Data?.map((e) => (
        <tr key={Data.indexOf(e)} className="">
          <td className="p-2 font-menagrotesk-semi">
            <span className="flex items-center gap-x-2">
              {" "}
              <input
                id="red-checkbox"
                type="checkbox"
                value=""
                class="w-4 m-1 h-4"
                onChange={(e) => checkBoxHandler(e)}
              />
              <div className="flex items-center gap-x-1">
                <img className="w-6 h-6" src={e.logo} alt="" />
                <h1>{e.brand}</h1>
              </div>
            </span>
          </td>
          <td className="p-2 font-menagrotesk-semi">
            <span>{e.description}</span>
          </td>
          <td className="p-2 font-menagrotesk">
            <span>{e.members}</span>
          </td>
          <td className="p-2 font-menagrotesk">
            <div
              className="flex gap-x-2 overflow-x-hidden"
              style={{ textOverflow: "ellipsis" }}
            >
              {" "}
              {e.categories.map((f) => (
                <div
                  className={` text-sm p-1 font-menagrotesk-semi rounded-xl border-2`}
                  style={{ ...backgroundSelector(f) }}
                >
                  {f}
                </div>
              ))}
            </div>
          </td>
          <td
            className="p-2 font-menagrotesk flex gap-x-2 overflow-x-hidden"
            style={{ textOverflow: "ellipsis" }}
          >
            {e.tags.map((f) => (
              <div className="text-xs p-1 font-menagrotesk rounded-lg border-2 bg-[#d3d3d4]">
                {f}
              </div>
            ))}
          </td>
          <td className="p-2 font-menagrotesk">
            <div
              className="text-sm p-1 font-menagrotesk-semi rounded-xl border-2 max-w-fit "
              style={{ ...backgroundSelector1(e.meeting) }}
            >
              {e.meeting}
            </div>
          </td>
        </tr>
      ))}
      <tr className="text-[#a4a4a7]">
        <td className="p-2 font-menagrotesk-semi text-base text-end">
          <span>{Data?.length} count</span>
        </td>
        <td className="p-2 text-vase font-menagrotesk-semi ">
          <span className="flex gap-x-1 justify-end items-center">
            <FaPlus />
            Add Calculation
          </span>
        </td>
        <td className="p-2 text-base font-menagrotesk-semi ">
          <span className="flex gap-x-1 justify-end  items-center">
            <FaPlus />
            Add Calculation
          </span>
        </td>
        <td className="p-2 text-base font-menagrotesk-semi ">
          <span className="flex gap-x-1 justify-end  items-center">
            <FaPlus />
            Add Calculation
          </span>
        </td>
        <td className="p-2 text-base font-menagrotesk-semi ">
          <span className="flex gap-x-1 justify-end  items-center">
            <FaPlus />
            Add Calculation
          </span>
        </td>
        {/* <td className="p-2 text-sm font-menagrotesk ">
            <span className="flex gap-x-1 justify-end"><FaPlus/>Add Calculation</span>
          </td> */}
      </tr>
    </tbody>
  );
};

export default TableContent;
