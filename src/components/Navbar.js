import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Home } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
        <View style={styles.logoContainer}>
          <Home size={24} color="#38bdf8" />
          <Text style={styles.logoText}>
            De Leidse <Text style={styles.highlight}>Huiskamer</Text>
          </Text>
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  blurContainer: {
    padding: 15,
    paddingTop: 50, // Space for status bar on mobile
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  highlight: {
    color: '#38bdf8',
  }
});
