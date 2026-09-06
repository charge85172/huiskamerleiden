import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MessagesSquare, Paintbrush, Coffee, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Info() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {t.info.titleStart}<Text style={styles.highlight}>{t.info.titleHighlight}</Text>
      </Text>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <Coffee size={36} color="#8E2DE2" style={styles.icon} />
        <Text style={styles.cardTitle}>{t.info.card1Title}</Text>
        <Text style={styles.cardText}>{t.info.card1Text}</Text>
      </BlurView>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <Paintbrush size={36} color="#00C9FF" style={styles.icon} />
        <Text style={styles.cardTitle}>{t.info.card2Title}</Text>
        <Text style={styles.cardText}>{t.info.card2Text}</Text>
      </BlurView>

      <BlurView intensity={30} tint="dark" style={styles.card}>
        <MessagesSquare size={36} color="#FF0080" style={styles.icon} />
        <Text style={styles.cardTitle}>{t.info.card3Title}</Text>
        <Text style={styles.cardText}>{t.info.card3Text}</Text>
      </BlurView>

      <View style={styles.imageGrid}>
        <Image source={require('../images/huiskmaker-goed-gesprek.jpg')} style={styles.photo} />
        <Image source={require('../images/huiskmaker-plannen-maken.jpg')} style={[styles.photo, { marginTop: 15 }]} />
      </View>

      <LinearGradient
        colors={['#8E2DE2', '#4A00E0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCard}
      >
        <Text style={styles.gradientTitle}>{t.info.gradTitle}</Text>
        <Text style={styles.gradientText}>{t.info.gradText}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  heading: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 40, textAlign: 'center' },
  highlight: { color: '#00C9FF' },
  card: { padding: 25, borderRadius: 25, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  icon: { marginBottom: 20 },
  cardTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  cardText: { color: '#b3b3b3', fontSize: 16, lineHeight: 26 },
  imageGrid: { marginTop: 20, marginBottom: 40 },
  photo: { width: '100%', aspectRatio: 4/3, borderRadius: 20 },
  gradientCard: { padding: 30, borderRadius: 25, alignItems: 'center' },
  gradientTitle: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  gradientText: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26, textAlign: 'center' }
});
