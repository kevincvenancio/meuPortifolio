// Dados dos projetos
export const projects = [
  {
    id: 1,
    name: "BlogCLT",
    description: "Um sistema de blog com autenticação de usuários, posts e gerenciamento de perfis.",
    technologies: ["Python", "Flask", "Flask-Bcrypt", "PostgreSQL"],
    link: "https://github.com/kevincvenancio/blogCLT",
    image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=BlogCLT",
    category: "Backend",
    status: "Completo"
  },
  {
    id: 2,
    name: "ModeloAirBnB",
    description: "Este projeto tem como objetivo ajudar tanto proprietários de imóveis quanto locatários a estimarem se o preço de uma diária no Airbnb está adequado, com base nas características do imóvel.",
    technologies: ["Python", "Streamlit", "Pandas", "joblib"],
    link: "https://github.com/kevincvenancio/modeloAirBnB",
    image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=ModeloAirBnB",
    category: "Data Science",
    status: "Completo"
  },
  {
    id: 3,
    name: "AutomacaoWeb-Selenium",
    description: "Este projeto tem como objetivo automatizar a busca de preços de produtos em diferentes sites de e-commerce. Ele é voltado para treinamentos e simula uma situação real do setor de compras de uma empresa.",
    technologies: ["Python", "Selenium", "Pandas", "Excel", "Outlook"],
    link: "https://github.com/kevincvenancio/AutomacaoWeb-Selenium",
    image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=AutomacaoWeb",
    category: "Automação",
    status: "Completo"
  },
  {
    id: 4,
    name: "pjPessoal-automacao",
    description: "Este projeto tem como foco o desenvolvimento de um sistema automatizado para gerar e enviar relatórios diários de desempenho (OnePages) das lojas de uma grande rede de varejo.",
    technologies: ["Python", "Pandas", "smtplib", "pathlib"],
    link: "https://github.com/kevincvenancio/projetoPessoal-Automacao",
    image: "https://via.placeholder.com/400x250/ff6b35/ffffff?text=Automacao",
    category: "Automação",
    status: "Completo"
  }
];

// Informações pessoais expandidas
export const personalInfo = {
  name: "Kevin Carvalho Venancio",
  age: 18,
  position: "Estagiário de Desenvolvimento Backend",
  company: "Itaú Unibanco",
  description: "Atuando na integração de APIs do Open Gateway (GSMA) para aumentar a segurança em transações financeiras e validar a titularidade de dispositivos móveis. Experiência com Java, Spring Boot, Python e FastAPI.",
  education: "Bacharelando em Engenharia de Software na FIAP (2/8)",
  bio: "Fora do ambiente acadêmico e profissional, gosto de resolver problemas com código, criar soluções que gerem impacto no mundo real e — claro — acompanhar meu time do coração, o Corinthians! 🖤",
  skills: ["Java", "Spring", "Python", "React", "JavaScript", "Tailwind", "Bootstrap", "Flask", "SQL", "Open Gateway"],
  socialMedia: {
    github: "https://github.com/kevincvenancio",
    linkedin: "https://linkedin.com/in/kevin-carvalho-venancio"
  },
  // Novas informações expandidas
  experience: [
    {
      company: "Itaú Unibanco",
      position: "Estagiário de Desenvolvimento Backend",
      period: "2024 - Presente",
      description: "Integração de APIs do Open Gateway (GSMA) para segurança em transações financeiras",
      technologies: ["Java", "Spring Boot", "Open Gateway", "APIs REST"]
    }
  ],
  achievements: [
    {
      title: "Desenvolvedor Backend",
      description: "Especialização em desenvolvimento de APIs e integrações",
      icon: "🏆"
    },
    {
      title: "Estudante FIAP",
      description: "Bacharelado em Engenharia de Software",
      icon: "🎓"
    },
    {
      title: "Projetos Python",
      description: "Múltiplos projetos em automação e análise de dados",
      icon: "🐍"
    }
  ],
  stats: {
    projectsCompleted: 4,
    technologiesUsed: 10,
    yearsExperience: 1,
    companiesWorked: 1
  },
  interests: [
    "Desenvolvimento Backend",
    "Automação de Processos", 
    "Análise de Dados",
    "APIs e Integrações",
    "Machine Learning",
    "Segurança Digital"
  ]
};
