import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { info } from '../data/info';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setSending(false);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  const socialLinks = [
    { icon: <FiMail size={20} />, label: 'Email', href: `mailto:${info.email}`, value: info.email },
    { icon: <FiGithub size={20} />, label: 'GitHub', href: info.github, value: 'github.com/zaharaCodes' },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: info.linkedin, value: 'linkedin.com/in/fathima' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's work together!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question or
              just want to say hi, my inbox is always open!
            </p>

            <div className="flex items-center gap-3 text-gray-400 mb-6">
              <FiMapPin className="text-orange-400" />
              <span>Available for Remote Work Worldwide</span>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-orange-500/50 hover:bg-gray-800 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-orange-400 group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{social.label}</div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {social.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Success - icon instead of emoji */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm flex items-center gap-2"
                >
                  <FiCheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium flex items-center justify-center gap-2 hover:from-orange-400 hover:to-pink-400 transition-all disabled:opacity-70"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;