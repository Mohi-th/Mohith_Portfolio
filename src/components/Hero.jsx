import React from 'react'
import profile from '../assets/profile.jpg'
import sideItem from '../assets/side-element.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import flag from "../assets/india.png"

function Hero() {
  return (
    <section className='flex flex-col md:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-40 items-center py-8 md:py-0'>
      <div className='flex gap-4 sm:gap-6 md:gap-8 items-center'>
        <figure className='relative h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[115px] md:w-[115px]'>
          <img className='rounded-full' src={profile} alt="profile" />
          <figure className='p-0.5 border rounded-full border-gray-300 h-[23px] w-[23px] absolute right-0 bottom-2'>
          <img className='h-full w-full' src={flag}/>
          </figure>
        </figure>
        <div className='mt-4 sm:mt-6 md:mt-10'>
          <p className='text-[#666666] text-[16px] sm:text-[18px] md:text-[20px]'>Hi, my name is</p>
          <p className='font-semibold text-[20px] sm:text-[22px] md:text-[25px] pb-1'>Mohith B</p>
          <div className='flex gap-3 border-t border-[#E5E5E5] pt-2'>
            <FaGithub size={20} className='sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] ' onClick={() => window.location.href = "https://github.com/Mohi-th"}/>
            <FaLinkedin size={20} className='sm:w-6 sm:h-6 md:w-[25px] md:h-[25px]' onClick={() => window.location.href = "https://www.linkedin.com/in/mohith-b-673729273/"}/>
          </div>
        </div>
      </div>
      <figure className='mt-8 md:mt-0 w-[200px] sm:w-[250px] md:w-auto'>
          <img src={sideItem} alt="side item" className='w-full h-auto'/>
      </figure>
    </section>
  )
}

export default Hero