import React from 'react';
import { ArrowRight, Code, Sparkles, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="grid-overlay"></div>
      <div className="glow-bg glow-primary"></div>
      <div className="glow-bg glow-accent"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-float" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🇮🇳</span>
            <span>Built in India, Shipped Globally</span>
          </div>

          <h1 className="hero-title">
            Transforming Ideas Into <br />
            <span className="text-gradient">Production-Ready</span> Software
          </h1>

          <p className="hero-description">
            We are a elite 3-member team of fullstack developers, system designers, and cloud architects crafting performant, high-security, and beautifully responsive digital solutions for high-growth businesses.
          </p>

          <div className="hero-ctas">
            <a href="#team" className="btn-primary">
              Meet Our Team <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Agency Stats Grid */}
        <div className="hero-stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper cyan-glow">
              <Zap size={22} className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">3</h3>
              <p className="stat-label">Specialist Developers</p>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper purple-glow">
              <Code size={22} className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper indigo-glow">
              <Shield size={22} className="stat-icon" />
            </div>
            <div className="stat-info">
              <h3 className="stat-value">99%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
