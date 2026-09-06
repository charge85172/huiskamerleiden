import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home, Lightbulb, MessageCircle } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {t.about.titleStart}<Text style={styles.highlight}>{t.about.titleHighlight}</Text>
      </Text>
      
      <Text style={styles.subheading}>{t.about.subtitle}</Text>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#8E2DE2' }]}>
          <Home size={28} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>{t.about.card1Title}</Text>
        <Text style={styles.cardText}>{t.about.card1Text}</Text>
      </BlurView>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#00C9FF' }]}>
          <Lightbulb size={28} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>{t.about.card2Title}</Text>
        <Text style={styles.cardText}>{t.about.card2Text}</Text>
      </BlurView>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#FF0080' }]}>
          <MessageCircle size={28} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>{t.about.card3Title}</Text>
        <Text style={styles.cardText}>{t.about.card3Text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  heading: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 15, textAlign: 'center' },
  highlight: { color: '#FF0080' },
  subheading: { color: '#b3b3b3', fontSize: 18, lineHeight: 28, marginBottom: 40, textAlign: 'center', paddingHorizontal: 10 },
  card: { padding: 25, borderRadius: 25, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  iconBox: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  cardText: { color: '#b3b3b3', fontSize: 16, lineHeight: 24 }
});
