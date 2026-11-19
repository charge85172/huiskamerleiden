import React, { useState, useEffect, useRef } from 'react';
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

export default function HomeScreen({ route, navigation }) {
  const [version, setVersion] = useState(route.params?.version || 'Jongeren');
  const scrollViewRef = useRef(null);
  const activitiesYRef = useRef(0);
  const footerYRef = useRef(0);

  useEffect(() => {
    if (route.params?.version && route.params.version !== version) {
      setVersion(route.params.version);
    }
  }, [route.params?.version]);

  const toggleVersion = () => {
    const next = version === 'Jongeren' ? 'Bedrijven' : 'Jongeren';
    setVersion(next);
    navigation.setParams({ version: next });
  };

  const scrollToActivities = () => {
    scrollViewRef.current?.scrollTo({ y: activitiesYRef.current, animated: true });
  };

  const scrollToFooter = () => {
    scrollViewRef.current?.scrollTo({ y: footerYRef.current, animated: true });
  };

  const handleHeroContact = () => {
    if (version === 'Bedrijven' || version === 'business') {
      scrollToFooter();
    } else {
      navigation.navigate('CommunityForm', { version: 'Jongeren' });
    }
  };

  return (
    <View style={[styles.container, version === 'Bedrijven' && { backgroundColor: '#1a202c' }]}>
      {version === 'Jongeren' && (
        <LinearGradient
          colors={['#0f0c29', '#302b63', '#24243e']}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContent}>
        <Navbar version={version} onVersionSwitch={toggleVersion} />
        <Hero
          version={version}
          onVisitPress={scrollToActivities}
          onContactPress={handleHeroContact}
        />
        <About version={version} />
        <View
          onLayout={(event) => {
            activitiesYRef.current = event.nativeEvent.layout.y;
          }}
        >
          <Activities version={version} navigation={navigation} />
        </View>
        <Goals version={version} />
        <ThirdPlace version={version} />
        <Info version={version} />
        <View
          onLayout={(event) => {
            footerYRef.current = event.nativeEvent.layout.y;
          }}
        >
          <Footer version={version} />
        </View>
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
