import React from 'react'
import ellipse from '../assets/Ellipse2.jpg'


function Navbar() {

  const navItems = ["about me", "specializations", 'projects', 'contacts']


  return (
    <div className='w-full px-16 py-10 flex justify-between items-center '>
      <figure className='h-[51px] w-[51px]'>
        <img className="h-full w-full" src={ellipse} alt="ellipse" />
      </figure>
      <div className='gap-50 hidden lg:flex'>
        <ul className='flex text-[15px] gap-12'>
          {
            navItems?.map((navItem) => <li className='hover:underline'>
              {navItem}
            </li>)
          }
        </ul>
        <div >
          english
        </div>
      </div>
    </div>
  )
}

export default Navbar
