import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { info } from '../data/info';

const SERVICE_ID  = 'service_klwiv7w';
const TEMPLATE_ID = 'template_umd363h';
const PUBLIC_KEY  = 'ICXIWHx-jRsFlsH0M';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const socialLinks = [
    {
      icon: <FiMail size={20} />,
      label: 'Email',
      href: `mailto:${info.email}`,
      value: info.email,
      color: '#f97316',
    },
    {
      icon: <FiGithub size={20} />,
      label: 'GitHub',
      href: info.github,
      value: 'github.com/zaharaCodes',
      color: '#a78bfa',
    },
    {
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      href: info.linkedin,
      value: 'linkedin.com/in/fathima-zahara525',
      color: '#38bdf8',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
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
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              Let's build something great!
            </h3>
            <p className="text-gray-400 mb-3 leading-relaxed">
              I'm always excited to work on interesting projects and collaborate
              with cool people. Drop a message and I'll get back to you fast! 🚀
            </p>

            {/* Status badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                Open to freelance & full-time opportunities
              </span>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-800 transition-all group"
                  style={{ '--hover-color': social.color }}
                  whileHover={{ x: 6 }}
                >
                  <div
                    className="p-2 rounded-lg transition-all"
                    style={{ background: social.color + '20', color: social.color }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{social.label}</div>
                    <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {social.value}
                    </div>
                  </div>
                  <div className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Fathima Zahara"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Hey Fathima, I'd love to collaborate on..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {/* Success Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm flex items-center gap-2"
                >
                  <FiCheckCircle size={16} />
                  Message sent! I'll get back to you soon 🚀
                </motion.div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm flex items-center gap-2"
                >
                  <FiAlertCircle size={16} />
                  Oops! Something went wrong. Try emailing me directly.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium flex items-center justify-center gap-2 hover:from-orange-400 hover:to-pink-400 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
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