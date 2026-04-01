import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiLinux,
  SiFigma,
} from 'react-icons/si';
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiCloud,
} from 'react-icons/fi';
import { info } from '../data/info';

const skillIcons = {
  "React.js":    { icon: <SiReact />,      color: "#61DAFB" },
  "JavaScript":  { icon: <SiJavascript />, color: "#F7DF1E" },
  "TailwindCSS": { icon: <SiTailwindcss />,color: "#38BDF8" },
  "HTML/CSS":    { icon: <SiHtml5 />,      color: "#E34F26" },
  "Next.js":     { icon: <SiNextdotjs />,  color: "#ffffff" },
  "Node.js":     { icon: <SiNodedotjs />,  color: "#68A063" },
  "Express.js":  { icon: <SiExpress />,    color: "#ffffff" },
  "Python":      { icon: <SiPython />,     color: "#3776AB" },
  "REST APIs":   { icon: <FiCode />,       color: "#FF6B6B" },
  "GraphQL":     { icon: <SiGraphql />,    color: "#E10098" },
  "MongoDB":     { icon: <SiMongodb />,    color: "#47A248" },
  "PostgreSQL":  { icon: <SiPostgresql />, color: "#336791" },
  "MySQL":       { icon: <SiMysql />,      color: "#4479A1" },
  "Redis":       { icon: <SiRedis />,      color: "#DC382D" },
  "Firebase":    { icon: <SiFirebase />,   color: "#FFCA28" },
  "Git/GitHub":  { icon: <SiGithub />,     color: "#ffffff" },
  "Docker":      { icon: <SiDocker />,     color: "#2496ED" },
  "AWS":         { icon: <FiCloud />,      color: "#FF9900" },
  "Linux":       { icon: <SiLinux />,      color: "#FCC624" },
  "Figma":       { icon: <SiFigma />,      color: "#F24E1E" },
};

const categories = [
  {
    title: "Frontend",
    icon: <FiCode size={20} />,
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
    glow: "#3b82f6",
    skills: info.skills.frontend,
  },
  {
    title: "Backend",
    icon: <FiServer size={20} />,
    color: "from-purple-500 to-pink-500",
    border: "border-purple-500/20",
    glow: "#8b5cf6",
    skills: info.skills.backend,
  },
  {
    title: "Database",
    icon: <FiDatabase size={20} />,
    color: "from-green-500 to-teal-500",
    border: "border-green-500/20",
    glow: "#10b981",
    skills: info.skills.database,
  },
  {
    title: "Tools & DevOps",
    icon: <FiTool size={20} />,
    color: "from-orange-500 to-red-500",
    border: "border-orange-500/20",
    glow: "#f97316",
    skills: info.skills.tools,
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`p-6 rounded-2xl bg-gray-900 border ${category.border} hover:bg-gray-800/50 transition-all`}
              style={{
                boxShadow: isInView ? `0 0 30px ${category.glow}10` : 'none',
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillData = skillIcons[skill.name];
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="text-lg flex items-center"
                            style={{ color: skillData?.color || '#fff' }}
                          >
                            {skillData?.icon}
                          </div>
                          <span className="text-gray-300 text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs font-mono">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.2,
                            delay: catIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'TypeScript', 'GraphQL', 'Redis',
              'Nginx', 'Linux', 'Bash',
              'Jest', 'Webpack', 'Vite',
            ].map(tech => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-sm hover:border-purple-500 hover:text-purple-400 transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;