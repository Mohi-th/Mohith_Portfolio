// ProjectCard.jsx
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full'>
            {/* Project Image */}
            <div className='w-full h-48 md:h-52 bg-gradient-to-br from-gray-100 to-gray-200'>
                {image ? (
                    <img src={image} alt={title} className='w-full h-full object-cover' />
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='text-gray-400 text-6xl font-bold opacity-20'>
                            {title.charAt(0)}
                        </div>
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className='p-5 md:p-6 flex flex-col flex-grow'>
                <h3 className='text-lg md:text-xl font-semibold mb-3'>{title}</h3>
                <p className='text-sm text-gray-600 mb-4 flex-grow line-clamp-2'>{description}</p>

                {/* Tags */}
                <div className='flex gap-2 mb-4 flex-wrap'>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className='px-3 py-1 bg-[#0EA5E9] text-white text-xs font-medium rounded'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className='flex gap-4 items-center'>
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-700 hover:text-black transition-colors'
                            aria-label="GitHub Repository"
                        >
                            <FaGithub size={24} />
                        </a>
                    )}

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-gray-700 hover:text-black transition-colors'
                            aria-label="Live Demo"
                        >
                            <FaExternalLinkAlt size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard