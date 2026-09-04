import React from 'react';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative'
    }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <div className="animate-fade-in">
            <div className="glass-pill" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={16} color="var(--color-accent-blue)" />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Voor en door jongeren</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Jouw plek om te <span className="text-gradient">chillen</span>, te <span className="text-gradient">groeien</span> en <span className="text-gradient">jezelf te zijn</span>.
            </h1>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'var(--color-text-muted)', maxWidth: '500px' }}>
              Zoek je een plek waar je gewoon binnen kunt lopen, zonder gedoe? Welkom bij de Huiskamer. Een spot voor en door jongeren tussen de 17 en 30+ jaar.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#langskomen" className="btn btn-primary">
                Kom eens langs <ArrowRight size={18} />
              </a>
              <a href="#huiskamer" className="btn btn-glass">
                Wat is de Huiskamer? <Users size={18} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in delay-2" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(142, 45, 226, 0.2), rgba(0, 201, 255, 0.2))',
              overflow: 'hidden'
            }}>
              {/* Placeholder image representation */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center/cover no-repeat',
                opacity: 0.6,
                mixBlendMode: 'overlay',
                borderRadius: '10px'
              }}></div>
              <h3 style={{ position: 'absolute', background: 'rgba(0,0,0,0.5)', padding: '1rem 2rem', borderRadius: '50px', backdropFilter: 'blur(5px)' }}>
                Jouw Community
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
