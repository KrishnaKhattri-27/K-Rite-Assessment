import React from 'react'
import SideBar from '../components/sideBar/SideBar'
import MainSection from '../components/mainSection/MainSection'

const Dasboard = () => {
  return (
    <div className='flex gap-x-4 p-5 w-screen h-screen'>
      <SideBar/>
      <MainSection/>
    </div>
  ) 
}

export default Dasboard
