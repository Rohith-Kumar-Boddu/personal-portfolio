import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Food Ordering System",
      description: "Created a serverless application model of a food ordering system to perform order and payment processing utilizing serverless AWS services including API Gateway, Lambda Functions, DynamoDB, and MFA authentication.",
      technologies: ["AWS API Gateway", "Lambda Functions", "DynamoDB", "MFA", "SAM"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/Rohith-Kumar-Boddu/food-ordering-system",
      category: "Cloud Native"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Designed a web application to manage and track personal expenses and pull periodic financial reports. Built with Spring Boot, Java, React, and TypeScript, deployed using Azure services for scalable cloud infrastructure.",
      technologies: ["Spring Boot", "Java", "React", "TypeScript", "AWS"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/Rohith-Kumar-Boddu/expense-tracker",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Family Asset Management",
      description: "Developed a Single Page Application (SPA) to store, view and modify family and project details with serverless backend on Laravel and deployed on Google Cloud Platform. Features comprehensive asset tracking and management capabilities.",
      technologies: ["React", "MySQL", "TypeScript", "PHP", "Node", "Web API", "GCP"],
      image: "/api/placeholder/400/300",
      githubUrl: "https://github.com/Rohith-Kumar-Boddu/family-asset-management",
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            A collection of personal and university projects, where I've applied product development and project management principles to develop creative and practical solutions.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="placeholder-text">
                    <span>{project.title}</span>
                    <small>Project Preview</small>
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Rohith-Kumar-Boddu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 