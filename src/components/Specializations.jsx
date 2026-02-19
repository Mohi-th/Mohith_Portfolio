import React from 'react'
import text from '../assets/text.png'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from 'react-icons/io5';

function Specializations() {

  const skills = [
    { icon: <IoLogoJavascript />, name: "JavaScript", bg: "#a8a8a8" },
    { icon: <FaCss3Alt />, name: "CSS", bg: "#b0b0b0" },
    { icon: <FaHtml5 />, name: "HTML", bg: "#b8b8b8" },
    { icon: <FaGitAlt />, name: "Git", bg: "#909090" },
    { icon: <FaGithub />, name: "GitHub", bg: "#a8a8a8" },
    { icon: <SiMongodb />, name: "MongoDB", bg: "#b0b0b0" },
    { icon: <FaNodeJs />, name: "Node.js", bg: "#b8b8b8" },
    { icon: <FaReact />, name: "React", bg: "#909090" },
    { icon: <SiTailwindcss />, name: "Tailwind", bg: "#a8a8a8" },
    { icon: <SiFirebase />, name: "Firebase", bg: "#b0b0b0" },
  ];

  return (
    <section className='px-6 sm:px-12 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20 w-full relative'>
      <div className='text-2xl sm:text-3xl font-semibold mb-2'>Specializations</div>
      <p className='text-sm sm:text-[15px] text-gray-600 mb-8 sm:mb-10'>Technologies I'm familiar with</p>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-2'
          >
            <div
              className='w-20 h-20 sm:w-24 sm:h-24 rounded-md flex items-center justify-center text-white text-5xl sm:text-[82px]'
              style={{ backgroundColor: skill.bg, color: skill.color || "white" }}
            >
              {skill.icon}
            </div>
            <span className='text-xs text-gray-600 text-center'>{skill.name}</span>
          </div>
        ))}
      </div>
      <figure className='absolute bottom-0 right-4 sm:right-12 md:right-20 lg:right-50 opacity-50 md:opacity-100'>
        <img
          src={text}
          alt=""
          className='w-32 sm:w-40 md:w-auto'
        />
      </figure>
    </section>
  )
}

export default Specializations