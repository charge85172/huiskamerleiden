import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Target, Users, Search, MapPin } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Goals() {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <BlurView intensity={30} tint="dark" style={styles.blurCard}>
        <Text style={styles.title}>
          {t.goals.titleStart}<Text style={styles.highlight}>{t.goals.titleHighlight}</Text>
        </Text>
        
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Target color="#8E2DE2" size={24} />
            <Text style={styles.gridText}>{t.goals.grid1}</Text>
          </View>
          <View style={styles.gridItem}>
            <Users color="#00C9FF" size={24} />
            <Text style={styles.gridText}>{t.goals.grid2}</Text>
          </View>
          <View style={styles.gridItem}>
            <Search color="#FF0080" size={24} />
            <Text style={styles.gridText}>{t.goals.grid3}</Text>
          </View>
          <View style={styles.gridItem}>
            <MapPin color="#8E2DE2" size={24} />
            <Text style={styles.gridText}>{t.goals.grid4}</Text>
          </View>
        </View>

        <Text style={styles.text}>{t.goals.text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40 },
  blurCard: { padding: 30, borderRadius: 25, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 30, textAlign: 'center' },
  highlight: { color: '#8E2DE2' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 30 },
  gridItem: { width: '50%', flexDirection: 'row', alignItems: 'center', marginBottom: 25 },
  gridText: { color: '#fff', marginLeft: 15, fontSize: 18, fontWeight: '600' },
  text: { color: '#b3b3b3', fontSize: 16, lineHeight: 28 }
});
