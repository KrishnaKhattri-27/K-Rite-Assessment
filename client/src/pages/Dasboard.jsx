import React, { useState } from "react";
import SideBar from '../components/sideBar/SideBar'
import MainSection from '../components/mainSection/MainSection'
import BottomMenu from "../components/BottomMenu/BottomMenu";

const Dasboard = () => {
    const [counter, setCounter] = useState(0);

  const checkBoxHandler = (e) => {
    if (e.target.checked) setCounter(counter + 1);
    else setCounter(counter - 1);
  };
  return (
    <div className='relative flex gap-x-4 p-5 w-screen h-screen'>
      <SideBar/>
      <MainSection checkBoxHandler={checkBoxHandler} counter={counter}/>
      <BottomMenu counter={counter}/>
    </div>
  ) 
}

export default Dasboard
