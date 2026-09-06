import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Utensils, Brush } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function Activities({ navigation }) {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {t.activities.titleStart}<Text style={styles.highlight}>{t.activities.titleHighlight}</Text>
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Eetkamer')} activeOpacity={0.7}>
        <BlurView intensity={30} tint="dark" style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: '#FF0080' }]}>
            <Utensils size={24} color="#fff" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.cardTitle}>{t.activities.eetkamerTitle}</Text>
            <Text style={styles.cardSubtitle}>{t.activities.eetkamerSubtitle}</Text>
          </View>
        </BlurView>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Crafthub')} activeOpacity={0.7}>
        <BlurView intensity={30} tint="dark" style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: '#8E2DE2' }]}>
            <Brush size={24} color="#fff" />
          </View>
          <View style={styles.textContent}>
            <Text style={styles.cardTitle}>{t.activities.crafthubTitle}</Text>
            <Text style={styles.cardSubtitle}>{t.activities.crafthubSubtitle}</Text>
          </View>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 20 },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 30 },
  highlight: { color: '#00C9FF' },
  card: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  iconBox: { width: 60, height: 60, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginRight: 20 },
  textContent: { flex: 1 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  cardSubtitle: { color: '#b3b3b3', fontSize: 15 }
});
