import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/data';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="not-found">
            <h2>Projeto não encontrado</h2>
            <p>O projeto que você está procurando não existe.</p>
            <Link to="/projects" className="btn btn-primary">
              <FaArrowLeft /> Voltar aos Projetos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="back-button">
          <Link to="/projects" className="btn btn-outline">
            <FaArrowLeft /> Voltar aos Projetos
          </Link>
        </div>

        <div className="project-header">
          <div className="project-image-large">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-info">
            <h1 className="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              <h3>Tecnologias Utilizadas:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> Ver no GitHub
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="detail-section">
            <h3>Sobre o Projeto</h3>
            <p>{project.description}</p>
          </div>

          <div className="detail-section">
            <h3>Funcionalidades</h3>
            <ul>
              {getProjectFeatures(project.name).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>Tecnologias e Ferramentas</h3>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-name">{tech}</span>
                  <span className="tech-description">{getTechDescription(tech)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Função para obter funcionalidades específicas de cada projeto
const getProjectFeatures = (projectName) => {
  const features = {
    'BlogCLT': [
      'Sistema de autenticação de usuários',
      'Criação e edição de posts',
      'Gerenciamento de perfis de usuário',
      'Sistema de comentários',
      'Interface responsiva'
    ],
    'ModeloAirBnB': [
      'Análise de preços de imóveis',
      'Interface intuitiva com Streamlit',
      'Processamento de dados com Pandas',
      'Modelo de machine learning',
      'Visualizações interativas'
    ],
    'AutomacaoWeb-Selenium': [
      'Automação de busca de preços',
      'Integração com múltiplos sites',
      'Geração de relatórios em Excel',
      'Envio automático por email',
      'Sistema de notificações'
    ],
    'pjPessoal-automacao': [
      'Geração automática de relatórios',
      'Processamento de dados de vendas',
      'Envio por email automatizado',
      'Formatação profissional',
      'Sistema de agendamento'
    ]
  };
  
  return features[projectName] || ['Funcionalidades específicas do projeto'];
};

// Função para obter descrição das tecnologias
const getTechDescription = (tech) => {
  const descriptions = {
    'Python': 'Linguagem de programação principal',
    'Flask': 'Framework web para Python',
    'Flask-Bcrypt': 'Biblioteca para hash de senhas',
    'PostgreSQL': 'Banco de dados relacional',
    'Streamlit': 'Framework para aplicações web',
    'Pandas': 'Biblioteca para análise de dados',
    'joblib': 'Biblioteca para serialização',
    'Selenium': 'Automação de navegadores web',
    'Excel': 'Planilhas eletrônicas',
    'Outlook': 'Cliente de email',
    'smtplib': 'Biblioteca para envio de emails',
    'pathlib': 'Manipulação de caminhos de arquivos'
  };
  
  return descriptions[tech] || 'Tecnologia utilizada no projeto';
};

export default ProjectDetail;
