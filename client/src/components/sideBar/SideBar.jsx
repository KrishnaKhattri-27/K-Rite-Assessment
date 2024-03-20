import React from 'react'
import face from "../../assets/img2.jpg"
import Teams from './Teams'

const SideBar = () => {
  return (
    <div className='rounded-2xl border-[1px] border-black w-[25%] h-full py-4 px-2 bg-[#e9e8e8]'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex gap-x-4 items-center'>
            <img src="" alt="" />
            <div className=''>
                <h1 className='text-sm font-menagrotesk-light'>INC</h1>
                <h1 className='mt-[-8px] tracking-tighter text-lg font-menagrotesk-semi'>InnovateHub</h1>
            </div>
        </div>
             <img src={face} alt="" className='rounded-full w-7 h-7' />
      </div>
      <Teams/>
    </div>
  )
}

export default SideBar
