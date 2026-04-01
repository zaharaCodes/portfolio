import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FiGithub, FiExternalLink,
  FiChevronDown, FiChevronUp,
} from 'react-icons/fi';
import {
  BsRobot, BsLightningChargeFill,
  BsShieldLockFill, BsBarChartFill,
  BsMicFill, BsPeopleFill,
  BsSearchHeart, BsEnvelopeCheckFill,
  BsKeyFill, BsTrainFrontFill,
  BsCameraVideo,
} from 'react-icons/bs';
import { SiVercel, SiRender } from 'react-icons/si';
import { info } from '../data/info';

const categories = ['all', 'fullstack', 'frontend', 'backend'];

const highlightIcons = {
  "LLaMA models via Groq for real-time AI":
    <BsRobot className="text-indigo-400 flex-shrink-0" size={15} />,
  "JWT authentication & usage limits":
    <BsShieldLockFill className="text-yellow-400 flex-shrink-0" size={15} />,
  "Dashboard with activity tracking":
    <BsBarChartFill className="text-blue-400 flex-shrink-0" size={15} />,
  "Voice input & keyboard shortcuts":
    <BsMicFill className="text-pink-400 flex-shrink-0" size={15} />,
  "Connects people with free local resources":
    <BsPeopleFill className="text-green-400 flex-shrink-0" size={15} />,
  "Role-based access & JWT auth":
    <BsKeyFill className="text-yellow-400 flex-shrink-0" size={15} />,
  "Search with advanced filtering":
    <BsSearchHeart className="text-cyan-400 flex-shrink-0" size={15} />,
  "Email notifications system":
    <BsEnvelopeCheckFill className="text-orange-400 flex-shrink-0" size={15} />,
};

const projectIcons = {
  1: <BsRobot size={70} />,
  2: <BsPeopleFill size={70} />,
};

