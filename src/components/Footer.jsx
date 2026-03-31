// Footer.jsx
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import arrow from '../assets/arrow.png'
import useScrollReveal from '../hooks/useScrollReveal';

/* Reusable Link Component */
function ContactLink({ href, icon: Icon, text, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className='flex items-center justify-center gap-3'
    >
      <Icon size={20} style={{ color: 'var(--icon-color)' }} />
      <span
        className='text-sm md:text-base hover:underline transition-all'
        style={{ color: 'var(--text-secondary)' }}
      >
        {text}
      </span>
    </a>
  )
}

function Footer() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    {
      href: "mailto:mohithmohith880@gmail.com",
      icon: FaEnvelope,
      text: "mohithmohith880@gmail.com",
      external: false
    },
    {
      href: "https://github.com/Mohi-th",
      icon: FaGithub,
      text: "github.com/Mohi-th",
      external: true
    },
    {
      href: "https://www.linkedin.com/in/mohith-b-673729273/",
      icon: FaLinkedin,
      text: "www.linkedin.com/in/mohith-b",
      external: true
    }
  ];

  return (
    <footer
      ref={ref}
      className='w-full py-12 md:py-16 relative'
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className={`px-8 md:px-16 lg:px-40 max-w-7xl mx-auto flex flex-col items-center gap-6 scroll-reveal ${isVisible ? 'visible' : ''}`}>

        {/* Contact Links */}
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

        {/* Scroll To Top — original arrow.png style */}
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
