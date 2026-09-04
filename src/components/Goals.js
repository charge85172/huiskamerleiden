import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Target, Users, MapPin, Search } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Goals() {
  return (
    <View style={styles.container}>
      <BlurView intensity={20} tint="dark" style={styles.card}>
        <Text style={styles.heading}>
          Het <Text style={styles.highlight}>Doel</Text> van de Huiskamer
        </Text>
        
        <Text style={styles.text}>
          Een pluriforme community voor en door jongvolwassenen van alle achtergronden en levensstijlen. Die fungeert als ontmoetingsplek en het uitbreiden van netwerk.
        </Text>
        <Text style={styles.text}>
          Maar ook een plek voor alle vragen die je als jongvolwassenen (financieel, psychologisch of sociaal) zou kunnen hebben. Daarnaast wordt de Huiskamer ook een plek voor jonge makers, waarbij we de ruimte en het platform bieden om aan de slag te gaan met hun eigen ideeën.
        </Text>

        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Target color="#818cf8" size={20} />
            <Text style={styles.gridText}>Ontwikkelen</Text>
          </View>
          <View style={styles.gridItem}>
            <Users color="#38bdf8" size={20} />
            <Text style={styles.gridText}>Community</Text>
          </View>
          <View style={styles.gridItem}>
            <Search color="#34d399" size={20} />
            <Text style={styles.gridText}>Netwerk</Text>
          </View>
          <View style={styles.gridItem}>
            <MapPin color="#818cf8" size={20} />
            <Text style={styles.gridText}>Centrale Plek</Text>
          </View>
        </View>
        
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=800' }}
          style={styles.image}
        />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  highlight: {
    color: '#38bdf8',
  },
  text: {
    color: '#b3b3b3',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
  },
  gridItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  gridText: {
    color: '#fff',
    fontWeight: '500',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  }
});
