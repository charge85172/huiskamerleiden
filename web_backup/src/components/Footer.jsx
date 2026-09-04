import React from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="langskomen" style={{ 
      background: 'rgba(15, 12, 41, 0.8)', 
      padding: '4rem 0 2rem 0', 
      borderTop: '1px solid rgba(255,255,255,0.1)' 
    }}>
      <div className="container">
        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>De Leidse <span className="text-gradient">Huiskamer</span></h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
              De huiskamer is die huiselijke plek waar niks moet en (bijna) alles mag. Geen ongemakkelijke stiltes, maar samen optrekken en doen waar jij energie van krijgt.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-muted)' }}>
                <MapPin color="var(--color-primary)" />
                <div>
                  <strong>Het Leidse Volkshuis / De Leidse Huiskamer</strong><br />
                  Apothekersdijk 33<br />
                  2312 DD Leiden
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="#" className="glass-pill" style={{ padding: '0.8rem' }}>
                <Globe size={20} color="var(--color-accent-pink)" />
              </a>
              <a href="#" className="glass-pill" style={{ padding: '0.8rem' }}>
                <Mail size={20} color="var(--color-accent-blue)" />
              </a>
            </div>
          </div>
          
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px', background: '#222' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.8887453390596!2d4.487716867740316!3d52.16060237196918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5c7e8c8009c9f%3A0xbf5bdb7f4857c11!2sHet%20Leidse%20Volkshuis!5e0!3m2!1sen!2snl!4v1784627472086!5m2!1sen!2snl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'var(--color-text-muted)',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} De Leidse Huiskamer. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
