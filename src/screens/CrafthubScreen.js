import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ArrowLeft, Brush, MapPin, UserCheck } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

export default function CrafthubScreen({ navigation }) {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={StyleSheet.absoluteFillObject} />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft color="#fff" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t.crafthubScreen.header}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../images/huiskmaker-creatief.jpg')} style={styles.coverImage} resizeMode="cover" />

        <BlurView intensity={30} tint="dark" style={styles.highlightCard}>
          <Brush color="#8E2DE2" size={32} style={{ marginBottom: 15 }} />
          <Text style={styles.cardTitle}>{t.crafthubScreen.cardTitle}</Text>
          <Text style={styles.dateText}>{t.crafthubScreen.cardSub}</Text>
          <Text style={styles.subText}>{t.crafthubScreen.cardSubExtra}</Text>
        </BlurView>

        <View style={styles.infoRow}>
          <View style={[styles.iconBox, { backgroundColor: '#00C9FF' }]}>
            <MapPin color="#fff" size={20} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{t.crafthubScreen.locTitle}</Text>
            <Text style={styles.infoText}>{t.crafthubScreen.locText}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={[styles.iconBox, { backgroundColor: '#FF0080' }]}>
            <UserCheck color="#fff" size={20} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{t.crafthubScreen.whoTitle}</Text>
            <Text style={styles.infoText}>{t.crafthubScreen.whoText}</Text>
          </View>
        </View>

        <Text style={styles.description}>{t.crafthubScreen.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0c29' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  content: { padding: 20, paddingBottom: 40 },
  coverImage: { width: '100%', aspectRatio: 4/3, borderRadius: 20, marginBottom: 20 },
  highlightCard: {
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    marginBottom: 30,
    overflow: 'hidden',
  },
  cardTitle: { color: '#fff', fontSize: 18, marginBottom: 10 },
  dateText: { color: '#8E2DE2', fontSize: 28, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  subText: { color: '#b3b3b3', fontSize: 14 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  iconBox: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  infoTextContainer: { marginLeft: 15 },
  infoTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  infoText: { color: '#b3b3b3', fontSize: 15 },
  description: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26, marginTop: 20 }
});
