import React from 'react';
import { Home, Lightbulb, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="waarom" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Waarom moet ik <span className="text-gradient">eens langs?</span></h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Heb je een tof idee, mooie plannen of wil je gewoon even bijpraten? Kom eens langs bij de Leidse Huiskamer.
          </p>
        </div>

        <div className="grid-3" id="huiskamer">
          <div className="glass-panel">
            <div style={{ background: 'var(--color-primary)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Home size={24} color="white" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Ontmoetingsplek</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Een huiskamer als ontmoetingsplek voor jongvolwassenen waar ze hun eigen community kunnen bouwen.
            </p>
          </div>

          <div className="glass-panel">
            <div style={{ background: 'var(--color-accent-blue)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Lightbulb size={24} color="white" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Passie Delen</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Een plek waar jongeren hun passie kunnen delen en beoefenen, talenten inzetten en skills ontwikkelen.
            </p>
          </div>

          <div className="glass-panel">
            <div style={{ background: 'var(--color-accent-pink)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <MessageCircle size={24} color="white" />
            </div>
            <h3 style={{ marginBottom: '1rem' }}>Continuïteit</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              De HK is bedoeld als plek om continuïteit te bieden aan jongvolwassenen. Een community voor en door jongeren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
