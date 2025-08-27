import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Software Developer - II",
      company: "Mouser Electronics",
      location: "Mansfield, Texas",
      period: "Aug '23 - Present",
      description: [
        "Designed and deployed a Datasheet Validator to automate file validation and downloads, orchestrating parallel processes for faster downstream processing and improved operational efficiency",
        "Engineered a centralized Metadata Data-hub platform to synchronize data across multiple systems, to define match configurations, business requirements, & enhancing search indexing efficiency",
        "Championed the migration of critical legacy PIM application tools to extract heavy data from On-Prem data sources, resulting in a 30% reduction in data querying"
      ],
      type: 'work',
      icon: <Building size={20} />
    },
    {
      id: 2,
      title: "Software Engineer - I",
      company: "NCR",
      location: "Hyderabad, India",
      period: "May '19 - Dec '21",
      description: [
        "Worked with the R10 Engineering team to design, develop, and integrate new feature-rich modules into legacy enterprise systems, driving functional enhancements and improving system scalability",
        "Transformed the R10 platform from a monolithic system to a layered architecture, ensuring responsive SPA development with secure, scalable APIs for enhanced maintainability & performance",
        "Guided two Scrum teams as a Scrum Master in orchestrating PI planning, sprint planning, & retrospect meetings following Agile methodologies, leading to a 90% completion of planned features & a 15% uptick in team velocity"
      ],
      type: 'work',
      icon: <Building size={20} />
    },
    {
      id: 3,
      title: "Associate Software Engineer",
      company: "NCR",
      location: "Hyderabad, India",
      period: "Jul '18 - Apr '19",
      description: [
        "Implemented an automation test suite to ensure functionality & seamless API integrations while maintaining & advancing the testing framework",
        "Enhanced R10 POS Return Policy screens by implementing comprehensive return scenarios in collaboration with Product Owners and QA and streamlining return workflows"
      ],
      type: 'work',
      icon: <Building size={20} />
    },
    {
      id: 4,
      title: "Master of Science in Computer Engineering",
      company: "University of Texas at Arlington",
      location: "TX, USA",
      period: "Jan '22 - May '23",
      description: [
        "Graduated with focus on advanced software engineering and cloud computing",
        "Completed coursework in distributed systems, cloud-native applications, and enterprise software development",
        "Applied theoretical knowledge to practical projects in cloud platforms and microservices architecture"
      ],
      type: 'education',
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and educational background that shaped my expertise in software engineering and product management.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <div className="timeline-meta">
                      <span className="timeline-location">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                      <span className="timeline-period">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-description">
                  <ul>
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-type">
                  <span className={`type-badge ${item.type}`}>
                    {item.type === 'work' ? 'Work Experience' : 'Education'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 