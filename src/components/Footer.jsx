import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kevin Carvalho Venancio</h3>
            <p>Desenvolvedor Backend apaixonado por criar soluções que geram impacto no mundo real.</p>
            <div className="footer-social">
              <a 
                href={personalInfo.socialMedia.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:kevin.venancio@email.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/projects">Projetos</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Projetos</h4>
            <ul>
              <li><a href="https://github.com/kevincvenancio/blogCLT" target="_blank" rel="noopener noreferrer">BlogCLT</a></li>
              <li><a href="https://github.com/kevincvenancio/modeloAirBnB" target="_blank" rel="noopener noreferrer">ModeloAirBnB</a></li>
              <li><a href="https://github.com/kevincvenancio/AutomacaoWeb-Selenium" target="_blank" rel="noopener noreferrer">Automação Web</a></li>
              <li><a href="https://github.com/kevincvenancio/projetoPessoal-Automacao" target="_blank" rel="noopener noreferrer">Automação Pessoal</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Skills</h4>
            <div className="skills-list">
              {personalInfo.skills.slice(0, 6).map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Kevin Carvalho Venancio. Feito com <FaHeart className="heart-icon" /> e <FaCode className="code-icon" />
            </p>
            <p className="footer-location">
              São Paulo, SP - Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
