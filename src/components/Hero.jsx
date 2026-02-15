import React from 'react'
import profile from '../assets/profile.jpg'
import sideItem from '../assets/side-element.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className='flex   justify-between px-40  items-center'>
      <div className='flex gap-8 items-center'>
        <figure className='h-[115px] w-[115px] '>
          <img className='rounded-full' src={profile} alt="profile" />
        </figure>
        <div className='mt-10 '>
          <p className='text-[#666666] text-[20px]' >Hi, my name is</p>
          <p className='font-semibold text-[25px] pb-1'>Mohith B</p>
          <div className='flex gap-3 border-t border-[#E5E5E5] pt-2 pr-50'>
            <FaGithub size={25}/>
            <FaLinkedin size={25} />
          </div>
        </div>
      </div>
      <figure>
          <img src={sideItem} alt="side item" />
      </figure>
    </section>
  )
}

export default Hero

