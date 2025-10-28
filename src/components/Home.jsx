import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode, FaGraduationCap, FaBriefcase, FaTrophy, FaRocket, FaChartLine, FaCog, FaHeart, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import ItuberAnimation from './ItuberAnimation';
import './Home.css';

const Home = () => {
  const [showItuber, setShowItuber] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowItuber(false);
      setIsLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {showItuber && <ItuberAnimation />}
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Olá, eu sou</span>
            </div>
            <h1 className="hero-title">
              <span className="highlight">{personalInfo.name}</span>
            </h1>
            <div className="hero-subtitle">
              <span className="position-text">{personalInfo.position}</span>
              <span className="company-text">no {personalInfo.company}</span>
            </div>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.projectsCompleted}+</div>
                <div className="stat-label">Projetos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.technologiesUsed}+</div>
                <div className="stat-label">Tecnologias</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.yearsExperience}+</div>
                <div className="stat-label">Anos Exp.</div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <FaRocket />
                Ver Projetos
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <FaHeart />
                Entre em Contato
              </Link>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
              <FaArrowDown />
              <span>Saiba mais</span>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <FaCode className="avatar-icon" />
                <div className="avatar-ring"></div>
              </div>
              <div className="profile-info">
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.age} anos</p>
                <div className="social-links">
                  <a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={personalInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Sobre Mim</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="bio-text">{personalInfo.bio}</p>
              
              <div className="info-cards">
                <div className="info-card">
                  <FaGraduationCap className="info-icon" />
                  <div className="info-content">
                    <h4>Educação</h4>
                    <p>{personalInfo.education}</p>
                  </div>
                </div>
                <div className="info-card">
                  <FaBriefcase className="info-icon" />
                  <div className="info-content">
                    <h4>Experiência</h4>
                    <p>{personalInfo.position} - {personalInfo.company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-section">
              <h3>Principais Skills</h3>
              <div className="skills-grid">
                {personalInfo.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Experiência Profissional</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="experience-timeline">
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.position}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Conquistas</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="achievements-grid">
            {personalInfo.achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Áreas de Interesse</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="interests-grid">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <div className="interest-icon">
                  {index === 0 && <FaCode />}
                  {index === 1 && <FaCog />}
                  {index === 2 && <FaChartLine />}
                  {index === 3 && <FaRocket />}
                  {index === 4 && <FaChartLine />}
                  {index === 5 && <FaCog />}
                </div>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para trabalhar juntos?</h2>
            <p>Vamos criar algo incrível que gere impacto real!</p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">
                <FaRocket />
                Ver Meus Projetos
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <FaHeart />
                Vamos Conversar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
