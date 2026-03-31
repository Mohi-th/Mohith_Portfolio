import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
    return (
        <div
            className='rounded-lg overflow-hidden card-hover flex flex-col h-full'
            style={{
                backgroundColor: 'var(--bg-card)',
                boxShadow: `0 2px 12px var(--shadow-color)`,
                border: '1px solid var(--border-color)',
            }}
        >
            {/* Project Image */}
            <div className='w-full h-48 md:h-52 overflow-hidden relative group' style={{ background: 'linear-gradient(to bottom right, var(--bg-secondary), var(--bg-skill))' }}>
                {image ? (
                    <img
                        src={image}
                        loading="lazy"
                        alt={title}
                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='text-6xl font-bold opacity-20 gradient-text'>
                            {title.charAt(0)}
                        </div>
                    </div>
                )}
                {/* Hover overlay */}
                <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                >
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110'
                            aria-label="GitHub Repository"
                        >
                            <FaGithub size={22} />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all hover:scale-110'
                            aria-label="Live Demo"
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Info */}
            <div className='p-5 md:p-6 flex flex-col flex-grow'>
                <h3 className='text-lg md:text-xl font-semibold mb-3' style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className='text-sm mb-4 flex-grow line-clamp-2' style={{ color: 'var(--text-muted)' }}>{description}</p>

                {/* Tags — original rectangular badge style */}
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
                            className='transition-all duration-300 hover:scale-110'
                            style={{ color: 'var(--icon-color)' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--icon-hover)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--icon-color)'}
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
                            className='transition-all duration-300 hover:scale-110'
                            style={{ color: 'var(--icon-color)' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--icon-hover)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--icon-color)'}
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