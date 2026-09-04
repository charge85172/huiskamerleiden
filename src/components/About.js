import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home, Lightbulb, MessageCircle } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Waarom moet ik <Text style={styles.highlight}>eens langs?</Text>
      </Text>
      <Text style={styles.subheading}>
        Heb je een tof idee, mooie plannen of wil je gewoon even bijpraten? Kom eens langs bij de Leidse Huiskamer.
      </Text>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#818cf8' }]}>
          <Home size={24} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>Ontmoetingsplek</Text>
        <Text style={styles.cardText}>
          Een huiskamer als ontmoetingsplek voor jongvolwassenen waar ze hun eigen community kunnen bouwen.
        </Text>
      </BlurView>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#38bdf8' }]}>
          <Lightbulb size={24} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>Passie Delen</Text>
        <Text style={styles.cardText}>
          Een plek waar jongeren hun passie kunnen delen en beoefenen, talenten inzetten en skills ontwikkelen.
        </Text>
      </BlurView>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <View style={[styles.iconBox, { backgroundColor: '#34d399' }]}>
          <MessageCircle size={24} color="#fff" />
        </View>
        <Text style={styles.cardTitle}>Continuïteit</Text>
        <Text style={styles.cardText}>
          De HK is bedoeld als plek om continuïteit te bieden aan jongvolwassenen. Een community voor en door jongeren.
        </Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    color: '#38bdf8',
  },
  subheading: {
    color: '#b3b3b3',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  card: {
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    color: '#b3b3b3',
    lineHeight: 22,
  }
});
