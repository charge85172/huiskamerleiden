import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { ArrowLeft, CheckCircle2, ShieldCheck, Heart, AlertCircle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CommunityFormScreen({ navigation }) {
  const { t } = useLanguage();
  const formTexts = t.communityForm;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const timerRef = useRef(null);

  const handleSubmit = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = true;
    if (!age.trim()) newErrors.age = true;
    if (!phone.trim()) newErrors.phone = true;
    if (!source.trim()) newErrors.source = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      let secondsLeft = 5;
      setCountdown(secondsLeft);
      timerRef.current = setInterval(() => {
        secondsLeft -= 1;
        setCountdown(secondsLeft);
        if (secondsLeft <= 0) {
          clearInterval(timerRef.current);
          navigation.goBack();
        }
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isSubmitted, navigation]);

  const handleReturnNow = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={StyleSheet.absoluteFillObject} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft color="#fff" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{formTexts.header}</Text>
          <View style={{ width: 24 }} />
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {isSubmitted ? (
              <BlurView intensity={35} tint="dark" style={styles.successCard}>
                <View style={styles.successIconCircle}>
                  <CheckCircle2 color="#25D366" size={60} />
                </View>

                <Text style={styles.successTitle}>{formTexts.successTitle}</Text>
                
                <View style={styles.safetyBadge}>
                  <ShieldCheck color="#25D366" size={18} />
                  <Text style={styles.safetyBadgeText}>Veilige & Gecontroleerde Toegang</Text>
                </View>

                <Text style={styles.successMessage}>{formTexts.successMessage}</Text>

                <View style={styles.countdownBox}>
                  <Text style={styles.countdownText}>
                    {formTexts.successCountdown}{' '}
                    <Text style={styles.countdownNumber}>{countdown}</Text>{' '}
                    {formTexts.seconds}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.returnButton}
                  onPress={handleReturnNow}
                  activeOpacity={0.8}
                >
                  <Text style={styles.returnButtonText}>{formTexts.backBtn}</Text>
                </TouchableOpacity>
              </BlurView>
            ) : (
              <View style={styles.formWrapper}>
                <BlurView intensity={30} tint="dark" style={styles.introCard}>
                  <View style={styles.introHeader}>
                    <View style={styles.whatsappBadge}>
                      <WhatsAppIcon size={26} color="#25D366" />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12 }}>
                      <Text style={styles.introTitle}>{formTexts.title}</Text>
                      <Text style={styles.introSubtitle}>{formTexts.subtitle}</Text>
                    </View>
                  </View>
                </BlurView>

                {Object.keys(errors).length > 0 && (
                  <View style={styles.errorBanner}>
                    <AlertCircle color="#ff4d4f" size={18} />
                    <Text style={styles.errorBannerText}>{formTexts.requiredError}</Text>
                  </View>
                )}

                {/* Preferred Name */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.nameLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.name && styles.inputError]}
                    placeholder={formTexts.namePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    value={name}
                    onChangeText={setName}
                  />
                </View>

                {/* Age */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.ageLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.age && styles.inputError]}
                    placeholder={formTexts.agePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={setAge}
                  />
                </View>

                {/* WhatsApp Phone */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.phoneLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.phone && styles.inputError]}
                    placeholder={formTexts.phonePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>

                {/* Email (Optional) */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.emailLabel}</Text>
                  <TextInput
                    style={styles.input}
                    placeholder={formTexts.emailPlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>

                {/* Source */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.sourceLabel}</Text>
                  <TextInput
                    style={[styles.input, styles.textArea, errors.source && styles.inputError]}
                    placeholder={formTexts.sourcePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    multiline
                    numberOfLines={3}
                    textAlignVertical="top"
                    value={source}
                    onChangeText={setSource}
                  />
                </View>

                {/* Submit button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.submitBtnWrap}
                  onPress={handleSubmit}
                >
                  <LinearGradient
                    colors={['#25D366', '#128C7E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.submitButton}
                  >
                    <WhatsAppIcon size={22} color="#fff" style={{ marginRight: 10 }} />
                    <Text style={styles.submitButtonText}>{formTexts.submitBtn}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.safetyBox}>
                  <ShieldCheck color="#25D366" size={16} />
                  <Text style={styles.safetyText}>{formTexts.safetyNote}</Text>
                </View>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 40 : 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  backButton: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 50,
  },
  formWrapper: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
  },
  introCard: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(37, 211, 102, 0.3)',
    backgroundColor: 'rgba(37, 211, 102, 0.04)',
    overflow: 'hidden',
  },
  introHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whatsappBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(37, 211, 102, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  introSubtitle: {
    color: '#d1d5db',
    fontSize: 14,
    lineHeight: 20,
  },
  errorBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 77, 79, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 77, 79, 0.4)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    gap: 8,
  },
  errorBannerText: {
    color: '#ff7875',
    fontSize: 14,
    fontWeight: '500',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#fff',
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4d4f',
    backgroundColor: 'rgba(255, 77, 79, 0.08)',
  },
  textArea: {
    minHeight: 90,
  },
  submitBtnWrap: {
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 30,
    overflow: 'hidden',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  safetyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    gap: 8,
  },
  safetyText: {
    color: '#9ca3af',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    flex: 1,
  },
  // Success card styles
  successCard: {
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(37, 211, 102, 0.4)',
    backgroundColor: 'rgba(15, 12, 41, 0.85)',
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
    marginVertical: 40,
    overflow: 'hidden',
  },
  successIconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(37, 211, 102, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  safetyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(37, 211, 102, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  safetyBadgeText: {
    color: '#25D366',
    fontWeight: '600',
    fontSize: 13,
  },
  successMessage: {
    color: '#d1d5db',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 25,
  },
  countdownBox: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 25,
  },
  countdownText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  countdownNumber: {
    color: '#25D366',
    fontWeight: 'bold',
    fontSize: 18,
  },
  returnButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
