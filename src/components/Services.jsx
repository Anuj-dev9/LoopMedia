import React from 'react';
import { Monitor, Server, Smartphone, Cloud, Code, Database } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Monitor size={24} />,
      title: 'Frontend Engineering',
      description: 'Stunning, highly responsive user interfaces built with React, Next.js, and CSS animations. Highly optimized for speed, SEO, and user retention.',
      tech: ['React', 'Next.js', 'TypeScript', 'CSS/SCSS']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Systems',
      description: 'Robust, highly scalable API architectures using Node.js, Go, and FastAPI. Integrated with database optimizations and secure authorization.',
      tech: ['Node.js', 'Go', 'REST/GraphQL', 'WebSockets']
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Cross-platform native mobile applications for iOS and Android using React Native. Seamless performance and native feature integration.',
      tech: ['React Native', 'Expo', 'iOS & Android', 'State Management']
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & DevOps',
      description: 'Secure, automated cloud infrastructure provisioning on AWS and GCP. Dockerization, Kubernetes clusters, and zero-downtime CI/CD pipelines.',
      tech: ['AWS', 'Kubernetes', 'Docker', 'GitHub Actions']
    },
    {
      icon: <Database size={24} />,
      title: 'Database Architecture',
      description: 'High-performance SQL and NoSQL database modeling, querying optimizations, migration management, and caching implementations.',
      tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
    },
    {
      icon: <Code size={24} />,
      title: 'Fullstack Integrations',
      description: 'End-to-end web system integration, connecting frontends, backends, third-party APIs, payments, and analytics dashboards.',
      tech: ['Stripe', 'OAuth 2.0', 'Webhooks', 'Analytics']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="glow-bg glow-secondary"></div>
      
      <div className="container">
        <span className="section-tag">Our Capabilities</span>
        <h2 className="section-title">
          We Build <span className="text-gradient">End-to-End</span> Solutions
        </h2>
        <p className="section-subtitle">
          From pixel-perfect web interfaces to cloud infrastructure scaling, our cross-functional expertise covers the entire modern development stack.
        </p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              
              <div className="service-tech-tags">
                {service.tech.map((tag, tIndex) => (
                  <span key={tIndex} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
