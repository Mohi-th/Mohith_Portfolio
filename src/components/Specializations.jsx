import React from 'react'
import technology from '../assets/js-brands 1.png'
import text from '../assets/text.png'

function Specializations() {
  return (
    <section className='px-6 sm:px-12 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20 w-full relative'>
      <div className='text-2xl sm:text-3xl font-semibold mb-2'>Specializations</div>
      <p className='text-sm sm:text-[15px] text-gray-600 mb-8 sm:mb-10'>Technologies I'm familiar with</p>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl'>
        {[...Array(9)].map((_, index) => (
          <div 
            key={index} 
            className='bg-white  sm:px-2 px-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center '
          >
            <img 
              src={technology} 
              alt={`Technology ${index + 1}`} 
              className='w-full h-full object-contain'
            />
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