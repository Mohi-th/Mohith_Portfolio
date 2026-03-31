import text from '../assets/text.png'
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from 'react-icons/io5';
import useScrollReveal from '../hooks/useScrollReveal';

function Specializations() {
  const { ref, isVisible } = useScrollReveal();

  const skills = [
    { icon: <IoLogoJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <FaGithub />, name: "GitHub", color: "var(--text-primary)" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  ];

  return (
    <section ref={ref} className='px-6 sm:px-12 md:px-20 lg:px-40 py-12 sm:py-16 md:py-20 w-full relative' style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
        <div className='text-2xl sm:text-3xl font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>Specializations</div>
        <p className='text-sm sm:text-[15px] mb-8 sm:mb-10' style={{ color: 'var(--text-muted)' }}>Technologies I'm familiar with</p>
      </div>
      <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl stagger-children ${isVisible ? 'visible' : ''}`}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-2'
          >
            <div
              className='w-20 h-20 sm:w-24 sm:h-24 rounded-md flex items-center justify-center text-5xl sm:text-[82px] skill-icon-hover'
              style={{
                backgroundColor: 'var(--bg-skill)',
                color: skill.color,
                border: '1px solid var(--border-color)',
              }}
            >
              {skill.icon}
            </div>
            <span className='text-xs text-center' style={{ color: 'var(--text-muted)' }}>{skill.name}</span>
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