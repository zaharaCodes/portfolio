import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FiGithub, FiExternalLink, FiX, FiMaximize2,
} from 'react-icons/fi';
import {
  BsRobot, BsLightningChargeFill,
  BsShieldLockFill, BsBarChartFill,
  BsMicFill, BsPeopleFill,
  BsSearchHeart, BsEnvelopeCheckFill,
  BsKeyFill, BsTrainFrontFill,
  BsCameraVideo, BsKanbanFill,
  BsPersonCheckFill, BsClock,
  BsHeartPulseFill, BsCameraFill,
  BsFileEarmarkMedical, BsWifi,
  BsFlower1, BsGraphUp,
} from 'react-icons/bs';
import { SiVercel, SiRender, SiDocker } from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';
import { info } from '../data/info';

const highlightIcons = {
  "LLaMA models via Groq for real-time AI": <BsRobot className="text-indigo-400 flex-shrink-0" size={15} />,
  "JWT authentication & usage limits": <BsShieldLockFill className="text-yellow-400 flex-shrink-0" size={15} />,
  "Dashboard with activity tracking": <BsBarChartFill className="text-blue-400 flex-shrink-0" size={15} />,
  "Voice input & keyboard shortcuts": <BsMicFill className="text-pink-400 flex-shrink-0" size={15} />,
  "Connects people with free local resources": <BsPeopleFill className="text-green-400 flex-shrink-0" size={15} />,
  "Role-based access & JWT auth": <BsKeyFill className="text-yellow-400 flex-shrink-0" size={15} />,
  "Search with advanced filtering": <BsSearchHeart className="text-cyan-400 flex-shrink-0" size={15} />,
  "Email notifications system": <BsEnvelopeCheckFill className="text-orange-400 flex-shrink-0" size={15} />,
  "3-role RBAC with JWT & HttpOnly cookies": <BsShieldLockFill className="text-yellow-400 flex-shrink-0" size={15} />,
  "Socket.io real-time with role-filtered emit": <BsPersonCheckFill className="text-blue-400 flex-shrink-0" size={15} />,
  "Kanban board with live presence counter": <BsKanbanFill className="text-amber-400 flex-shrink-0" size={15} />,
  "node-cron auto-flags overdue tasks hourly": <BsClock className="text-red-400 flex-shrink-0" size={15} />,
  "LLaMA 3.3 70B AI symptom triage": <BsRobot className="text-indigo-400 flex-shrink-0" size={15} />,
  "WebRTC peer-to-peer video consultations": <BsCameraVideo className="text-pink-400 flex-shrink-0" size={15} />,
  "Offline-first for 2G rural India": <BsWifi className="text-green-400 flex-shrink-0" size={15} />,
  "E-prescriptions & vitals tracker": <BsHeartPulseFill className="text-red-400 flex-shrink-0" size={15} />,
  "CNN trained with TensorFlow & Keras": <FiCpu className="text-orange-400 flex-shrink-0" size={15} />,
  "Real-time image classification API": <BsCameraFill className="text-cyan-400 flex-shrink-0" size={15} />,
  "Confidence score output per species": <BsGraphUp className="text-green-400 flex-shrink-0" size={15} />,
  "Published at iCREATE 2025 Conference": <BsFileEarmarkMedical className="text-purple-400 flex-shrink-0" size={15} />,
};

const projectVisuals = {
  1: <BsRobot size={70} />,
  2: <BsPeopleFill size={70} />,
  3: <BsKanbanFill size={70} />,
  4: <BsHeartPulseFill size={70} />,
  5: <BsFlower1 size={70} />,
};

const DeploymentBadges = ({ project }) => {
  const { deployment, color } = project;
  if (deployment.frontend) {
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: '#000', border: '1px solid #374151', color: 'white', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <SiVercel size={10} /> Frontend · {deployment.frontend}
        </span>
        <span style={{ color: '#4b5563', fontSize: '13px', alignSelf: 'center' }}>+</span>
        <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <BsTrainFrontFill size={10} /> Backend · {deployment.backend}
        </span>
      </div>
    );
  }
  if (deployment.backend === 'Render') {
    return (
      <div style={{ marginBottom: '18px' }}>
        <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', display: 'flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}>
          <SiRender size={10} /> Deployed on Render
        </span>
      </div>
    );
  }
  if (deployment.backend?.includes('Docker')) {
    return (
      <div style={{ marginBottom: '18px' }}>
        <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: `${color}15`, border: `1px solid ${color}40`, color, display: 'flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}>
          <SiDocker size={10} /> {deployment.backend}
        </span>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: '18px' }}>
      <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: `${color}15`, border: `1px solid ${color}40`, color, display: 'flex', alignItems: 'center', gap: '5px', width: 'fit-content' }}>
        {deployment.backend}
      </span>
    </div>
  );
};

