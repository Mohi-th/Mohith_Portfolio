import profile from '../assets/profile.jpg'
import sideItem from '../assets/side-element.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import flag from "../assets/india.png"

function Hero() {
  return (
    <section className='flex flex-col md:flex-row justify-between px-6 sm:px-12 md:px-20 lg:px-40 items-center py-8 md:py-0' style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className='flex gap-4 sm:gap-6 md:gap-8 items-center animate-slide-in-left'>
        <figure className='relative h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[115px] md:w-[115px]'>
          <img className='rounded-full object-cover w-full h-full object-top' src={profile} alt="profile" />
          <figure className='p-0.5 border rounded-full border-gray-300 h-[23px] w-[23px] absolute right-0 bottom-2' style={{ backgroundColor: 'var(--bg-card)' }}>
            <img className='h-full w-full' src={flag} alt="India flag" />
          </figure>
        </figure>
        <div className='mt-4 sm:mt-6 md:mt-10'>
          <p className='text-[16px] sm:text-[18px] md:text-[20px]' style={{ color: 'var(--text-muted)' }}>Hi, my name is</p>
          <p className='font-semibold text-[20px] sm:text-[22px] md:text-[25px] pb-1 gradient-text'>Mohith B</p>
          <div className='flex gap-3 pt-2' style={{ borderTop: `1px solid var(--border-color)` }}>
            <a href="https://github.com/Mohi-th" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} className='sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] transition-all duration-300 hover:scale-125 cursor-pointer' style={{ color: 'var(--icon-color)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--icon-hover)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--icon-color)'} />
            </a>
            <a href="https://www.linkedin.com/in/mohith-b-673729273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} className='sm:w-6 sm:h-6 md:w-[25px] md:h-[25px] transition-all duration-300 hover:scale-125 cursor-pointer' style={{ color: 'var(--icon-color)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--icon-hover)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--icon-color)'} />
            </a>
          </div>
        </div>
      </div>
      <figure className='mt-8 md:mt-0 w-[200px] sm:w-[250px] md:w-auto animate-float animate-slide-in-right'>
        <img src={sideItem} alt="decorative element" className='w-full h-auto' />
      </figure>
    </section>
  )
}

export default Hero