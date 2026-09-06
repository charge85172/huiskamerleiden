import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';
import HuiskamerLogo from './HuiskamerLogo';

export default function Navbar() {
  const { toggleLanguage, t } = useLanguage();

  return (
    <View style={styles.container}>
      <BlurView intensity={30} tint="dark" style={styles.blurContainer}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <View style={{ marginRight: 10 }}>
              <HuiskamerLogo size={26} color="#fff" animated={false} />
            </View>
            <Text style={styles.logoText}>
              {t.ui.logoFirst}<Text style={styles.highlight}>{t.ui.logoHighlight}</Text>
            </Text>
          </View>
          
          <TouchableOpacity onPress={toggleLanguage} style={styles.langButton}>
            <Text style={styles.langText}>{t.ui.langBtn}</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginBottom: 20, zIndex: 100 },
  blurContainer: { borderRadius: 20, overflow: 'hidden', padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  highlight: { color: '#00C9FF' },
  langButton: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  langText: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
});
