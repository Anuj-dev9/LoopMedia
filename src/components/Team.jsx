import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Cpu, Paintbrush, Database, Smartphone, 
  Terminal, ShieldCheck, Play, ArrowUpRight, Award, Layers, 
  Settings, RefreshCw, CheckCircle, Flame
} from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Behance = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6.5 6H3v12h3.5c2.8 0 4.5-1.5 4.5-3.5 0-1.2-.7-2.3-1.8-2.8 1.4-.4 2.3-1.5 2.3-3 0-1.7-1.4-2.7-5-2.7zm-1.5 2h1.5c1.4 0 2 .5 2 1.5 0 1.1-.6 1.5-2 1.5H5V8zm0 5h1.7c1.7 0 2.3.6 2.3 1.8 0 1.2-.6 1.7-2.3 1.7H5v-3.5z" />
    <path d="M13 8h5v2h-5z" />
  </svg>
);

const Globe = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);


const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);


  const teamMembers = [
    {
      id: 'anuj',
      name: 'Anuj Adhikary',
      role: 'Frontend Developer / 3D Artist & Founder',
      qualification: 'BCA (Bachelor of Computer Applications)',
      avatarColor: 'from-cyan-500 to-blue-600',
      initials: 'AA',
      image: '/anuj.jpg',
      bio: 'Creative developer blending interactive digital art with robust frontend architectures. Specialized in WebGL, 3D design, and building highly immersive user experiences.',
      skills: [
        { name: 'React & Frontend', level: 96 },
        { name: 'Three.js / WebGL', level: 90 },
        { name: 'Creative Coding', level: 92 },
        { name: '3D Design', level: 88 }
      ],
      social: { github: 'https://github.com/Anuj-dev9', linkedin: 'https://linkedin.com/in/anujadhikary193', behance: 'https://www.behance.net/anujadhikary193', portfolio: 'https://anuj-dev9.netlify.app/' },
      projects: [
        {
          name: 'Personal Interactive Portfolio',
          desc: 'A stunning 3D interactive portfolio experience showcasing visual fidelity, fluid animations, and custom 3D models.',
          tags: ['Three.js', 'React', 'GSAP'],
          link: 'https://anuj-dev9.netlify.app/'
        },
        {
          name: 'BNG Design Studio (Live Site)',
          desc: 'Frontend development for BNG Design Studio featuring smooth scrolling, interactive elements, and optimized performance.',
          tags: ['React', 'Frontend', 'Animations'],
          link: 'https://www.bngdesignstudio.com/'
        }
      ]
    },
    {
      id: 'chinmay',
      name: 'Chinmay Das',
      role: 'UI/UX Designer & Co-Founder',
      qualification: 'B.Des in Interaction Design',
      avatarColor: 'from-pink-500 to-violet-500',
      initials: 'CD',
      image: '/chinmay.jpg',
      bio: 'Crafting pixel-perfect, intuitive user interfaces. Specialized in visual design, interactive prototypes, and creating engaging user experiences that convert.',
      skills: [
        { name: 'UI/UX Design', level: 98 },
        { name: 'Figma & Prototyping', level: 95 },
        { name: 'Visual Design', level: 92 },
        { name: 'Design Systems', level: 90 }
      ],
      social: { github: '#', linkedin: '#', behance: 'https://www.behance.net/chinmaydas3' },
      projects: [
        {
          name: 'BNG Design Studio Branding Work',
          desc: 'Complete brand identity and visual language designed for BNG Design Studio, featuring modern typography and cohesive assets.',
          tags: ['Branding', 'Visual Identity', 'UI Design'],
          link: 'https://www.behance.net/gallery/251778883/BNG-Design-Studio-Branding-Work'
        },
        {
          name: 'BNG Design Studio (Live Site)',
          desc: 'The official live website for BNG Design Studio, showcasing the implemented branding and UI design systems in a production environment.',
          tags: ['Web Design', 'UI/UX', 'Production'],
          link: 'https://www.bngdesignstudio.com/'
        }
      ]
    },

    {
      id: 'aman',
      name: 'Aman Chauhan',
      role: 'Full Stack Developer & Co-Founder',
      qualification: 'B.Tech in Computer Science',
      avatarColor: 'from-green-500 to-emerald-600',
      initials: 'AC',
      image: '/aman.jpg',
      bio: 'Building production-grade web platforms with React.js, Node.js, and MongoDB. Runs an esports startup while delivering full-stack client solutions.',
      skills: [
        { name: 'React / Next.js', level: 94 },
        { name: 'Node.js / Express', level: 92 },
        { name: 'MongoDB Schema', level: 90 },
        { name: 'System Architecture', level: 88 }
      ],
      social: { github: 'https://github.com/amanjc81-code', linkedin: 'https://linkedin.com/in/amanjc81', portfolio: 'https://aman-chauhan-iota.vercel.app/' },
      projects: [
        {
          name: 'Fizor Esports Platform',
          desc: 'Founded and built a competitive gaming platform managing brand strategy, tournaments, and a community of gamers.',
          tags: ['Startup', 'React', 'Full Stack'],
          link: 'https://fizoresports.vercel.app/'
        },
        {
          name: 'Student Task Manager',
          desc: 'Role-based routing system with access control dashboards, task status monitoring, and supervisor panels.',
          tags: ['RBAC', 'React', 'Dashboard'],
          link: 'https://aman-chauhan-iota.vercel.app/'
        }
      ]
    },

    
  ];



  return (
    <section id="team" className="team-section">
      <div className="glow-bg glow-primary" style={{ top: '20%' }}></div>
      <div className="glow-bg glow-secondary" style={{ bottom: '20%' }}></div>
      
      <div className="container">
        <span className="section-tag">Meet The Team</span>
        <h2 className="section-title">
          Our Elite <span className="text-gradient-cyan">3-Member</span> Force
        </h2>
        <p className="section-subtitle">
          An integrated team of experts who own the lifecycle of fullstack engineering, from design tokens to hardened production deployments.
        </p>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card glass-card">
              <div className="team-avatar-wrapper">
                <div className={`team-avatar ${!member.image ? 'bg-gradient-to-br ' + member.avatarColor : ''}`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                  ) : (
                    member.initials
                  )}
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-qualification" style={{ fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{member.qualification}</p>
              <p className="team-brief">{member.bio.slice(0, 85)}...</p>
              
              <button 
                onClick={() => setSelectedMember(member)} 
                className="btn-secondary btn-team"
              >
                Inspect Portfolio <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Portfolio Drawer/Modal */}
      {selectedMember && (
        <div className="portfolio-overlay">
          <div className="portfolio-drawer glass-card">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setSelectedMember(null);

              }} 
              className="drawer-close"
              aria-label="Close details"
            >
              <X size={24} />
            </button>

            <div className="drawer-grid">
              
              {/* Left Column: Member Info */}
              <div className="drawer-info-col">
                <div className={`drawer-avatar ${!selectedMember.image ? 'bg-gradient-to-br ' + selectedMember.avatarColor : ''}`}>
                  {selectedMember.image ? (
                    <img src={selectedMember.image} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                  ) : (
                    selectedMember.initials
                  )}
                </div>
                <h2 className="drawer-name">{selectedMember.name}</h2>
                <p className="drawer-role">{selectedMember.role}</p>
                <p className="drawer-qualification" style={{ fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedMember.qualification}</p>
                
                <p className="drawer-bio">{selectedMember.bio}</p>

                <div className="drawer-socials">
                  {selectedMember.social.github && selectedMember.social.github !== '#' && (
                    <a href={selectedMember.social.github} className="social-link" target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {selectedMember.social.linkedin && selectedMember.social.linkedin !== '#' && (
                    <a href={selectedMember.social.linkedin} className="social-link" target="_blank" rel="noreferrer">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedMember.social.behance && (
                    <a href={selectedMember.social.behance} className="social-link" target="_blank" rel="noreferrer">
                      <Behance size={20} />
                    </a>
                  )}
                  {selectedMember.social.portfolio && (
                    <a href={selectedMember.social.portfolio} className="social-link" target="_blank" rel="noreferrer">
                      <Globe size={20} />
                    </a>
                  )}
                  {/* Fallbacks if only generic placeholders are provided */}
                  {(!selectedMember.social.behance && !selectedMember.social.portfolio && selectedMember.social.github === '#') && (
                    <a href={selectedMember.social.github} className="social-link" target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {(!selectedMember.social.behance && !selectedMember.social.portfolio && selectedMember.social.linkedin === '#') && (
                    <a href={selectedMember.social.linkedin} className="social-link" target="_blank" rel="noreferrer">
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>

                <div className="skills-section">
                  <h4 className="drawer-section-title">Specialized Skills</h4>
                  <div className="skills-list">
                    {selectedMember.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-val">{skill.level}%</span>
                        </div>
                        <div className="skill-track">
                          <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Custom Portfolio Cases & Widgets */}
              <div className="drawer-portfolio-col">
                
                {/* ----------------- CUSTOM INTERACTIVE WIDGETS ----------------- */}

                {/* AMAN Chauhan (Full Stack) Widget: Database Query Visualizer */}
                {selectedMember.id === 'aman' && (
                  <div className="widget-box glass-card">
                    <div className="widget-header">
                      <Database size={18} className="widget-icon" />
                      <span>MongoDB Schema Sandbox</span>
                    </div>
                    <div className="design-simulator" style={{ padding: '1rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                       <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>const <span style={{ color: '#e5c07b' }}>playerSchema</span> = new mongoose.Schema({'{'}</div>
                       <div style={{ paddingLeft: '1.5rem', color: '#abb2bf' }}>
                         username: {'{'} type: <span style={{ color: '#56b6c2' }}>String</span>, required: true {'}'},<br/>
                         rank: {'{'} type: <span style={{ color: '#56b6c2' }}>Number</span>, default: 0 {'}'},<br/>
                         team: {'{'} type: mongoose.Schema.Types.<span style={{ color: '#56b6c2' }}>ObjectId</span>, ref: 'Team' {'}'},<br/>
                         isOnline: {'{'} type: <span style={{ color: '#56b6c2' }}>Boolean</span>, default: false {'}'}
                       </div>
                       <div style={{ color: '#c678dd', marginTop: '0.5rem' }}>{'}'});</div>
                       <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(97, 175, 239, 0.1)', color: '#61afef', borderRadius: '4px', textAlign: 'center' }}>
                         [ Connected to Cluster0 • 14ms ping ]
                       </div>
                    </div>
                  </div>
                )}

                {/* ANUJ Adhikary (Frontend/3D) Widget: WebGL Code Renderer */}
                {selectedMember.id === 'anuj' && (
                  <div className="widget-box glass-card">
                    <div className="widget-header">
                      <Cpu size={18} className="widget-icon" />
                      <span>WebGL Shader Sandbox</span>
                    </div>
                    <div className="design-simulator" style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', overflow: 'hidden' }}>
                       {/* Animated background to simulate WebGL */}
                       <div className="glow-bg glow-primary animate-pulse" style={{ width: '150px', height: '150px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5, borderRadius: '50%' }}></div>
                       <div style={{ fontFamily: 'monospace', color: '#64ffda', fontSize: '0.8rem', zIndex: 1 }}>
                         <div style={{ color: '#c678dd' }}>void</div> <div style={{ color: '#61afef', display: 'inline' }}>main</div>() {'{'}
                       </div>
                       <div style={{ fontFamily: 'monospace', color: '#abb2bf', fontSize: '0.8rem', paddingLeft: '1rem', zIndex: 1 }}>
                         <div style={{ color: '#e5c07b', display: 'inline' }}>vec2</div> st = gl_FragCoord.xy / u_resolution.xy;
                       </div>
                       <div style={{ fontFamily: 'monospace', color: '#abb2bf', fontSize: '0.8rem', paddingLeft: '1rem', zIndex: 1 }}>
                         <div style={{ color: '#e5c07b', display: 'inline' }}>vec3</div> color = vec3(st.x, st.y, abs(sin(u_time)));
                       </div>
                       <div style={{ fontFamily: 'monospace', color: '#abb2bf', fontSize: '0.8rem', paddingLeft: '1rem', zIndex: 1 }}>
                         gl_FragColor = <div style={{ color: '#e5c07b', display: 'inline' }}>vec4</div>(color, 1.0);
                       </div>
                       <div style={{ fontFamily: 'monospace', color: '#64ffda', fontSize: '0.8rem', zIndex: 1 }}>{'}'}</div>
                       <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', zIndex: 1, textAlign: 'center' }}>
                          [ Rendering active • 60 FPS ]
                       </div>
                    </div>
                  </div>
                )}


                {/* CHINMAY Das (UI Designer) Widget: Design Simulator */}
                {selectedMember.id === 'chinmay' && (
                  <div className="widget-box glass-card">
                    <div className="widget-header">
                      <Layers size={18} className="widget-icon" />
                      <span>Figma Layout Prototyper</span>
                    </div>

                    <div className="design-simulator" style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                      {/* Mockup Toolbar */}
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
                         <div style={{ width: '12px', height: '12px', background: '#ff5f56', borderRadius: '50%' }}></div>
                         <div style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }}></div>
                         <div style={{ width: '12px', height: '12px', background: '#27c93f', borderRadius: '50%' }}></div>
                         <div style={{ flex: 1 }}></div>
                         <div style={{ background: 'rgba(255,255,255,0.1)', fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>100%</div>
                      </div>
                      
                      {/* Wireframe Mockup */}
                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                         <div style={{ flex: 1, height: '40px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px' }}></div>
                         <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%' }}></div>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                         <div style={{ width: '30%', height: '120px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px' }}></div>
                         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                           <div style={{ height: '52px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px' }}></div>
                           <div style={{ height: '52px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px' }}></div>
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Featured Projects List */}
                <div className="drawer-projects">
                  <h4 className="drawer-section-title">Featured Projects</h4>
                  <div className="projects-list">
                    {selectedMember.projects.map((proj, pIdx) => (
                      <div key={pIdx} className="project-item glass-card">
                        <div className="proj-header">
                          <h5 className="proj-name">
                            {proj.link ? (
                              <a href={proj.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                {proj.name}
                                <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
                              </a>
                            ) : (
                              proj.name
                            )}
                          </h5>
                          <Award size={16} className="proj-badge-icon" />
                        </div>
                        <p className="proj-desc">{proj.desc}</p>
                        <div className="proj-tags">
                          {proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="proj-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
