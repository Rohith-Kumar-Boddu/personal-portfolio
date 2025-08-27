import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import "./Skills.css";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Java", level: 90, category: "programming" },
        { name: "TypeScript", level: 85, category: "programming" },
        { name: "C#", level: 80, category: "programming" },
        { name: "SQL", level: 85, category: "programming" },
        { name: "HTML", level: 90, category: "programming" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: <Database size={24} />,
      skills: [
        { name: "Spring Boot", level: 90, category: "frameworks" },
        { name: ".NET Core", level: 90, category: "frameworks" },
        { name: "React", level: 85, category: "frameworks" },
        { name: "Angular", level: 75, category: "frameworks" },
        { name: "Node.js", level: 80, category: "frameworks" },
        { name: "Redux", level: 75, category: "frameworks" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      icon: <Cloud size={24} />,
      skills: [
        { name: "Azure", level: 85, category: "cloud" },
        { name: "AWS", level: 85, category: "cloud" },
        { name: "GCP", level: 70, category: "cloud" },
        { name: "Docker", level: 80, category: "cloud" },
        { name: "CI/CD", level: 85, category: "cloud" },
        { name: "Azure DevOps", level: 85, category: "cloud" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Tools",
      icon: <Wrench size={24} />,
      skills: [
        { name: "SQL Server", level: 85, category: "databases" },
        { name: "MySQL", level: 80, category: "databases" },
        { name: "Cosmos DB", level: 75, category: "databases" },
        { name: "DynamoDB", level: 70, category: "databases" },
        { name: "GitHub", level: 90, category: "databases" },
        { name: "Rabbit MQ", level: 75, category: "databases" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and expertise across
            various domains of software development.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-content">
            <h3 className="summary-title">What I Bring to the Table</h3>
            <div className="summary-points">
              <div className="summary-point">
                <span className="point-number">5+</span>
                <span className="point-text">Years of Experience</span>
              </div>
              <div className="summary-point">
                <span className="point-number">15+</span>
                <span className="point-text">Enterprise Projects</span>
              </div>
              <div className="summary-point">
                <span className="point-number">20+</span>
                <span className="point-text">Technologies Mastered</span>
              </div>
              <div className="summary-point">
                <span className="point-number">2</span>
                <span className="point-text">Cloud Certifications</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
