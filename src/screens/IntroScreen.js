import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Animated, LayoutAnimation, Platform, UIManager, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HuiskamerLogo from '../components/HuiskamerLogo';
import { useLanguage } from '../context/LanguageContext';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function IntroScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const { toggleLanguage, t } = useLanguage();
  const isDesktop = width > 768;
  const [showContent, setShowContent] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timerRef = useRef(null);

  const startTimer = () => {
    let timeLeft = 10;
    setCountdown(timeLeft);
    timerRef.current = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timerRef.current);
        navigation.replace('Home', { version: isDesktop ? 'Bedrijven' : 'Jongeren' });
      }
    }, 1000);
  };

  const handleAnimationComplete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowContent(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    startTimer();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNavigate = (target) => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigation.replace('Home', { version: target });
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={StyleSheet.absoluteFillObject} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleLanguage} style={styles.langButton}>
            <Text style={styles.langText}>{t.ui.langBtn}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoContainer}>
          <HuiskamerLogo size={180} color="#fe010b" animated={true} onAnimationComplete={handleAnimationComplete} />
        </View>

      {showContent && (
        <Animated.View style={[styles.textContent, { opacity: fadeAnim }]}>
          <Text style={styles.welcomeText}>
            {t.intro.welcomeText}
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonWrap}
              onPress={() => handleNavigate('Jongeren')}
            >
              <LinearGradient colors={['#00C9FF', '#92FE9D']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
                <Text style={styles.buttonText}>
                  {t.intro.youthBtn} {!isDesktop ? `(${countdown}s)` : ''}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonWrap}
              onPress={() => handleNavigate('Bedrijven')}
            >
              <LinearGradient colors={['#8E2DE2', '#4A00E0']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
                <Text style={styles.buttonText}>
                  {t.intro.businessBtn} {isDesktop ? `(${countdown}s)` : ''}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0c29',
  },
  safeArea: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  langButton: { 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 12 
  },
  langText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  textContent: {
    width: '100%',
    maxWidth: 700,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    width: '100%',
  },
  buttonWrap: {
    marginBottom: 15,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 320,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
