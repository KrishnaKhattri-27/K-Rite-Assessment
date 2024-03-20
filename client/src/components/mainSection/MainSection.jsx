import React from "react";
import Navbar from "../navbar/Navbar";
import Filters from "../Filters/Filters";
import Table from "../Table/Table";


const MainSection = () => {
  return (
    <main className="rounded-2xl border-[1px] border-black w-[75%] h-full  bg-[#e9e8e8]">
    <Navbar/>
    <Filters/>
    <Table/>
    </main>
  );
};

export default MainSection;