// Modal
const ProjectModal = ({ project, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handlePiP = async () => {
    if (videoRef.current) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else {
          await videoRef.current.requestPictureInPicture();
        }
      } catch (e) { console.error(e); }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0f172a', borderRadius: '24px',
          border: `1px solid ${project.color}40`,
          width: '100%', maxWidth: '900px', maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: `0 40px 100px ${project.color}30`,
        }}
      >
        {/* Video / Visual */}
        <div style={{
          width: '100%', height: '300px', position: 'relative',
          background: `linear-gradient(135deg, ${project.color}30, #0f172a)`,
          borderRadius: '24px 24px 0 0', overflow: 'hidden',
        }}>
          {project.video ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                muted loop autoPlay playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <motion.button
                onClick={handlePiP}
                whileHover={{ scale: 1.05 }}
                style={{
                  position: 'absolute', bottom: 14, right: 14, zIndex: 30,
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '8px 14px', borderRadius: '12px',
                  background: 'rgba(0,0,0,0.7)',
                  border: `1px solid ${project.color}60`,
                  color: project.color, fontSize: '12px', fontWeight: 600,
                  cursor: 'pointer', backdropFilter: 'blur(6px)',
                }}
              >
                <FiMaximize2 size={13} /> Picture in Picture
              </motion.button>
            </>
          ) : (
            <>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 40% 50%, ${project.color}50 0%, transparent 60%)` }} />
              <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ color: project.color, filter: `drop-shadow(0 0 30px ${project.color})` }}
                >
                  {projectVisuals[project.id]}
                </motion.div>
                <span style={{ fontSize: '12px', color: '#6b7280', background: 'rgba(0,0,0,0.5)', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BsCameraVideo size={12} /> Demo video coming soon
                </span>
              </div>
              {project.id === 5 && (
                <div style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', borderRadius: '999px', background: `${project.color}25`, border: `1px solid ${project.color}60`, color: project.color, fontSize: '11px', fontWeight: 600 }}>
                  Research Published
                </div>
              )}
            </>
          )}

          {/* Close */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            style={{
              position: 'absolute', top: 14, right: 14, zIndex: 30,
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
            }}
          >
            <FiX size={16} />
          </motion.button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          <DeploymentBadges project={project} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: project.color, margin: 0 }}>
              {project.title}
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '12px', background: '#1f2937', color: '#d1d5db', border: '1px solid #374151', fontSize: '13px', textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FiGithub size={14} /> Code
              </motion.a>
              <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '12px', background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`, color: 'white', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <FiExternalLink size={14} />
                {project.live.includes('github') ? 'View Code' : 'Live Demo'}
              </motion.a>
            </div>
          </div>

          <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px' }}>
            {project.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            {project.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', background: 'rgba(31,41,55,0.7)', border: '1px solid rgba(55,65,81,0.5)', fontSize: '13px', color: '#d1d5db' }}>
                {highlightIcons[h]}
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontSize: '12px', padding: '5px 14px', borderRadius: '999px', border: `1px solid ${project.color}45`, background: project.color + '12', color: project.color, fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ padding: '20px 24px', borderRadius: '16px', background: project.color + '10', borderLeft: `4px solid ${project.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BsLightningChargeFill style={{ color: project.color }} size={14} />
              <span style={{ color: project.color, fontSize: '13px', fontWeight: 600 }}>The story behind this</span>
            </div>
            <p style={{ margin: 0, color: '#d1d5db', fontSize: '14px', lineHeight: 1.9 }}>
              {project.story}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Project Card
const ProjectCard = ({ project, index, isInView, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: '#111827', borderRadius: '20px',
        border: `1px solid ${hovered ? project.color + '50' : '#1f2937'}`,
        overflow: 'hidden', cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 20px 50px ${project.color}20` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Visual */}
      <div style={{
        height: '180px', position: 'relative',
        background: `linear-gradient(135deg, ${project.color}25, #0f172a)`,
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: `linear-gradient(${project.color} 1px, transparent 1px), linear-gradient(90deg, ${project.color} 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 40% 50%, ${project.color}40 0%, transparent 60%)` }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            animate={hovered ? { y: [-4, 4, -4] } : { y: 0 }}
            transition={{ duration: 2, repeat: hovered ? Infinity : 0 }}
            style={{ color: project.color, filter: hovered ? `drop-shadow(0 0 20px ${project.color})` : 'none', transition: 'filter 0.3s' }}
          >
            {React.cloneElement(projectVisuals[project.id], { size: 55 })}
          </motion.div>
        </div>

        {project.id === 5 && (
          <div style={{ position: 'absolute', top: 10, left: 10, padding: '3px 10px', borderRadius: '999px', background: `${project.color}25`, border: `1px solid ${project.color}60`, color: project.color, fontSize: '10px', fontWeight: 600 }}>
            Research Published
          </div>
        )}

        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{ position: 'absolute', bottom: 10, right: 10, padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', border: `1px solid ${project.color}40`, color: project.color, fontSize: '11px', fontWeight: 600 }}
        >
          View Details
        </motion.div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: hovered ? project.color : 'white', margin: '0 0 8px 0', transition: 'color 0.3s', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, margin: '0 0 16px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} style={{ fontSize: '10px', padding: '3px 10px', borderRadius: '999px', border: `1px solid ${project.color}40`, background: project.color + '10', color: project.color, fontWeight: 500 }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span style={{ fontSize: '10px', padding: '3px 10px', borderRadius: '999px', border: '1px solid #374151', color: '#6b7280' }}>
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>

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
          <p className="text-gray-400">
            Real projects I built from scratch — real problems, real solutions
          </p>
        </motion.div>

        {/* Grid — no filter */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {info.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-4 text-sm">More projects coming soon</p>
          <motion.a
            href={info.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-green-500 transition-all text-sm font-medium"
            whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={18} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;