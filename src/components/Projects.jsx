// Projects.jsx
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EComImg from"../assets/e-com.png"
import ChatAppImg from "../assets/chat.png"
import PlayArenaImg from "../assets/PlayArena.png"
import NetflixImg from "../assets/Netflix.png"
import CryptoTrackerImg from "../assets/Crypto.png"
import WeatherAppImg from "../assets/weather.png"
import TodoAppImg from "../assets/Todo1.png"

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "ShopCraze",
      description: "A MERN-stack  e-commerce application with authentication, cart, payments, and admin management.",
      tags: ["React","Node","cloudinary"],
      githubUrl: "https://github.com/Mohi-th/E-commerce.git",
      liveUrl: "https://e-commerce-1-3rvc.onrender.com",
      image: EComImg
    },
    {
      title: "Chit-Chat",
      description: "A real-time MERN chat application with secure authentication, Socket.io messaging, group chat, and responsive UI",
      tags: ["React", "Node" , "socket.io"],
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
      tags: ["Java script", "HTML" ,"CSS"],
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
      tags: ["Java script", "HTML" ,"CSS"],
      githubUrl: "https://github.com/Mohi-th/Weather-App.git",
      liveUrl: "https://weather-app-pjn5.onrender.com",
      image: WeatherAppImg
    },
  ];

  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1024) return 3;  // Desktop: 3 cards
      if (width >= 768) return 2;   // Tablet: 2 cards
      return 1;                      // Mobile: 1 card
    }
    return 3;
  };

  const [itemsPerPage, setItemsPerPage] = React.useState(getItemsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className='w-full py-12 md:py-16 lg:py-20 mt-6 md:mt-10 bg-[#F4F4F4]'>
      <div className='px-6 sm:px-12 md:px-16 lg:px-40 mx-auto flex flex-col items-center'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start w-full'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Projects</h2>
          <p className='text-sm md:text-base text-gray-600'>
            here are the projects I developed, prototyped or participated in
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full max-w-6xl'>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className='absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Previous projects"
          >
            <FaChevronLeft size={20} className='text-gray-700' />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className='absolute -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Next projects"
          >
            <FaChevronRight size={20} className='text-gray-700' />
          </button>

          {/* Projects Carousel */}
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out gap-4 md:gap-5 lg:gap-6'
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage + (itemsPerPage === 1 ? 0 : itemsPerPage === 2 ? 1.5 : 2))}%)`
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)]'
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
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects