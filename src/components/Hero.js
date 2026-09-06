import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Sparkles, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';
import HuiskamerLogo from './HuiskamerLogo';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <HuiskamerLogo size={140} color="#fe010b" animated={true} />
      </View>

      <BlurView intensity={30} tint="dark" style={styles.pill}>
        <Sparkles size={16} color="#00C9FF" />
        <Text style={styles.pillText}>{t.hero.pill}</Text>
      </BlurView>
      
      <Text style={styles.title}>
        {t.hero.titleStart}<Text style={styles.highlightPink}>{t.hero.titlePink}</Text>{t.hero.titleMid1}<Text style={styles.highlightCyan}>{t.hero.titleCyan}</Text>{t.hero.titleMid2}<Text style={styles.highlightPurple}>{t.hero.titlePurple}</Text>{t.hero.titleEnd}
      </Text>
      
      <Text style={styles.subtitle}>{t.hero.subtitle}</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity activeOpacity={0.8} style={styles.btnWrap}>
          <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryButton}>
            <Text style={styles.buttonText}>{t.hero.btn1}</Text>
            <ArrowRight color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <BlurView intensity={30} tint="dark" style={styles.imageContainer}>
        <Image 
          source={require('../images/huiskmaker-hartelijk-welkom.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(142, 45, 226, 0.4)', 'rgba(0, 201, 255, 0.4)']}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.imageOverlayBadge}>
          <Text style={styles.badgeText}>{t.hero.badge}</Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, alignItems: 'center' },
  logoWrap: { marginBottom: 30, alignItems: 'center' },
  pill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30, marginBottom: 30, overflow: 'hidden' },
  pillText: { color: '#fff', marginLeft: 10, fontWeight: '600', fontSize: 16 },
  title: { color: '#fff', fontSize: 42, fontWeight: 'bold', textAlign: 'center', marginBottom: 25, lineHeight: 52 },
  highlightPink: { color: '#FF0080' },
  highlightCyan: { color: '#00C9FF' },
  highlightPurple: { color: '#8E2DE2' },
  subtitle: { color: '#b3b3b3', fontSize: 18, textAlign: 'center', marginBottom: 40, lineHeight: 28, paddingHorizontal: 10 },
  buttonRow: { flexDirection: 'row', gap: 15, marginBottom: 50, flexWrap: 'wrap', justifyContent: 'center' },
  btnWrap: { marginBottom: 15 },
  primaryButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 35, paddingVertical: 18, borderRadius: 35 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  imageContainer: { width: '100%', aspectRatio: 1, maxHeight: 600, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  heroImage: { width: '100%', height: '100%', opacity: 0.8 },
  imageOverlayBadge: { position: 'absolute', bottom: 30, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 25, paddingVertical: 15, borderRadius: 30 },
  badgeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
