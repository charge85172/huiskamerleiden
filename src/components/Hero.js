import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { Sparkles, ArrowRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.hero : t.hero;

  if (isBusiness) {
    return (
      <View style={styles.businessContainer}>
        <View style={styles.businessPill}>
          <Sparkles size={16} color="#00C9FF" />
          <Text style={styles.businessPillText}>{texts.pill}</Text>
        </View>
        <Text style={styles.businessTitle}>
          {texts.titleStart}{texts.titlePink}{texts.titleMid1}{texts.titleCyan}{texts.titleMid2}{texts.titlePurple}{texts.titleEnd}
        </Text>
        <Text style={styles.businessSubtitle}>{texts.subtitle}</Text>
        
        <TouchableOpacity activeOpacity={0.8} style={styles.businessBtnWrap}>
          <LinearGradient colors={['#00C9FF', '#4A00E0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryButton}>
            <Text style={styles.buttonText}>{texts.btn1}</Text>
            <ArrowRight color="#fff" size={20} />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.businessImageWrapper}>
          <Image 
            source={require('../images/huiskmaker-hartelijk-welkom.jpg')}
            style={styles.businessHeroImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlayBadge}>
            <Text style={styles.badgeText}>{texts.badge}</Text>
          </View>
        </View>
      </View>
    );
  }

  // Jongerenversie
  return (
    <View style={[styles.youthContainer, isDesktop && styles.youthContainerDesktop]}>
      <View style={[styles.youthTextSide, isDesktop && { flex: 1, paddingRight: 40, alignItems: 'flex-start' }]}>
        <BlurView intensity={30} tint="dark" style={styles.pill}>
          <Sparkles size={16} color="#00C9FF" />
          <Text style={styles.pillText}>{texts.pill}</Text>
        </BlurView>
        
        <Text style={[styles.title, isDesktop && { textAlign: 'left' }]}>
          {texts.titleStart}<Text style={styles.highlightPink}>{texts.titlePink}</Text>{texts.titleMid1}<Text style={styles.highlightCyan}>{texts.titleCyan}</Text>{texts.titleMid2}<Text style={styles.highlightPurple}>{texts.titlePurple}</Text>{texts.titleEnd}
        </Text>
        
        <Text style={[styles.subtitle, isDesktop && { textAlign: 'left' }]}>{texts.subtitle}</Text>
        
        <View style={[styles.buttonRow, isDesktop && { justifyContent: 'flex-start' }]}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnWrap}>
            <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryButton}>
              <Text style={styles.buttonText}>{texts.btn1}</Text>
              <ArrowRight color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.youthImageSide, isDesktop && { flex: 1, marginTop: 0 }]}>
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
            <Text style={styles.badgeText}>{texts.badge}</Text>
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Shared
  primaryButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 35, paddingVertical: 18, borderRadius: 35 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  imageOverlayBadge: { position: 'absolute', bottom: 30, alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 25, paddingVertical: 15, borderRadius: 30 },
  badgeText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  // Business Styles
  businessContainer: { padding: 20, paddingTop: 40, alignItems: 'center' },
  businessPill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30, marginBottom: 30, backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  businessPillText: { color: '#fff', marginLeft: 10, fontWeight: '600', fontSize: 16 },
  businessTitle: { color: '#fff', fontSize: 46, fontWeight: 'bold', textAlign: 'center', marginBottom: 25, lineHeight: 56, maxWidth: 900 },
  businessSubtitle: { color: '#b3b3b3', fontSize: 18, textAlign: 'center', marginBottom: 40, lineHeight: 28, paddingHorizontal: 10, maxWidth: 700 },
  businessBtnWrap: { marginBottom: 60 },
  businessImageWrapper: { width: '100%', aspectRatio: 21/9, borderRadius: 25, overflow: 'hidden' },
  businessHeroImage: { width: '100%', height: '100%' },

  // Youth Styles
  youthContainer: { padding: 20, paddingTop: 40, alignItems: 'center' },
  youthContainerDesktop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  youthTextSide: { alignItems: 'center', width: '100%' },
  youthImageSide: { width: '100%', alignItems: 'center', marginTop: 40 },
  pill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30, marginBottom: 30, overflow: 'hidden' },
  pillText: { color: '#fff', marginLeft: 10, fontWeight: '600', fontSize: 16 },
  title: { color: '#fff', fontSize: 42, fontWeight: 'bold', textAlign: 'center', marginBottom: 25, lineHeight: 52 },
  highlightPink: { color: '#FF0080' },
  highlightCyan: { color: '#00C9FF' },
  highlightPurple: { color: '#8E2DE2' },
  subtitle: { color: '#b3b3b3', fontSize: 18, textAlign: 'center', marginBottom: 40, lineHeight: 28, paddingHorizontal: 10 },
  buttonRow: { flexDirection: 'row', gap: 15, marginBottom: 20, flexWrap: 'wrap', justifyContent: 'center' },
  btnWrap: { marginBottom: 15 },
  imageContainer: { width: '100%', aspectRatio: 1, maxHeight: 600, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  heroImage: { width: '100%', height: '100%', opacity: 0.8 },
});
