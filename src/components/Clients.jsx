import React from 'react';

const Clients = () => {
  const clients = [
    "BNG DESIGN STUDIO",
    "FIZOR ESPORTS",
    "PULSE FITNESS",
    "TECHFLOW INC.",
    "QUANTUM LOGIC",
    "NEXUS LABS",
    "ZENITH DIGITAL"
  ];

  return (
    <section className="clients-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <React.Fragment key={index}>
              <span className={index % 2 === 0 ? "marquee-text" : "marquee-text outlined"}>
                {client}
              </span>
              <span className="marquee-separator">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
