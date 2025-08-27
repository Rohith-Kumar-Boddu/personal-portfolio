import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/Rohith-Kumar-Boddu'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohith-kumar-boddu-127074204/'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'mailto:boddurohithkumar@gmail.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="hero" smooth={true} duration={500} className="footer-logo">
              <span className="logo-text">Rohith Kumar Boddu</span>
            </Link>
            <p className="footer-description">
              Results-driven Software Engineer with 5+ years of experience designing scalable enterprise applications using Java, .NET, and cloud-native technologies.
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="about" smooth={true} duration={500} className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} className="footer-link">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} className="footer-link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Rohith Kumar Boddu. Made with <Heart size={16} className="heart-icon" /> using React & TypeScript.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 