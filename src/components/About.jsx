import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-40 mt-6 sm:mt-8 md:mt-10 py-12 sm:py-16 md:py-20 scroll-reveal ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
        About Me
      </h2>
      <p className="max-w-3xl text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        I am a MERN Stack Developer who builds full-stack web applications using MongoDB, Express.js, React, and Node.js. I develop responsive user interfaces, create secure backend APIs, and manage databases efficiently. I focus on writing clean and maintainable code while ensuring smooth performance and a good user experience. I enjoy building scalable applications and continuously learning new technologies to improve my development skills.
      </p>
    </section>
  );
}