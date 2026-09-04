import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MessagesSquare, Paintbrush, Coffee, ArrowRight } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

export default function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Wat kun je <Text style={styles.highlight}>hier doen?</Text>
      </Text>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <Coffee size={32} color="#818cf8" style={styles.icon} />
        <Text style={styles.cardTitle}>Ontmoeten</Text>
        <Text style={styles.cardText}>
          Chill met mensen die in dezelfde fase zitten als jij. Of je nu studeert, werkt of even tussen de bedrijven door zit: hier vind je je community.
        </Text>
      </BlurView>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <Paintbrush size={32} color="#38bdf8" style={styles.icon} />
        <Text style={styles.cardTitle}>Je passie delen</Text>
        <Text style={styles.cardText}>
          Heb je een vette skill of hobby? In de HK krijg je de ruimte om je talenten verder te ontwikkelen of anderen iets te leren.
        </Text>
      </BlurView>

      <BlurView intensity={20} tint="dark" style={styles.card}>
        <MessagesSquare size={32} color="#34d399" style={styles.icon} />
        <Text style={styles.cardTitle}>Echt praten</Text>
        <Text style={styles.cardText}>
          In de HK hoef je het niet alleen uit te vogelen. Hier voeren we de gesprekken die er echt toe doen—over wie je bent, je toekomst of je week.
        </Text>
      </BlurView>

      <LinearGradient
        colors={['#38bdf8', '#818cf8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCard}
      >
        <Text style={styles.gradientTitle}>Ruimte voor jouw eigen ding</Text>
        <Text style={styles.gradientText}>
          De HK is van ons allemaal. We letten er samen op dat iedereen zich hier welkom voelt en dat niemand wordt buitengesloten. Zie de Huiskamer als een paraplu: daaronder is plek voor allerlei verschillende kleine groepjes en activiteiten.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kom een keer langs</Text>
          <ArrowRight size={20} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)', // Slight dark background overlay
    paddingVertical: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  highlight: {
    color: '#38bdf8',
  },
  card: {
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  icon: {
    marginBottom: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    color: '#b3b3b3',
    lineHeight: 24,
    fontSize: 16,
  },
  gradientCard: {
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  gradientTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  gradientText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  }
});
