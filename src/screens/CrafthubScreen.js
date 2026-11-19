import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { ArrowLeft, Brush, MapPin, UserCheck } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';

import CommunityNotice from '../components/CommunityNotice';

export default function CrafthubScreen({ route, navigation }) {
  const { t } = useLanguage();
  const isBusiness = route?.params?.version === 'Bedrijven' || route?.params?.version === 'business';
  const texts = (isBusiness && t.business?.crafthubScreen) ? t.business.crafthubScreen : t.crafthubScreen;

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home', { version: isBusiness ? 'Bedrijven' : 'Jongeren' });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={StyleSheet.absoluteFillObject} />

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton} accessibilityRole="button">
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{texts.header}</Text>
          <View style={{ width: 34 }} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={require('../images/huiskmaker-creatief.jpg')} style={styles.coverImage} resizeMode="cover" />

        <BlurView intensity={30} tint="dark" style={styles.highlightCard}>
          <Brush color="#8E2DE2" size={32} style={{ marginBottom: 15 }} />
          <Text style={styles.cardTitle}>{texts.cardTitle}</Text>
          <Text style={styles.dateText}>{texts.cardSub}</Text>
          <Text style={styles.subText}>{texts.cardSubExtra}</Text>
        </BlurView>

        <View style={styles.infoRow}>
          <View style={[styles.iconBox, { backgroundColor: '#00C9FF' }]}>
            <MapPin color="#fff" size={20} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{texts.locTitle}</Text>
            <Text style={styles.infoText}>{texts.locText}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={[styles.iconBox, { backgroundColor: '#FF0080' }]}>
            <UserCheck color="#fff" size={20} />
          </View>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>{texts.whoTitle}</Text>
            <Text style={styles.infoText}>{texts.whoText}</Text>
          </View>
        </View>

        <Text style={styles.description}>{texts.description}</Text>

        <CommunityNotice navigation={navigation} isBusiness={isBusiness} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0c29' },
  header: {
    paddingTop: Platform.OS === 'web' ? 20 : 60,
    paddingBottom: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  backButton: { padding: 5 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', flex: 1 },
  content: { padding: 20, paddingBottom: 40, width: '100%', maxWidth: 1200, alignSelf: 'center' },
  coverImage: { width: '100%', aspectRatio: 4/3, maxHeight: 480, borderRadius: 20, marginBottom: 20 },
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
  subText: { color: '#b3b3b3', fontSize: 14, textAlign: 'center' },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  iconBox: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  infoTextContainer: { marginLeft: 15, flex: 1 },
  infoTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  infoText: { color: '#b3b3b3', fontSize: 15 },
  description: { color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 26, marginTop: 20 }
});