// Single Card
const SingleProjectCard = ({
  project, index, isInView,
  hoveredId, setHoveredId,
  expandedStory, setExpandedStory,
}) => {
  const videoRef = useRef(null);
  const isHovered = hoveredId === project.id;
  const isExpanded = expandedStory === project.id;

  useEffect(() => {
    if (videoRef.current && project.video) {
      videoRef.current.play().catch(() => {});
    }
  }, [project.video]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{
        background: '#111827',
        borderRadius: '24px',
        border: `1px solid ${isHovered ? '#374151' : '#1f2937'}`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 20px 60px ${project.color}20` : 'none',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', minHeight: '360px' }}>

        {/* LEFT VIDEO */}
        <div style={{
          width: '380px',
          minWidth: '380px',
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${project.color}25, #0f172a)`,
          flexShrink: 0,
        }}>
          {project.video ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                autoPlay
                playsInline
                preload="auto"
                style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
              {/* LIVE badge */}
              <div style={{
                position: 'absolute',
                top: 12, right: 12,
                zIndex: 20,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(6px)',
              }}>
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    style={{
                      width: 6, height: 6,
                      borderRadius: '50%',
                      background: '#ef4444',
                    }}
                    animate={{ scaleY: [1, 2.5, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
                <span style={{
                  color: 'white', fontSize: '11px',
                  fontWeight: 600, marginLeft: '2px',
                }}>LIVE</span>
              </div>
            </>
          ) : (
            <>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `
                  radial-gradient(circle at 35% 50%, ${project.color}50 0%, transparent 55%),
                  radial-gradient(circle at 70% 25%, ${project.color}30 0%, transparent 50%)
                `,
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                opacity: 0.07,
                backgroundImage: `
                  linear-gradient(${project.color} 1px, transparent 1px),
                  linear-gradient(90deg, ${project.color} 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ color: project.color, filter: `drop-shadow(0 0 24px ${project.color})` }}
                >
                  {projectIcons[project.id]}
                </motion.div>
              </div>
              {/* No emoji - use icon instead */}
              <div style={{
                position: 'absolute', bottom: '16px',
                left: 0, right: 0,
                display: 'flex', justifyContent: 'center',
              }}>
                <span style={{
                  fontSize: '11px', color: '#6b7280',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '4px 14px', borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}>
                  <BsCameraVideo size={11} /> Demo video coming soon
                </span>
              </div>
            </>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div style={{
          flex: 1, padding: '32px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          minWidth: 0, overflowY: 'auto',
        }}>
          <div>
            {/* Deployment badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {project.deployment.frontend ? (
                <>
                  <span style={{
                    fontSize: '11px', padding: '4px 12px',
                    borderRadius: '999px', background: '#000',
                    border: '1px solid #374151', color: 'white',
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}>
                    <SiVercel size={10} /> Frontend · {project.deployment.frontend}
                  </span>
                  <span style={{ color: '#4b5563', fontSize: '13px', alignSelf: 'center' }}>+</span>
                  <span style={{
                    fontSize: '11px', padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.3)',
                    color: '#a78bfa',
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}>
                    <BsTrainFrontFill size={10} /> Backend · {project.deployment.backend}
                  </span>
                </>
              ) : (
                <span style={{
                  fontSize: '11px', padding: '4px 12px',
                  borderRadius: '999px',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  color: '#818cf8',
                  display: 'flex', alignItems: 'center', gap: '5px',
                }}>
                  <SiRender size={10} /> Deployed on {project.deployment.backend}
                </span>
              )}
            </div>

            {/* Title + Buttons */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', gap: '16px',
              marginBottom: '14px', flexWrap: 'wrap',
            }}>
              <h3 style={{
                fontSize: '22px', fontWeight: 700,
                color: isHovered ? project.color : 'white',
                transition: 'color 0.3s', margin: 0, lineHeight: 1.3,
              }}>
                {project.title}
              </h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '12px',
                    background: '#1f2937', color: '#d1d5db',
                    border: '1px solid #374151', fontSize: '13px',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub size={14} /> Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '12px',
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    color: 'white', fontSize: '13px', fontWeight: 600,
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink size={14} /> Live Demo
                </motion.a>
              </div>
            </div>

            {/* Description */}
            <p style={{
              color: '#9ca3af', fontSize: '14px',
              lineHeight: 1.75, margin: '0 0 18px 0',
            }}>
              {project.description}
            </p>

            {/* Highlights */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '8px', marginBottom: '18px',
            }}>
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + i * 0.07 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 12px', borderRadius: '12px',
                    background: 'rgba(31,41,55,0.7)',
                    border: '1px solid rgba(55,65,81,0.5)',
                    fontSize: '12px', color: '#d1d5db',
                  }}
                >
                  {highlightIcons[h]}
                  <span>{h}</span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px', padding: '4px 12px',
                    borderRadius: '999px',
                    border: `1px solid ${project.color}45`,
                    background: project.color + '12',
                    color: project.color, fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Story */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ borderTop: '1px solid #1f2937', marginBottom: '14px' }} />
            <motion.button
              onClick={() => setExpandedStory(isExpanded ? null : project.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '13px', fontWeight: 500,
                color: project.color,
                background: 'none', border: 'none',
                cursor: 'pointer', padding: 0,
              }}
              whileHover={{ x: 4 }}
            >
              {isExpanded
                ? <><FiChevronUp size={15} /> Hide the story</>
                : <><FiChevronDown size={15} /> Read the story behind this</>
              }
            </motion.button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    marginTop: '14px', padding: '18px 20px',
                    borderRadius: '16px',
                    background: project.color + '12',
                    borderLeft: `4px solid ${project.color}`,
                    display: 'flex', gap: '12px',
                  }}>
                    <BsLightningChargeFill
                      style={{ color: project.color, flexShrink: 0, marginTop: '2px' }}
                      size={14}
                    />
                    <p style={{
                      margin: 0, color: '#d1d5db',
                      fontSize: '13px', lineHeight: 1.8,
                    }}>
                      {project.story}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedStory, setExpandedStory] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = info.projects.filter(p =>
    activeFilter === 'all' ? true : p.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 mb-8">
            Real projects I built from scratch — real problems, real solutions
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {filtered.map((project, index) => (
            <SingleProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              expandedStory={expandedStory}
              setExpandedStory={setExpandedStory}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-4 text-sm">
            More projects coming soon — stay tuned
          </p>
          <motion.a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-green-500 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;