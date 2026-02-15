import React, { useState } from 'react'
import ellipse from '../assets/Ellipse2.jpg'
import { Menu, X } from 'lucide-react'


function Navbar() {

  const navItems = ["about me", "specializations", 'projects', 'contacts'];

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    // border-b shadow-sm
    <nav className='w-full px-6 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 flex justify-between items-center relative  border-gray-300 bg-white '>
      {/* Logo */}
      <figure className='h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] flex-shrink-0'>
        <img className="h-full w-full rounded-full object-cover" src={ellipse} alt="logo" />
      </figure>

      {/* Desktop Menu */}
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

      {/* Mobile Menu Button */}
      <button 
        className='lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden
          absolute top-full left-0 right-0
          w-full
          bg-white
          shadow-lg
          border-t border-gray-200
          overflow-hidden
          transition-all duration-300 ease-in-out
          z-50
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"}
        `}
      >
        <div className='p-6 space-y-6'>
          {/* Mobile Nav Items */}
          <ul className='flex flex-col items-center gap-4'>
            {
              navItems?.map((navItem, index) => (
                <li 
                  key={index} 
                  className='w-full text-center py-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a 
                    href={`#${navItem.replace(' ', '-')}`}
                    className='block text-base md:text-lg capitalize font-medium text-gray-700 hover:text-black'
                  >
                    {navItem}
                  </a>
                </li>
              ))
            }
          </ul>

          {/* Mobile Language Selector */}
          <div className='flex justify-center pt-4 border-t border-gray-200'>
            <button className='px-6 py-2 text-sm md:text-base border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
              English
            </button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar