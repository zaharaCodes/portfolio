import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { info } from '../data/info';

const funFacts = [
  { emoji: "✈️", label: "Traveller", desc: "Always planning the next trip" },
  { emoji: "🗺️", label: "Explorer", desc: "New places, new perspectives" },
  { emoji: "📸", label: "Photographer", desc: "Capturing moments on the road" },
  { emoji: "☕", label: "Coffee lover", desc: "Fuelled by caffeine & curiosity" },
  { emoji: "🎧", label: "Music", desc: "Lo-fi beats while coding" },
  { emoji: "🌙", label: "Night owl", desc: "Best ideas after midnight" },
];

const timeline = [
  { year: "2022", event: "Started B.E. Computer Science at Malnad College" },
  { year: "2024", event: "Built first full-stack AI project with Groq API" },
  { year: "2025", event: "Published CNN research at iCREATE 2025 Conference" },
  { year: "2026", event: "Full Stack Developer Intern at Vrishanksoft" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {['story', 'journey', 'beyond code'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* TAB: Story */}
        {activeTab === 'story' && (
          <motion.div
            key="story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                {info.about}
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Currently interning at <span className="text-blue-400 font-medium">Vrishanksoft</span>, 
                building production features in an agile team. Final year CSE student at{' '}
                <span className="text-cyan-400 font-medium">Malnad College of Engineering</span>, 
                graduating 2026.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Published Researcher', 'Open Source'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Projects Built", color: "from-blue-500 to-cyan-500" },
                { value: "1", label: "Research Published", color: "from-purple-500 to-pink-500" },
                { value: "7.89", label: "CGPA", color: "from-green-500 to-teal-500" },
                { value: "2026", label: "Graduating", color: "from-orange-500 to-red-500" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all text-center"
                >
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: Journey */}
        {activeTab === 'journey' && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-500 opacity-30" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex gap-6 mb-10 relative"
                >
                  {/* Dot */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-blue-500/30">
                    <span className="text-white text-xs font-bold">{item.year}</span>
                  </div>
                  <div className="pt-3 pb-2">
                    <p className="text-gray-200 text-base leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB: Beyond Code */}
        {activeTab === 'beyond code' && (
          <motion.div
            key="beyond"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-10">
              <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                When I'm not pushing code, you'll probably find me somewhere new — 
                exploring a city I've never been to, hunting for the best local food, 
                or just watching sunsets from a random rooftop. 
                Travelling recharges me the same way solving a hard bug does. ✨
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all text-center cursor-default group"
                >
                  <div className="text-4xl mb-3">{fact.emoji}</div>
                  <div className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                    {fact.label}
                  </div>
                  <div className="text-gray-500 text-xs">{fact.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Travel quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 text-center"
            >
              <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <p className="text-gray-300 text-base italic">
                  "The world is a book, and those who do not travel read only one page."
                </p>
                <p className="text-gray-500 text-xs mt-2">— Also me, between deployments 🚀</p>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default About;