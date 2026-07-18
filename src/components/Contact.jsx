import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [budget, setBudget] = useState(10000);
  const [selectedService, setSelectedService] = useState('Fullstack Web');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = ['Fullstack Web', 'UI/UX Design', 'Mobile App', 'Cloud Infrastructure', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xeeygqwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service_requested: selectedService,
          project_budget: `₹${budget.toLocaleString('en-IN')}+`,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          setBudget(10000);
          setSelectedService('Fullstack Web');
        }, 5000);
      } else {
        alert("Something went wrong with the submission. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-bg glow-accent" style={{ bottom: '-10%', right: '5%' }}></div>
      
      <div className="container">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">
          Ready to <span className="text-gradient">Accelerate</span>?
        </h2>
        <p className="section-subtitle">
          Contact our specialist team to discuss your engineering needs, system audits, or application development timeline.
        </p>

        <div className="contact-grid">
          
          {/* Left Column: Contact details */}
          <div className="contact-info-col">
            <h3 className="info-title">Why work with LoopMedia?</h3>
            <p className="info-desc">
              We operate as a high-velocity squad. By working with a small group of specialized engineers rather than a fragmented agency, you receive direct senior communication, secure codebases, and accelerated timelines.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="info-label">Direct Communication</h4>
                  <p className="info-value">anujadhikary2005@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="info-label">Location</h4>
                  <p className="info-value">Remote</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="info-label">Response Time</h4>
                  <p className="info-value">Less than 12 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-col glass-card">
            {submitted ? (
              <div className="submit-success-state">
                <CheckCircle size={48} className="success-icon animate-float" />
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thanks for reaching out, {formData.name}. We will review your project details and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Service Selector Tabs */}
                <div className="form-group">
                  <label className="form-label">I need help with...</label>
                  <div className="service-tabs">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`service-tab ${selectedService === service ? 'active' : ''}`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="form-group">
                  <div className="budget-labels">
                    <label className="form-label">Project Budget</label>
                    <span className="budget-value">₹{budget.toLocaleString('en-IN')}+</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="5000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="budget-slider"
                  />
                  <div className="slider-limits">
                    <span>₹10,000</span>
                    <span>₹1,00,000+</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Project Description</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the project features, integrations, and timeline requirements..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Proposal'} <Send size={16} />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
