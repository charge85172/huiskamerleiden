import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Utensils, Brush } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Activities({ version = 'Jongeren', navigation }) {
  const { t } = useLanguage();
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.activities : t.activities;

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

      <TouchableOpacity onPress={() => navigation.navigate('Eetkamer')} activeOpacity={0.7}>
        <CardWrapper {...wrapperProps}>
          <View style={[styles.iconBox, { backgroundColor: isBusiness ? 'rgba(255,0,128,0.1)' : '#FF0080' }]}>
            <Utensils size={24} color={isBusiness ? '#FF0080' : "#fff"} />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.cardTitle}>{texts.eetkamerTitle}</Text>
            <Text style={styles.cardSubtitle}>{texts.eetkamerSubtitle}</Text>
          </View>
        </CardWrapper>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Crafthub')} activeOpacity={0.7}>
        <CardWrapper {...wrapperProps}>
          <View style={[styles.iconBox, { backgroundColor: isBusiness ? 'rgba(142,45,226,0.1)' : '#8E2DE2' }]}>
            <Brush size={24} color={isBusiness ? '#8E2DE2' : "#fff"} />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.cardTitle}>{texts.crafthubTitle}</Text>
            <Text style={styles.cardSubtitle}>{texts.crafthubSubtitle}</Text>
          </View>
        </CardWrapper>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 20 },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 30 },
  highlight: { color: '#00C9FF' },
  highlightBusiness: { color: '#8E2DE2' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  businessCard: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.03)' },
  iconBox: { width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginRight: 20 },
  textContent: { flex: 1 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  cardSubtitle: { color: '#b3b3b3', fontSize: 15 }
});
