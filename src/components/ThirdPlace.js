import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function ThirdPlace() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <BlurView intensity={30} tint="dark" style={styles.card}>
        <Text style={styles.title}>
          {t.thirdPlace.titleStart}<Text style={styles.highlight}>{t.thirdPlace.titleHighlight}</Text>
        </Text>

        <Text style={styles.text}>{t.thirdPlace.text}</Text>

        <LinearGradient
          colors={['#8E2DE2', '#4A00E0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          <Text style={styles.gradientTitle}>{t.thirdPlace.gradTitle}</Text>
          <Text style={styles.gradientText}>{t.thirdPlace.gradText}</Text>
        </LinearGradient>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, paddingBottom: 60 },
  card: { padding: 30, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff', marginBottom: 25, textAlign: 'center' },
  highlight: { color: '#00C9FF' },
  text: { color: '#b3b3b3', fontSize: 16, lineHeight: 28, marginBottom: 35 },
  gradientCard: { padding: 25, borderRadius: 20 },
  gradientTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  gradientText: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26 }
});
