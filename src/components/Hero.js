import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ArrowRight, Users, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

export default function Hero() {
  return (
    <View style={styles.container}>
      <BlurView intensity={20} tint="dark" style={styles.pill}>
        <Sparkles size={16} color="#38bdf8" />
        <Text style={styles.pillText}>Voor en door jongeren</Text>
      </BlurView>
      
      <Text style={styles.title}>
        Jouw plek om te <Text style={styles.highlightPink}>chillen</Text>, te <Text style={styles.highlightBlue}>groeien</Text> en jezelf te zijn.
      </Text>
      
      <Text style={styles.subtitle}>
        Zoek je een plek waar je gewoon binnen kunt lopen, zonder gedoe? Welkom bij de Huiskamer. Een spot voor en door jongeren tussen de 17 en 30+ jaar.
      </Text>
      
      <TouchableOpacity>
        <LinearGradient
          colors={['#38bdf8', '#818cf8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonTextPrimary}>Kom eens langs</Text>
          <ArrowRight size={18} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonTextSecondary}>Wat is de Huiskamer?</Text>
        <Users size={18} color="#fff" />
      </TouchableOpacity>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800' }} 
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(56, 189, 248, 0.3)', 'rgba(129, 140, 248, 0.3)']}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 120, // push down for navbar
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    overflow: 'hidden',
  },
  pillText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightPink: {
    color: '#818cf8',
  },
  highlightBlue: {
    color: '#34d399',
  },
  subtitle: {
    color: '#b3b3b3',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 15,
    width: 250,
  },
  buttonTextPrimary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    marginBottom: 40,
    width: 250,
  },
  buttonTextSecondary: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
