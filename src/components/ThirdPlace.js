import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function ThirdPlace({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.thirdPlace : t.thirdPlace;

  const CardWrapper = isBusiness ? View : BlurView;
  const wrapperProps = isBusiness ? { style: styles.businessCard } : { intensity: 30, tint: "dark", style: styles.card };

  return (
    <View style={styles.container}>
      <CardWrapper {...wrapperProps}>
        <Text style={styles.title}>
          {texts.titleStart}
          <Text style={isBusiness ? styles.highlightBusiness : styles.highlight}>
            {texts.titleHighlight}
          </Text>
        </Text>

        <Text style={styles.text}>{texts.text}</Text>

        <LinearGradient
          colors={isBusiness ? ['rgba(0,201,255,0.2)', 'rgba(0,201,255,0.05)'] : ['#8E2DE2', '#4A00E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          <Text style={styles.gradientTitle}>{texts.gradTitle}</Text>
          <Text style={styles.gradientText}>{texts.gradText}</Text>
        </LinearGradient>
      </CardWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, paddingBottom: 60, alignItems: 'center' },
  card: { padding: 30, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', width: '100%', maxWidth: 900 },
  businessCard: { padding: 30, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.03)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', width: '100%', maxWidth: 900 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 25, textAlign: 'center' },
  highlight: { color: '#00C9FF' },
  highlightBusiness: { color: '#00C9FF' },
  text: { color: '#b3b3b3', fontSize: 16, lineHeight: 28, marginBottom: 35 },
  gradientCard: { padding: 25, borderRadius: 20 },
  gradientTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  gradientText: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26 }
});
