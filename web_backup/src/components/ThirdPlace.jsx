import React from 'react';
import { Coffee, HeartHandshake, Smile } from 'lucide-react';

const ThirdPlace = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Jouw <span className="text-gradient">Third Place</span></h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            Een plek buiten school, werk of gezin waar jongvolwassen in een huiselijke setting elkaar kunnen ontmoeten.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-accent-blue)' }}>Samen de eenzaamheid tegengaan</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Jongvolwassenen voelen zich regelmatig eenzaam en zitten vaak in hun eigen (online) bubbel. De HK wil hier iets aan doen door alle jongeren en studenten een plek te geven waar ze naartoe kunnen om elkaar te ontmoeten. Dit kan door samen te eten of op een andere manier in sociaal contact komen.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <div className="glass-pill"><Coffee size={18} /> Samen Eten</div>
              <div className="glass-pill"><Smile size={18} /> Sociaal Contact</div>
            </div>
          </div>

          <div className="glass-panel bg-gradient-primary">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>Een vraag aan de stad</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Door de krachten te bundelen van alle organisaties in Leiden die aanbod hebben voor jongeren, maar zich versnipperd over de stad bevinden, willen we dé plek én vooral een verbindingspunt zijn. We hopen dat jongeren en organisaties elkaar zo beter kunnen vinden.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
              <HeartHandshake size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
              Voor en door onze stad. Werk met ons samen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPlace;
