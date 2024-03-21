import { useState, useCallback, useEffect, useRef } from "react";
import "./Table.css";
import TableContent from "./TableContent";
import { FaPlus } from "react-icons/fa6";
import TableData from "./data/TableData";

const createHeaders = (headers) => {

  return headers.map((item) => ({
    text: item,
    ref: useRef(),
  }));
};

const Table1 = ({ headers, minCellWidth,checkBoxHandler,Data }) => {

  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e) => {
      const gridColumns = columns.map((col, i) => {
        if (i === activeIndex) {
          const width = e.clientX - col.ref.current.offsetLeft;

          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.ref.current.offsetWidth}px`;
      });

      tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
        " "
      )}`;
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <div className=" w-full">
      <div className="table-wrapper w-full">
        <table className="resizeable-table w-full" ref={tableElement}>
          <thead>
            <tr>
              {columns.map((e, i) => (
                <th ref={e.ref} key={e.text} className="p-2 text-[#a4a4a7]">
                  {columns.indexOf(e) === 0 ? (
                    <div className="flex justify-between items-center">
                      {" "}
                      <span className="flex items-center gap-x-2">
                        {" "}
                        <input
                          id="red-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4  m-1"
                        />
                        Brand
                      </span>
                      <FaPlus />
                    </div>
                  ) : (
                    <span>{e.text}</span>
                  )}

                  <div
                    style={{ height: tableHeight }}
                    onMouseDown={() => mouseDown(i)}
                    className={`resize-handle ${
                      activeIndex === i ? "active" : "idle"
                    }`}
                  />
                </th>
              ))}
            </tr>
          </thead>
          {<TableContent Data={Data} checkBoxHandler={checkBoxHandler}/>}
        </table>
      </div>
    </div>
  );
};

export default Table1;
