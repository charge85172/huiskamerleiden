import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';
import HuiskamerLogo from './HuiskamerLogo';

export default function Navbar({ version = 'Jongeren', onVersionSwitch }) {
  const { toggleLanguage, t } = useLanguage();
  const { width } = useWindowDimensions();

  const isBusiness = version === 'Bedrijven' || version === 'business';
  const isWide = width > 900;
  const isVeryNarrow = width < 420;
  const centerBusinessHeader = isBusiness && isWide;

  const NavbarContent = (
    <View style={[styles.row, centerBusinessHeader && styles.rowBusiness]}>
      <View style={[styles.logoContainer, centerBusinessHeader && styles.logoContainerBusiness]}>
        <View style={{ marginRight: 10 }}>
          <HuiskamerLogo size={isBusiness ? 32 : 26} color={isBusiness ? "#fff" : "#fe010b"} animated={false} />
        </View>
        <Text style={[styles.logoText, isVeryNarrow && styles.logoTextNarrow]} numberOfLines={2}>
          {t.ui.logoFirst}<Text style={!isBusiness ? styles.highlight : undefined}>{t.ui.logoHighlight}</Text>
        </Text>
      </View>
      <View style={[styles.rightActions, centerBusinessHeader && styles.rightActionsBusiness]}>
        {onVersionSwitch && (
          <TouchableOpacity onPress={onVersionSwitch} style={styles.switchButton} accessibilityRole="button">
            <Text style={styles.switchText}>
              {isBusiness ? t.navbar.switchToYouth : t.navbar.switchToBusiness}
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={toggleLanguage} style={styles.langButton} accessibilityRole="button">
          <Text style={styles.langText}>{t.ui.langBtn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {isBusiness ? (
        <View style={styles.businessContainer}>
          {NavbarContent}
        </View>
      ) : (
        <BlurView intensity={30} tint="dark" style={styles.blurContainer}>
          {NavbarContent}
        </BlurView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginBottom: 20, zIndex: 100, width: '100%', maxWidth: 1200, alignSelf: 'center' },
  blurContainer: { borderRadius: 20, overflow: 'hidden', padding: 15 },
  businessContainer: { paddingVertical: 15, position: 'relative' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  rowBusiness: { justifyContent: 'center' },
  logoContainer: { flexDirection: 'row', alignItems: 'center', flexShrink: 1 },
  logoContainerBusiness: { alignItems: 'center', justifyContent: 'center' },
  logoText: { color: '#fff', fontSize: 20, fontWeight: 'bold', flexShrink: 1 },
  logoTextNarrow: { fontSize: 17 },
  highlight: { color: '#00C9FF' },
  rightActions: { flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap', flexShrink: 1 },
  rightActionsBusiness: { position: 'absolute', right: 0 },
  switchButton: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 12, flexShrink: 1 },
  switchText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  langButton: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12 },
  langText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});
