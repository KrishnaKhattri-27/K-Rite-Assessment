import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Filters from "../Filters/Filters";
import Table1 from "../Table/Table1";
import TableData from "../Table/data/TableData";

const MainSection = ({ checkBoxHandler, counter }) => {
  const [Data, setData] = useState();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [order, setOrder] = useState("ascending");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    setQuery(searchTerm);
    const results = TableData?.filter((item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const sortHandler = () => {
    const temp = Data.sort((a, b) => {
      if (order === "ascending") return a.brand > b.brand ? 1 : -1;
      else return a.brand < b.brand ? 1 : -1;
    });
    setData(temp);
    setOrder(order==="ascending"?"descending":"ascending")
  };

  const reomveCheckHandler = () => {
    // setCounter(0);
  };

  useEffect(() => {
    setData(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setData(TableData);
  }, []);

  const tableHeaders = [
    "Items",
    "Description",
    "Members",
    "Caategories",
    "Tags",
    "Next Meeting",
  ];
  return (
    <main className=" rounded-2xl shadow-xl border-black w-[75%] h-full  bg-white overflow-y-scroll">
      <Navbar handleSearch={handleSearch} query={query} />
      <Filters sortHandler={sortHandler}/>
      <Table1
        headers={tableHeaders}
        minCellWidth={120}
        checkBoxHandler={checkBoxHandler}
        Data={Data}
      />
    </main>
  );
};

export default MainSection;
