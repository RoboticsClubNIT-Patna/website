import React from 'react'
import '../App.css'

const Buttons = ({buttonText,scale}) => {
  return (
    <>
      <div className={`rectangle scale-${scale} relative p-4 h-14 w-40 flex justify-center items-center text-xl bg-white rounded-2xl text-black cursor-pointer overflow-hidden hover:text-white`}>
        <div className='absolute z-10 font-bold'>{buttonText}</div>
        <div className='circle absolute h-10 w-10 rounded-full bg-pink-400  opacity-0' ></div>
      </div>
    </>
  )
}

export default Buttons
