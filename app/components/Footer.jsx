import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-black pb-[112px] desktop:pb-[32px] drop-shadow-lg'>
      <div className='container flex flex-col items-center justify-center desktop:items-start relative'>
        <h1 className='uppercase leading-none font-bold tracking-tighter text-[48px] tablet:text-[64px] desktop:text-[94px] max-w-[238px] tablet:max-w-[500px] desktop:max-w-[1000px] mt-[112px] desktop:mt-[24px] drop-shadow-lg'>
          jacob pacheco digital designer
        </h1>
        <div className='flex flex-col items-center justify-center mt-[112px] tablet:flex-row tablet:justify-start '>
          <ul className='flex flex-col items-center justify-between text-[#ffffff50] space-y-[48px] tablet:space-y-0 tablet:flex-row tablet:space-x-[38px]'>
            <li>
              <a href='#' className='footer_links '>
                Dribble
              </a>
            </li>
            <li>
              <a href='#' className='footer_links '>
                Upwork
              </a>
            </li>
            <li>
              <a href='#' className='footer_links '>
                Github
              </a>
            </li>
            <li>
              <a href='#' className='footer_links '>
                Linkedin
              </a>
            </li>
          </ul>

          <a
            href='#'
            className='flex footer_links mt-[112px] tablet:mt-0 tablet:pl-[38px] desktop:pl-[148px] '
          >
            back to top
            <Image
              className='pl-[5px] '
              src='icons/uparrow.svg'
              height={16}
              width={16}
              alt='back to top'
            />
          </a>
          <a
            href='top'
            className='footer_links text-[#ffffff50] hidden desktop:block absolute right-0'
          >
            jacobpach.1440@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
