import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiCloud, FiTerminal } from 'react-icons/fi';
import { info } from '../data/info';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    { icon: <FiCode size={24} />, title: "Frontend", desc: "React, Tailwind, Next.js", color: "from-blue-500 to-cyan-500" },
    { icon: <FiServer size={24} />, title: "Backend", desc: "Node.js, Python, REST APIs", color: "from-purple-500 to-pink-500" },
    { icon: <FiCloud size={24} />, title: "Cloud", desc: "AWS, GCP, Azure", color: "from-green-500 to-teal-500" },
    { icon: <FiTerminal size={24} />, title: "DevOps", desc: "Docker, Kubernetes, CI/CD", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {info.about}
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              When I'm not coding, I'm exploring new technologies, contributing to open source, 
              and staying updated with the latest in cloud-native development and AI.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Open Source'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-blue-500 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards Side */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all cursor-default"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;