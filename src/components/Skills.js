import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiPython,
  SiMongodb, SiPostgresql, SiFirebase,
  SiGithub,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

const allSkills = [
  // Frontend
  { name: "React.js",     icon: <SiReact />,       color: "#61DAFB" },
  { name: "JavaScript",   icon: <SiJavascript />,  color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "HTML/CSS",     icon: <SiHtml5 />,       color: "#E34F26" },
  // Backend
  { name: "Node.js",      icon: <SiNodedotjs />,   color: "#68A063" },
  { name: "Express.js",   icon: <SiExpress />,     color: "#ffffff" },
  { name: "Python",       icon: <SiPython />,      color: "#3776AB" },
  { name: "REST APIs",    icon: <FiCode />,        color: "#FF6B6B" },
  // Database
  { name: "MongoDB",      icon: <SiMongodb />,     color: "#47A248" },
  { name: "PostgreSQL",   icon: <SiPostgresql />,  color: "#336791" },
  { name: "Firebase",     icon: <SiFirebase />,    color: "#FFCA28" },
  // DevOps
  { name: "Git/GitHub",   icon: <SiGithub />,      color: "#ffffff" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* Heading */}
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

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-5"
        >
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gray-900 border border-gray-800 cursor-default transition-all"
              style={{
                borderColor: hoveredSkill === skill.name
                  ? skill.color + '60' : '',
                boxShadow: hoveredSkill === skill.name
                  ? `0 8px 30px ${skill.color}25` : '',
                background: hoveredSkill === skill.name
                  ? `linear-gradient(135deg, ${skill.color}10, #111827)` : '',
              }}
            >
              {/* Icon */}
              <div
                className="text-4xl mb-3 transition-all duration-300"
                style={{
                  color: hoveredSkill === skill.name
                    ? skill.color : '#6b7280',
                  filter: hoveredSkill === skill.name
                    ? `drop-shadow(0 0 8px ${skill.color}80)` : 'none',
                }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <span
                className="text-xs text-center font-medium leading-tight transition-colors duration-300"
                style={{
                  color: hoveredSkill === skill.name
                    ? skill.color : '#9ca3af',
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;