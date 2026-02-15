// Footer.jsx
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import arrow from '../assets/arrow.png'

/* 🔹 Reusable Link Component */
function ContactLink({ href, icon: Icon, text, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className='flex items-center justify-center gap-3  '
    >
      <Icon className="text-black" size={20} />
      <span className='text-sm text-black md:text-base text-[10px] hover:underline transition-all'>
        {text}
      </span>
    </a>
  )
}

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 🔹 Links Data Array
  const links = [
    {
      href: "mailto:natanaeloliveiramrtinsbr@gmail.com",
      icon: FaEnvelope,
      text: "natanaeloliveiramrtinsbr@gmail.com",
      external: false
    },
    {
      href: "https://github.com/natanaeldeveloper",
      icon: FaGithub,
      text: "github.com/natanaeldeveloper",
      external: true
    },
    {
      href: "https://www.linkedin.com/in/natanael-oliveira-martins",
      icon: FaLinkedin,
      text: "www.linkedin.com/in/natanael-oliveira-martins",
      external: true
    }
  ];

  return (
    <footer className='w-full py-12 md:py-16 bg-white border-t border-gray-200 relative'>
      <div className='px-8 md:px-16 lg:px-40 max-w-7xl mx-auto flex flex-col items-center gap-6'>

        {/* 🔹 Contact Links using map */}
        <div className='flex flex-col gap-4 items-start text-center'>
          {links.map((link, index) => (
            <ContactLink
              key={index}
              href={link.href}
              icon={link.icon}
              text={link.text}
              external={link.external}
            />
          ))}
        </div>

        {/* 🔹 Scroll To Top */}
        <figure
          onClick={scrollToTop}
          className='cursor-pointer absolute right-10 bottom-10 mt-6 hover:scale-110 transition-transform duration-300'
          aria-label="Scroll to top"
        >
          <img 
            src={arrow} 
            alt="Scroll to top" 
            className='w-8 h-8'
          />
        </figure>

      </div>
    </footer>
  )
}

export default Footer
