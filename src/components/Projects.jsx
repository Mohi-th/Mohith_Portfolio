// Projects.jsx
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    {
      title: "Your project name",
      description: "here are the projects I developed, prototyped or participated in",
      tags: ["Desktop", "JAVA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      image: null
    },
    // Add more projects as needed
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className='w-full py-12 mt-10 md:py-16 lg:py-20 bg-[#F4F4F4]'>
      <div className='px-8 md:px-16 lg:px-40  mx-auto flex flex-col items-center'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-start w-full '>
          <h2 className='text-2xl md:text-3xl font-semibold mb-2'>Projects</h2>
          <p className='text-sm md:text-base text-gray-700'>
            here are the projects I developed, prototyped or participated in
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative max-w-4xl'>
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Previous projects"
          >
            <FaChevronLeft size={20} className='text-gray-700' />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Next projects"
          >
            <FaChevronRight size={20} className='text-gray-700' />
          </button>

          {/* Projects Grid */}
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out gap-6'
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage + 2)}%)`
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator (Optional) */}
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