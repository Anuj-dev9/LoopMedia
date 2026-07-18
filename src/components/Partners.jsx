import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Partners = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('id', { ascending: false });
        
      if (error) throw error;
      if (data) {
        setClients(data);
      }
    } catch (err) {
      console.error('Error fetching clients:', err);
    }
  };

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <span className="section-tag">Our Partners</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Trusted by <span className="text-gradient-cyan">Industry Leaders</span>
            </h2>
          </div>
        </div>

        {clients.length === 0 ? (
          <div className="glass-card" style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <Briefcase size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p>More partners coming soon...</p>
          </div>
        ) : (
          <div className="partners-grid">
            {clients.map((client) => (
              <div key={client.id || client.name} className="partner-card glass-card">
                <div className="partner-logo-wrapper">
                  {client.logo_url ? (
                    <img src={client.logo_url} alt={client.name} className="partner-logo" />
                  ) : (
                    <span className="partner-placeholder">{client.name.charAt(0)}</span>
                  )}
                </div>
                <h4 className="partner-name">{client.name}</h4>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Partners;
