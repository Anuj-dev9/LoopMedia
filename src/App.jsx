import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Partners from './components/Partners';
import Team from './components/Team';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical', 
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    // Intercept anchor link clicks to use Lenis scroll
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            lenis.scrollTo(targetElement);
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Partners />
        <Team />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
