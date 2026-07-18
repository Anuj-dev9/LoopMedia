import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <Code2 size={22} />
          </div>
          <span className="logo-text">
            LOOP<span className="logo-highlight">MEDIA</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-menu-desktop">
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
                <span className="nav-link-indicator"></span>
              </a>
            ))}
          </div>

          <a href="#contact" className="btn-primary btn-navbar">
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle-mobile"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-drawer-mobile ${isOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="drawer-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary btn-drawer"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
