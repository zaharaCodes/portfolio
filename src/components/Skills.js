import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPython, SiFlask,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiPrisma,
  SiGithub, SiDocker, SiNginx, SiLinux, SiFigma,
  SiTensorflow, SiKeras, SiSocketdotio,
} from 'react-icons/si';
import { FiCode, FiServer, FiDatabase, FiTool, FiCpu, FiZap } from 'react-icons/fi';

const allSkills = [
  // Frontend
  { name: "React.js", icon: <SiReact />, color: "#61DAFB", category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8", category: "Frontend" },
  { name: "HTML/CSS", icon: <SiHtml5 />, color: "#E34F26", category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063", category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff", category: "Backend" },
  { name: "Python", icon: <SiPython />, color: "#3776AB", category: "Backend" },
  { name: "Flask", icon: <SiFlask />, color: "#ffffff", category: "Backend" },
  { name: "Socket.io", icon: <SiSocketdotio />, color: "#ffffff", category: "Backend" },
  { name: "REST APIs", icon: <FiCode />, color: "#FF6B6B", category: "Backend" },
  { name: "WebRTC", icon: <FiZap />, color: "#FF9900", category: "Backend" },
  // Database
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", category: "Database" },
  { name: "Prisma ORM", icon: <SiPrisma />, color: "#ffffff", category: "Database" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Database" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", category: "Database" },
  // DevOps & Tools
  { name: "Git/GitHub", icon: <SiGithub />, color: "#ffffff", category: "DevOps" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED", category: "DevOps" },
  { name: "Nginx", icon: <SiNginx />, color: "#009900", category: "DevOps" },
  { name: "Linux", icon: <SiLinux />, color: "#FCC624", category: "DevOps" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E", category: "DevOps" },
  // AI / ML
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", category: "AI/ML" },
  { name: "Keras", icon: <SiKeras />, color: "#D00000", category: "AI/ML" },
  { name: "CNN", icon: <FiCpu />, color: "#a78bfa", category: "AI/ML" },
  { name: "Groq API", icon: <FiZap />, color: "#f59e0b", category: "AI/ML" },
  { name: "LLaMA 3.3 70B", icon: <FiServer />, color: "#ec4899", category: "AI/ML" },
];

const categoryMeta = {
  All:      { icon: <FiCode />,     color: "#60a5fa" },
  Frontend: { icon: <FiCode />,     color: "#61DAFB" },
  Backend:  { icon: <FiServer />,   color: "#a78bfa" },
  Database: { icon: <FiDatabase />, color: "#47A248" },
  DevOps:   { icon: <FiTool />,     color: "#f97316" },
  "AI/ML":  { icon: <FiCpu />,      color: "#ec4899" },
};

const filters = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML'];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = activeFilter === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with to build real, production-grade products
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const meta = categoryMeta[filter];
            const isActive = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? 'text-white border-transparent shadow-lg'
                    : 'bg-gray-800/80 text-gray-400 border-gray-700 hover:text-white hover:border-gray-500'
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${meta.color}33, ${meta.color}55)`,
                  borderColor: meta.color + '60',
                  color: meta.color,
                  boxShadow: `0 4px 20px ${meta.color}30`,
                } : {}}
              >
                <span style={isActive ? { color: meta.color } : {}}>{meta.icon}</span>
                {filter}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid — Icon Cards */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.12, y: -6 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-900 border border-gray-800 cursor-default transition-all group"
              style={{
                borderColor: hoveredSkill === skill.name ? skill.color + '60' : '',
                boxShadow: hoveredSkill === skill.name ? `0 8px 30px ${skill.color}25` : '',
                background: hoveredSkill === skill.name
                  ? `linear-gradient(135deg, ${skill.color}10, #111827)`
                  : '',
              }}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-3 transition-all duration-300"
                style={{
                  color: hoveredSkill === skill.name ? skill.color : '#6b7280',
                  filter: hoveredSkill === skill.name
                    ? `drop-shadow(0 0 10px ${skill.color}80)`
                    : 'none',
                }}
              >
                {skill.icon}
              </div>
              {/* Name */}
              <span
                className="text-xs text-center font-medium transition-colors duration-300 leading-tight"
                style={{
                  color: hoveredSkill === skill.name ? skill.color : '#9ca3af',
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            { label: "Frontend", count: 6, color: "#61DAFB" },
            { label: "Backend", count: 7, color: "#a78bfa" },
            { label: "Database", count: 5, color: "#47A248" },
            { label: "DevOps", count: 5, color: "#f97316" },
            { label: "AI/ML", count: 5, color: "#ec4899" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800"
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.count}
              </div>
              <div className="text-gray-500 text-xs">{stat.label} tools</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;