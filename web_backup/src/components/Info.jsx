import React from 'react';
import { MessagesSquare, Paintbrush, Coffee, ArrowRight } from 'lucide-react';

const Info = () => {
  return (
    <section id="info" className="section-padding" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Wat kun je <span className="text-gradient">hier doen?</span></h2>

        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <Coffee size={32} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ontmoeten</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Chill met mensen die in dezelfde fase zitten als jij. Of je nu studeert, werkt of even tussen de bedrijven door zit: hier vind je je community.
            </p>
          </div>

          <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <Paintbrush size={32} color="var(--color-accent-blue)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Je passie delen</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Heb je een vette skill of hobby? In de HK krijg je de ruimte om je talenten verder te ontwikkelen of anderen iets te leren.
            </p>
          </div>

          <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <MessagesSquare size={32} color="var(--color-accent-pink)" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Echt praten</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              In de HK hoef je het niet alleen uit te vogelen. Hier voeren we de gesprekken die er echt toe doen—over wie je bent, je toekomst of je week.
            </p>
          </div>
        </div>

        <div className="glass-panel bg-gradient-primary" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ruimte voor jouw eigen ding</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
            De HK is van ons allemaal. We letten er samen op dat iedereen zich hier welkom voelt en dat niemand wordt buitengesloten. Zie de Huiskamer als een paraplu: daaronder is plek voor allerlei verschillende kleine groepjes en activiteiten.
          </p>
          <a href="#langskomen" className="btn btn-glass" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Kom een keer langs. De deur staat open. <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
