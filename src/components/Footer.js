import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <motion.div
            className="text-gray-400 text-sm flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
          >
            Made with <FiHeart className="text-red-500 mx-1" /> by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold ml-1">
              Fathima Zahara
            </span>
            <span className="ml-1">© {currentYear}</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com' },
              { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com' },
              { icon: <FiTwitter size={20} />, href: 'https://twitter.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;