import React, { useState, useEffect } from 'react';
import { MessageSquareQuote, Star, Plus, X, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  // Fetch from Supabase on mount
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const { data, error } = await supabase
        .from('feedbacks')
        .select('*');
        
      if (error) throw error;
      if (data) setFeedbacks(data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    }
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('feedbacks')
        .insert([formData]);
        
      if (error) throw error;
      
      // Refresh the list after submitting
      await fetchFeedbacks();
      
      setFormData({ name: '', role: '', content: '', rating: 5 });
      setIsFormOpen(false);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Failed to submit feedback. Please ensure the database is set up correctly.');
    } finally {
      setIsSubmitting(false);
    }
    setIsFormOpen(false);
  };

  return (
    <section id="feedback" className="feedback-section" style={{ position: 'relative' }}>
      <div className="glow-bg glow-primary" style={{ top: '10%', right: '10%' }}></div>
      
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Client <span className="text-gradient-cyan">Feedback</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Don't just take our word for it. Here's what our partners and clients have to say.
            </p>
          </div>
          
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)} 
            className="btn-primary" 
            style={{ marginBottom: '1rem' }}
          >
            {isFormOpen ? <X size={18} /> : <Plus size={18} />}
            {isFormOpen ? 'Close Form' : 'Leave Feedback'}
          </button>
        </div>

        {isFormOpen && (
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', border: 'var(--brutalist-border)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Submit Your Feedback</h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Company & Role</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input"
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder="CEO, Acme Corp"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Rating</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        cursor: 'pointer',
                        color: star <= formData.rating ? 'var(--primary)' : 'var(--text-muted)',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <Star size={24} fill={star <= formData.rating ? 'currentColor' : 'none'} />
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.9rem' }}>Your Experience</label>
                <textarea 
                  required 
                  className="form-input"
                  style={{ minHeight: '120px', resize: 'vertical' }}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="How was your experience working with us?"
                />
              </div>

              <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ justifySelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1 }}>
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'} <Send size={16} />
              </button>
            </form>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', zIndex: 5, position: 'relative' }}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ color: 'var(--primary)' }}>
                <MessageSquareQuote size={32} />
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontStyle: 'italic', flexGrow: 1 }}>
                "{feedback.content}"
              </p>
              
              <div style={{ borderTop: '2px solid #111111', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{feedback.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{feedback.role}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--secondary)' }}>
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          {feedbacks.length === 0 && (
             <p style={{ color: 'var(--text-muted)' }}>No feedback submitted yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
