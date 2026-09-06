import React, { createContext, useState, useContext } from 'react';
import { HuiskamerText } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('nl'); // 'nl' or 'en'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'nl' ? 'en' : 'nl');
  };

  const t = HuiskamerText[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
