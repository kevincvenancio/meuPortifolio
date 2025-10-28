import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Limpar status após 3 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Entre em Contato</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Vamos conversar!</h2>
            <p>
              Estou sempre interessado em novos projetos e oportunidades. 
              Se você tem uma ideia ou precisa de ajuda com desenvolvimento, 
              não hesite em entrar em contato!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>kevin.venancio@email.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Telefone</h4>
                  <p>+55 (11) 99999-9999</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Redes Sociais</h4>
              <div className="social-buttons">
                <a 
                  href={personalInfo.socialMedia.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  GitHub
                </a>
                <a 
                  href={personalInfo.socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Envie uma mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="input-icon" />
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <FaComment className="input-icon" />
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Qual o assunto da sua mensagem?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaComment className="input-icon" />
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
