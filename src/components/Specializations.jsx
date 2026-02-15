import React from 'react'
import technology from '../assets/js-brands 1.png'
import text from '../assets/text.png'

function Specializations() {
  return (
    <section className='px-40 py-20 w-full relative'>
      <div className='text-3xl font-semibold '>Specializations</div>
      <p className='text-[15px]'>Technologies I'm familiar with </p>
      <figure className='flex gap-6 max-w-4xl flex-wrap'>
        <img  src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
        <img src={technology} alt="" />
      </figure>
      <figure className='absolute bottom-0 right-50'>
        <img src={text} alt="" />
      </figure>
    </section>
  )
}

export default Specializations
