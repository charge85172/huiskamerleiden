import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import Goals from '../components/Goals';
import ThirdPlace from '../components/ThirdPlace';
import Info from '../components/Info';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0f0c29', '#302b63', '#24243e']}
        style={StyleSheet.absoluteFillObject}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Navbar />
        <Hero />
        <About />
        <Activities navigation={navigation} />
        <Goals />
        <ThirdPlace />
        <Info />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0c29',
  },
  scrollContent: {
    paddingBottom: 40,
    paddingTop: 50,
  },
});
