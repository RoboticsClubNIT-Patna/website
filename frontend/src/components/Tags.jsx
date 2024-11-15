import React from 'react'


const Tags = ({tagtext, tagcolor}) => {
  return (
    <>
      <div id="box1" className={`${tagcolor} p-1 pl-3 pr-3 rounded-2xl  font-serif border-black border-2 shadow-[-2px_2px_0px_rgb(156,163,175),-3px_5px_0px_rgb(0,0,0)] hover:translate-y-1 hover:shadow-none transition-transform duration-100`}>
        {tagtext}
      </div>
    </>

  )
}

export default Tags