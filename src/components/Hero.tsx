import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  // Try to import the image, fallback to null if not available
  let heroImage = null;
  try {
    heroImage = require('../assets/images/hero-profile.jpg');
  } catch (error) {
    // Image not found, will use placeholder
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Rohith Kumar Boddu</span>
            </h1>
            <p className="hero-subtitle">
              I am a <strong>Software Engineer with nearly 6 years of experience</strong>. Results-driven Software Professional with expertise in design and developing Enterprise Software Platforms with a passion for innovating new features in cloud-native, API-driven applications. Proficient in architectural discussions and cloud design, integrating diverse data sources to enhance performance. Proven track record in product/system development and code testing, standards evolution and facilitating problem-solving for clients.
            </p>
            
            <div className="hero-buttons">
              <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
                View Projects
              </Link>
              <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
            {/*
            <div className="hero-social">
              <a
                href="https://github.com/Rohith-Kumar-Boddu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:boddurohithkumar@gmail.com"
                className="social-link"
              >
                <Mail size={24} />
              </a>
            </div>
            */}
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="image-container">
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt="Rohith Kumar Boddu - Software Engineer" 
                  className="hero-profile-image"
                />
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-text">
                    <span>Add Your Photo</span>
                    <small>Save as: hero-profile.jpg</small>
                    <small>Size: 400x500px or larger</small>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 