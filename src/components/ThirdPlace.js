import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Coffee, HeartHandshake, Smile } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ThirdPlace() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Jouw <Text style={styles.highlight}>Third Place</Text>
      </Text>
      <Text style={styles.subheading}>
        Een plek buiten school, werk of gezin waar jongvolwassen in een huiselijke setting elkaar kunnen ontmoeten.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Samen de eenzaamheid tegengaan</Text>
        <Text style={styles.text}>
          Jongvolwassenen voelen zich regelmatig eenzaam en zitten vaak in hun eigen (online) bubbel. De HK wil hier iets aan doen door alle jongeren en studenten een plek te geven waar ze naartoe kunnen om elkaar te ontmoeten. Dit kan door samen te eten of op een andere manier in sociaal contact komen.
        </Text>
        <View style={styles.pillContainer}>
          <View style={styles.pill}>
            <Coffee size={16} color="#fff" />
            <Text style={styles.pillText}>Samen Eten</Text>
          </View>
          <View style={styles.pill}>
            <Smile size={16} color="#fff" />
            <Text style={styles.pillText}>Sociaal Contact</Text>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={['#38bdf8', '#818cf8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientCard}
      >
        <Text style={styles.gradientTitle}>Een vraag aan de stad</Text>
        <Text style={styles.gradientText}>
          Door de krachten te bundelen van alle organisaties in Leiden die aanbod hebben voor jongeren, maar zich versnipperd over de stad bevinden, willen we dé plek én vooral een verbindingspunt zijn. We hopen dat jongeren en organisaties elkaar zo beter kunnen vinden.
        </Text>
        <View style={styles.footerLine}>
          <HeartHandshake size={20} color="#fff" />
          <Text style={styles.footerText}>Voor en door onze stad. Werk met ons samen!</Text>
        </View>
      </LinearGradient>
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
    color: '#00C9FF',
  },
  subheading: {
    color: '#b3b3b3',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00C9FF',
    marginBottom: 15,
  },
  text: {
    color: '#b3b3b3',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  pillText: {
    color: '#fff',
    fontWeight: '500',
  },
  gradientCard: {
    padding: 25,
    borderRadius: 20,
  },
  gradientTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  gradientText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  footerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
  }
});
