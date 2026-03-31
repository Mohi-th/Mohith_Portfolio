import { useState } from 'react'
import ellipse from '../assets/Ellipse2.jpg'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function Navbar({ scrollToSection }) {

  const navItems = ["about me", "specializations", 'projects', 'contacts'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='glass w-full px-6 md:px-12 lg:px-16 py-6 md:py-8 lg:py-10 flex justify-between items-center relative z-50 sticky top-0'>
      {/* Logo */}
      <figure className='h-[40px] w-[40px] md:h-[45px] md:w-[45px] lg:h-[51px] lg:w-[51px] flex-shrink-0 animate-fade-in-scale'>
        <img className="h-full w-full rounded-full object-cover" src={ellipse} alt="logo" />
      </figure>

      {/* Desktop Menu */}
      <div className='gap-50 hidden lg:flex items-center'>
        <ul className='flex text-[15px] gap-12'>
          {
            navItems?.map((navItem, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(index)}
                className='nav-link cursor-pointer capitalize font-medium text-sm tracking-wide'
              >
                {navItem}
              </li>
            ))
          }
        </ul>
      </div>

      <div className='flex items-center gap-3'>
        {/* Theme Toggle */}
        <button
          className='theme-toggle'
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden p-2 rounded-md transition-colors'
          style={{ color: 'var(--text-primary)' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          lg:hidden
          absolute top-full left-0 right-0
          w-full
          shadow-lg
          overflow-hidden
          transition-all duration-300 ease-in-out
          z-50
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: isMenuOpen ? `1px solid var(--border-color)` : 'none',
        }}
      >
        <div className='p-6 space-y-6'>
          <ul className='flex flex-col items-center gap-4'>
            {
              navItems?.map((navItem, index) => (
                <li
                  key={index}
                  className='w-full text-center py-2 rounded-md transition-colors cursor-pointer'
                  onClick={() => {
                    scrollToSection(index);
                    setIsMenuOpen(false);
                  }}
                >
                  <span
                    className='block text-base md:text-lg capitalize font-medium nav-link'
                  >
                    {navItem}
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar