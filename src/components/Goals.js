import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Target, Users, Search, MapPin } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Goals({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const isBusiness = version === 'Bedrijven';
  const texts = isBusiness ? t.business.goals : t.goals;

  const GridContent = () => (
    <>
      <Text style={styles.title}>
        {texts.titleStart}
        <Text style={isBusiness ? styles.highlightBusiness : styles.highlight}>
          {texts.titleHighlight}
        </Text>
      </Text>
      
      <View style={styles.layoutContainer}>
        <View style={[styles.textContent, isDesktop && { flex: 1, paddingRight: 40 }]}>
          <Text style={styles.text}>{texts.text}</Text>
          
          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <Target color={isBusiness ? "#8E2DE2" : "#8E2DE2"} size={24} />
              <Text style={styles.gridText}>{texts.grid1}</Text>
            </View>
            <View style={styles.gridItem}>
              <Users color={isBusiness ? "#00C9FF" : "#00C9FF"} size={24} />
              <Text style={styles.gridText}>{texts.grid2}</Text>
            </View>
            <View style={styles.gridItem}>
              <Search color={isBusiness ? "#FF0080" : "#FF0080"} size={24} />
              <Text style={styles.gridText}>{texts.grid3}</Text>
            </View>
            <View style={styles.gridItem}>
              <MapPin color={isBusiness ? "#8E2DE2" : "#8E2DE2"} size={24} />
              <Text style={styles.gridText}>{texts.grid4}</Text>
            </View>
          </View>
        </View>

        {!isBusiness && isDesktop && (
          <View style={styles.imagePlaceholder}>
            {/* Ruimte voor een afbeelding (zichtbaar in screenshot drukke variant 2) */}
          </View>
        )}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {isBusiness ? (
        <View style={styles.businessCard}>
          <GridContent />
        </View>
      ) : (
        <BlurView intensity={30} tint="dark" style={styles.blurCard}>
          <GridContent />
        </BlurView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, alignItems: 'center' },
  blurCard: { padding: 40, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', width: '100%', maxWidth: 1200 },
  businessCard: { padding: 40, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.03)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', width: '100%', maxWidth: 1200 },
  
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 40 },
  highlight: { color: '#8E2DE2' },
  highlightBusiness: { color: '#00C9FF' },
  
  layoutContainer: { flexDirection: 'row', width: '100%' },
  textContent: { width: '100%' },
  
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 30 },
  gridItem: { width: '50%', flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  gridText: { color: '#fff', marginLeft: 15, fontSize: 18, fontWeight: '600' },
  
  text: { color: '#b3b3b3', fontSize: 16, lineHeight: 28 },
  
  imagePlaceholder: { flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 20 }
});
