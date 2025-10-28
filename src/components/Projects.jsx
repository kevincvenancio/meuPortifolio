import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/data';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Meus Projetos</h1>
        
        <div className="search-section">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar projetos por nome, descrição ou tecnologia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="btn btn-outline"
                    >
                      Ver Detalhes
                    </Link>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <div className="no-projects-content">
              <h3>Nenhum projeto localizado</h3>
              <p>
                Não encontramos projetos que correspondam à sua busca por "{searchTerm}".
                Tente usar termos diferentes ou verifique a ortografia.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="btn btn-primary"
              >
                Limpar Busca
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
