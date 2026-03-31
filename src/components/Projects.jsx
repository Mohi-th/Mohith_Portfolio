// Projects.jsx
import React, { useState, useRef, useCallback, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EComImg from "../assets/e-com.png"
import ChatAppImg from "../assets/chat.png"
import PlayArenaImg from "../assets/PlayArena.png"
import NetflixImg from "../assets/Netflix.png"
import CryptoTrackerImg from "../assets/Crypto.png"
import WeatherAppImg from "../assets/weather.png"
import TodoAppImg from "../assets/Todo1.png"
import GolfDrawImg from "../assets/golf.png"
import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const projects = [
    {
      title: "GolfDraw",
      description: "A full-stack SaaS platform where users subscribe to participate in monthly prize draws, track golf scores, and contribute a portion of their subscription to selected charities.",
      tags: ["MERN", "Stripe"],
      githubUrl: "https://github.com/Mohi-th/Golf-charity.git",
      liveUrl: "https://golf-charity-steel.vercel.app/",
      image: GolfDrawImg
    },
    {
      title: "ShopCraze",
      description: "A MERN-stack e-commerce application with authentication, cart, payments, and admin management.",
      tags: ["React", "Node", "Cloudinary"],
      githubUrl: "https://github.com/Mohi-th/E-commerce.git",
      liveUrl: "https://e-commerce-1-3rvc.onrender.com",
      image: EComImg
    },
    {
      title: "Chit-Chat",
      description: "A real-time MERN chat application with secure authentication, Socket.io messaging, group chat, and responsive UI.",
      tags: ["React", "Node", "Socket.io"],
      githubUrl: "https://github.com/Mohi-th/MERN_CHAT_APP.git",
      liveUrl: "https://mern-chat-app-44l7.onrender.com/home",
      image: ChatAppImg
    },
    {
      title: "Play Arena",
      description: "An online platform to book birthday parties, video games, and sports activities.",
      tags: ["React"],
      githubUrl: "https://github.com/Mohi-th/PLAY_ARENA.git",
      liveUrl: "https://play-arena-et4d.onrender.com/",
      image: PlayArenaImg
    },
    {
      title: "Crypto Tracker",
      description: "A real-time cryptocurrency price tracking web app built with the MERN stack.",
      tags: ["React", "Shadcn"],
      githubUrl: "https://github.com/Mohi-th/MERN_CRYPTO_TRACKER.git",
      liveUrl: "https://mern-crypto-tracker.onrender.com",
      image: CryptoTrackerImg
    },
    {
      title: "Netflix",
      description: "A responsive Netflix homepage clone built using plain HTML and CSS.",
      tags: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Mohi-th/Netflix.git",
      liveUrl: "https://netflix-3b6x.onrender.com",
      image: NetflixImg
    },
    {
      title: "TODO App",
      description: "A React to-do list application for creating, editing, and managing tasks.",
      tags: ["React"],
      githubUrl: "https://github.com/Mohi-th/TODO_APP_MERN.git",
      liveUrl: "https://todo-app-woyf.onrender.com",
      image: TodoAppImg
    },
    {
      title: "Weather Tracker",
      description: "A weather application that shows current weather and forecast information using HTML, CSS, and JavaScript.",
      tags: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Mohi-th/Weather-App.git",
      liveUrl: "https://weather-app-pjn5.onrender.com",
      image: WeatherAppImg
    },
  ];

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerPage);
  const GAP = 24; // gap in px (gap-6 = 24px)

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));

  // Touch/swipe support
  const touchStart = useRef(null);
  const handleTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback((e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStart.current = null;
  }, [maxIndex]);

  // Calculate translateX based on card widths
  const getTranslateX = () => {
    if (!trackRef.current) return 0;
    const containerWidth = trackRef.current.parentElement?.offsetWidth || 0;
    const cardWidth = (containerWidth - GAP * (itemsPerPage - 1)) / itemsPerPage;
    return currentIndex * (cardWidth + GAP);
  };

  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const update = () => setTranslateX(getTranslateX());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [currentIndex, itemsPerPage]);

  return (
    <section
      ref={sectionRef}
      className='w-full py-12 md:py-16 lg:py-20 mt-6 md:mt-10'
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className={`px-6 sm:px-12 md:px-16 lg:px-40 mx-auto flex flex-col items-center scroll-reveal ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start w-full'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-2' style={{ color: 'var(--text-primary)' }}>Projects</h2>
          <p className='text-sm md:text-base' style={{ color: 'var(--text-muted)' }}>
            here are the projects I developed, prototyped or participated in
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full max-w-6xl'>
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className='absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110'
            style={{
              backgroundColor: 'var(--bg-card)',
              boxShadow: '0 4px 16px var(--shadow-color)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
            }}
            aria-label="Previous projects"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className='absolute -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full p-3 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110'
            style={{
              backgroundColor: 'var(--bg-card)',
              boxShadow: '0 4px 16px var(--shadow-color)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
            }}
            aria-label="Next projects"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Carousel Track */}
          <div
            className='overflow-hidden'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className='flex gap-6 transition-transform duration-500 ease-out'
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='flex-shrink-0'
                  style={{
                    width: `calc((100% - ${GAP * (itemsPerPage - 1)}px) / ${itemsPerPage})`,
                  }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className='flex justify-center gap-2 mt-8'>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className='rounded-full transition-all duration-300'
              style={{
                width: currentIndex === index ? '24px' : '8px',
                height: '8px',
                backgroundColor: currentIndex === index ? 'var(--dot-active)' : 'var(--dot-inactive)',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects