import React from 'react';
import { Target, Users, MapPin, Search } from 'lucide-react';

const Goals = () => {
  return (
    <section id="doel" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Het <span className="text-gradient">Doel</span> van de Huiskamer</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Een pluriforme community voor en door jongvolwassenen van alle achtergronden en levensstijlen. Die fungeert als ontmoetingsplek en het uitbreiden van netwerk.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Maar ook een plek voor alle vragen die je als jongvolwassenen (financieel, psychologisch of sociaal) zou kunnen hebben. Daarnaast wordt de Huiskamer ook een plek voor jonge makers, waarbij we de ruimte en het platform bieden om aan de slag te gaan met hun eigen ideeën.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Target color="var(--color-primary)" />
                  <span style={{ fontWeight: 500 }}>Ontwikkelen</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Users color="var(--color-accent-blue)" />
                  <span style={{ fontWeight: 500 }}>Community</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Search color="var(--color-accent-pink)" />
                  <span style={{ fontWeight: 500 }}>Netwerk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <MapPin color="var(--color-primary)" />
                  <span style={{ fontWeight: 500 }}>Centrale Plek</span>
                </div>
              </div>
            </div>
            <div style={{ 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              position: 'relative',
              height: '400px'
            }}>
              {/* Placeholder image */}
              <div style={{
                width: '100%',
                height: '100%',
                background: 'url("https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center/cover no-repeat',
                opacity: 0.8
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
