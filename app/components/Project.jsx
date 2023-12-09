'use client'

import React, { useState, useEffect } from 'react'

const Project = (props) => {
  // window state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='w-full'>
      {/* proj image */}
      <div className='w-full h-[450px] tablet:h-[574px] desktop:[607px] rounded-[18px] bg-[#111]'></div>
      {/* description */}
      <div className='text-center tablet:text-left mt-[32px] tablet:mt-[40px] tablet:pl-[40px] flex flex-col items-center justify-center tablet:items-start medium:flex-row medium:justify-between'>
        <h2 className='title_small'>{props.title}</h2>
        {/* small group */}
        <div className='flex flex-col items-center justify-center  tablet:items-start'>
          <h3 className='text-[12px] desktop:font-medium desktop:text-[16px] mt-[8px] drop-shadow-lg'>
            {props.heading}
          </h3>

          {windowWidth > 768 && (
            <p className='body max-w-[350px] tablet:max-w-[425px] mt-[32px]'>
              {props.body}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default Project
