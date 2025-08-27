import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  // Try to import the image, fallback to null if not available
  let aboutImage = null;
  try {
    aboutImage = require('../assets/images/about-profile.jpg');
  } catch (error) {
    // Image not found, will use placeholder
  }

  const aboutPoints = [
    {
      icon: <Check size={20} />,
      text: "Results-driven Software Engineer with 5+ years of experience in enterprise applications"
    },
    {
      icon: <Check size={20} />,
      text: "Expertise in Java, .NET, and cloud-native technologies (AWS, Azure)"
    },
    {
      icon: <Check size={20} />,
      text: "Skilled in API development, micro-services, and Agile methodologies"
    },
    {
      icon: <Check size={20} />,
      text: "Proven track record in product/system development and problem-solving"
    }
  ];

  const backgroundItems = [
    {
      icon: <Briefcase size={20} />,
      text: "Software Developer - II at Mouser Electronics, Mansfield, Texas"
    },
    {
      icon: <GraduationCap size={20} />,
      text: "Master of Science in Computer Engineering from University of Texas at Arlington"
    },
    {
      icon: <Briefcase size={20} />,
      text: "Former Software Engineer at NCR Corporation, Hyderabad, India"
    },
    {
      icon: <BookOpen size={20} />,
      text: "AWS Certified Developer - Associate & AZ-900: Microsoft Azure Fundamentals"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Who Am I?</h2>
          <p className="section-subtitle">
            Get to know me better and understand my journey in technology and product management
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              {aboutImage ? (
                <img 
                  src={aboutImage} 
                  alt="Rohith Kumar Boddu - About" 
                  className="about-profile-image"
                />
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-text">
                    <span>Add Your Photo</span>
                    <small>Save as: about-profile.jpg</small>
                    <small>Size: 350x450px or larger</small>
                  </div>
                </div>
              )}
              <div className="frame-accent"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="about-heading">About Me</h3>
            <p className="about-description">
              I am a Results-driven Software Engineer with 5+ years of experience designing scalable enterprise applications using Java, .NET, and cloud-native technologies (AWS, Azure). Skilled in API development, micro-services, and Agile methodologies. Seeking to contribute to innovative solutions in fast-paced, cloud-driven environments.
            </p>

            <div className="about-points">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="about-point"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="point-icon">{point.icon}</div>
                  <p className="point-text">{point.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="background-section">
              <h4 className="background-title">Background</h4>
              <div className="background-items">
                {backgroundItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="background-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="item-icon">{item.icon}</div>
                    <p className="item-text">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 