import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Home, Lightbulb, MessageCircle } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function About({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.about : t.about;

  const cards = [
    {
      title: t.about.card1Title,
      text: t.about.card1Text,
      icon: <Home size={28} color={isBusiness ? "#00C9FF" : "#fff"} />,
      bg: isBusiness ? "rgba(0, 201, 255, 0.1)" : "#8E2DE2"
    },
    {
      title: t.about.card2Title,
      text: t.about.card2Text,
      icon: <Lightbulb size={28} color={isBusiness ? "#FF0080" : "#fff"} />,
      bg: isBusiness ? "rgba(255, 0, 128, 0.1)" : "#00C9FF"
    },
    {
      title: t.about.card3Title,
      text: t.about.card3Text,
      icon: <MessageCircle size={28} color={isBusiness ? "#8E2DE2" : "#fff"} />,
      bg: isBusiness ? "rgba(142, 45, 226, 0.1)" : "#FF0080"
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {t.about.titleStart}
        <Text style={isBusiness ? styles.highlightBusiness : styles.highlight}>
          {t.about.titleHighlight}
        </Text>
      </Text>
      
      <Text style={styles.subheading}>{t.about.subtitle}</Text>

      <View style={[styles.cardContainer, isDesktop && styles.cardContainerDesktop]}>
        {cards.map((card, idx) => {
          const CardContent = (
            <>
              <View style={[styles.iconBox, { backgroundColor: card.bg }]}>
                {card.icon}
              </View>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardText}>{card.text}</Text>
            </>
          );

          if (isBusiness) {
            return (
              <View key={idx} style={[styles.cardBusiness, isDesktop && styles.cardDesktop]}>
                {CardContent}
              </View>
            );
          }

          return (
            <BlurView key={idx} intensity={30} tint="dark" style={[styles.cardYouth, isDesktop && styles.cardDesktop]}>
              {CardContent}
            </BlurView>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60, paddingBottom: 60, alignItems: 'center' },
  heading: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 15, textAlign: 'center' },
  highlight: { color: '#FF0080' },
  highlightBusiness: { color: '#00C9FF' }, // Subtler blue for business
  subheading: { color: '#b3b3b3', fontSize: 18, lineHeight: 28, marginBottom: 50, textAlign: 'center', paddingHorizontal: 10, maxWidth: 800 },
  
  cardContainer: { width: '100%', alignItems: 'center' },
  cardContainerDesktop: { flexDirection: 'row', justifyContent: 'center', gap: 30 },
  
  cardYouth: { padding: 30, borderRadius: 25, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', width: '100%', maxWidth: 350 },
  cardBusiness: { padding: 30, borderRadius: 25, marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.03)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', width: '100%', maxWidth: 350 },
  cardDesktop: { marginBottom: 0, flex: 1 },
  
  iconBox: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  cardText: { color: '#b3b3b3', fontSize: 16, lineHeight: 26 }
});
