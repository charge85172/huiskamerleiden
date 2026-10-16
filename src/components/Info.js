import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MessagesSquare, Paintbrush, Coffee, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Info({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.info : t.info;

  const CardWrapper = isBusiness ? View : BlurView;
  const wrapperProps = isBusiness ? { style: styles.businessCard } : { intensity: 30, tint: "dark", style: styles.card };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {texts.titleStart}
        <Text style={isBusiness ? styles.highlightBusiness : styles.highlight}>
          {texts.titleHighlight}
        </Text>
      </Text>

      <CardWrapper {...wrapperProps}>
        <Coffee size={36} color={isBusiness ? '#00C9FF' : "#8E2DE2"} style={styles.icon} />
        <Text style={styles.cardTitle}>{texts.card1Title}</Text>
        <Text style={styles.cardText}>{texts.card1Text}</Text>
      </CardWrapper>

      <CardWrapper {...wrapperProps}>
        <Paintbrush size={36} color={isBusiness ? '#00C9FF' : "#00C9FF"} style={styles.icon} />
        <Text style={styles.cardTitle}>{texts.card2Title}</Text>
        <Text style={styles.cardText}>{texts.card2Text}</Text>
      </CardWrapper>

      <CardWrapper {...wrapperProps}>
        <MessagesSquare size={36} color={isBusiness ? '#00C9FF' : "#FF0080"} style={styles.icon} />
        <Text style={styles.cardTitle}>{texts.card3Title}</Text>
        <Text style={styles.cardText}>{texts.card3Text}</Text>
      </CardWrapper>

      <View style={styles.imageGrid}>
        <Image source={require('../images/huiskmaker-goed-gesprek.jpg')} style={styles.photo} />
        <Image source={require('../images/huiskmaker-plannen-maken.jpg')} style={[styles.photo, { marginTop: 15 }]} />
      </View>

      <LinearGradient
        colors={isBusiness ? ['rgba(0,201,255,0.2)', 'rgba(0,201,255,0.05)'] : ['#8E2DE2', '#4A00E0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCard}
      >
        <Text style={styles.gradientTitle}>{texts.gradTitle}</Text>
        <Text style={styles.gradientText}>{texts.gradText}</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  heading: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 40, textAlign: 'center' },
  highlight: { color: '#00C9FF' },
  highlightBusiness: { color: '#00C9FF' },
  card: { padding: 25, borderRadius: 25, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  businessCard: { padding: 25, borderRadius: 25, marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.03)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  icon: { marginBottom: 20 },
  cardTitle: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  cardText: { color: '#b3b3b3', fontSize: 16, lineHeight: 26 },
  imageGrid: { marginTop: 20, marginBottom: 40 },
  photo: { width: '100%', aspectRatio: 4/3, borderRadius: 20 },
  gradientCard: { padding: 30, borderRadius: 25, alignItems: 'center' },
  gradientTitle: { color: '#fff', fontSize: 26, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  gradientText: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26, textAlign: 'center' }
});
