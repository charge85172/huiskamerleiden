import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Linking
} from 'react-native';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Check,
  Mail,
  ExternalLink,
  Building2
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function CommunityFormScreen({ route, navigation }) {
  const { t, language } = useLanguage();
  const isBusiness = route?.params?.version === 'Bedrijven' || route?.params?.version === 'business';
  const formTexts = t.communityForm;
  const businessTexts = t.business.communityForm;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedUrls, setSubmittedUrls] = useState({ whatsapp: '', mailto: '' });

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home', { version: isBusiness ? 'Bedrijven' : 'Jongeren' });
    }
  };

  const openExternalUrl = (url) => {
    if (Platform.OS === 'web' && url.startsWith('https://') && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    Linking.openURL(url);
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    const trimmedName = name.trim();
    const trimmedAge = age.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedSource = source.trim();

    if (!trimmedName) {
      newErrors.name = formTexts.nameError;
    }

    const ageNum = Number(trimmedAge);
    if (!/^\d{1,3}$/.test(trimmedAge) || ageNum < 12 || ageNum > 120) {
      newErrors.age = formTexts.ageError;
    }

    const normalizedPhone = trimmedPhone.replace(/[\s\-().]/g, '');
    if (!/^\+?\d{9,15}$/.test(normalizedPhone)) {
      newErrors.phone = formTexts.phoneError;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      newErrors.email = formTexts.emailError;
    }

    if (!trimmedSource) {
      newErrors.source = formTexts.sourceError;
    }

    if (!consent) {
      newErrors.consent = formTexts.consentError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const message = language === 'nl'
      ? [
          'Hoi Stichting De Leidse Huiskamer! Ik wil mij graag aanmelden voor de WhatsApp-community.',
          '',
          `Naam: ${trimmedName}`,
          `Leeftijd: ${trimmedAge}`,
          `Telefoonnummer: ${trimmedPhone}`,
          `E-mailadres: ${trimmedEmail}`,
          `Via: ${trimmedSource}`,
          'AVG-toestemming: Ja, ik ga akkoord dat mijn gegevens worden gebruikt om mij toe te voegen aan de WhatsApp-community.'
        ].join('\n')
      : [
          'Hi Stichting De Leidse Huiskamer! I would like to sign up for the WhatsApp community.',
          '',
          `Name: ${trimmedName}`,
          `Age: ${trimmedAge}`,
          `Phone: ${trimmedPhone}`,
          `Email: ${trimmedEmail}`,
          `Found via: ${trimmedSource}`,
          'GDPR consent: Yes, I agree that my details may be used to add me to the WhatsApp community.'
        ].join('\n');

    const whatsappUrl = `https://wa.me/31615585172?text=${encodeURIComponent(message)}`;
    const subject = language === 'nl'
      ? 'Aanmelding WhatsApp-community – De Leidse Huiskamer'
      : 'WhatsApp Community Sign-up – De Leidse Huiskamer';
    const mailtoUrl = `mailto:leidsehuiskamer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    setSubmittedUrls({ whatsapp: whatsappUrl, mailto: mailtoUrl });
    setIsSubmitted(true);
    openExternalUrl(whatsappUrl);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']} style={StyleSheet.absoluteFillObject} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton} accessibilityRole="button">
              <ArrowLeft color="#fff" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {isBusiness ? businessTexts.header : formTexts.header}
            </Text>
            <View style={{ width: 36 }} />
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {isBusiness ? (
              <View style={styles.businessCard}>
                <View style={styles.businessIconCircle}>
                  <Building2 color="#00C9FF" size={34} />
                </View>

                <Text style={styles.businessTitle}>{businessTexts.title}</Text>
                <Text style={styles.businessSubtitle}>{businessTexts.subtitle}</Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.submitBtnWrap}
                  onPress={() => openExternalUrl('mailto:leidsehuiskamer@gmail.com')}
                  accessibilityRole="button"
                >
                  <LinearGradient
                    colors={['#00C9FF', '#4A00E0']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.submitButton}
                  >
                    <Mail size={20} color="#fff" style={{ marginRight: 10 }} />
                    <Text style={styles.submitButtonText}>{businessTexts.emailBtn}</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.officialInfoBox}>
                  <Text style={styles.officialInfoTitle}>{businessTexts.infoTitle}</Text>
                  <Text style={styles.officialInfoText}>{t.footer.organization}</Text>
                  <Text style={styles.officialInfoText}>
                    {t.footer.building}, {t.footer.address1}, {t.footer.address2}
                  </Text>
                  <Text style={styles.officialInfoText}>{t.footer.kvk}</Text>
                </View>

                <TouchableOpacity
                  style={styles.switchLinkBtn}
                  onPress={() => navigation.setParams({ version: 'Jongeren' })}
                  activeOpacity={0.8}
                >
                  <Text style={styles.switchLinkText}>{businessTexts.switchToYouthLink}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.returnButton}
                  onPress={handleGoBack}
                  activeOpacity={0.8}
                >
                  <Text style={styles.returnButtonText}>{businessTexts.backBtn}</Text>
                </TouchableOpacity>
              </View>
            ) : isSubmitted ? (
              <BlurView intensity={35} tint="dark" style={styles.successCard}>
                <View style={styles.successIconCircle}>
                  <CheckCircle2 color="#25D366" size={60} />
                </View>

                <Text style={styles.successTitle}>{formTexts.successTitle}</Text>

                <View style={styles.safetyBadge}>
                  <ShieldCheck color="#25D366" size={18} />
                  <Text style={styles.safetyBadgeText}>{formTexts.safetyBadge}</Text>
                </View>

                <Text style={styles.successMessage}>{formTexts.successMessage}</Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={[styles.submitBtnWrap, { width: '100%' }]}
                  onPress={() => openExternalUrl(submittedUrls.whatsapp)}
                  accessibilityRole="button"
                >
                  <LinearGradient
                    colors={['#25D366', '#128C7E']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.submitButton}
                  >
                    <WhatsAppIcon size={20} color="#fff" style={{ marginRight: 10 }} />
                    <Text style={styles.submitButtonText}>{formTexts.openWhatsAppAgainBtn}</Text>
                    <ExternalLink size={16} color="#fff" style={{ marginLeft: 8 }} />
                  </LinearGradient>
                </TouchableOpacity>

                <View style={styles.fallbackBox}>
                  <Text style={styles.fallbackPrompt}>{formTexts.emailFallbackPrompt}</Text>
                  <TouchableOpacity
                    style={styles.fallbackButton}
                    onPress={() => openExternalUrl(submittedUrls.mailto)}
                    activeOpacity={0.8}
                    accessibilityRole="button"
                  >
                    <Mail size={18} color="#00C9FF" style={{ marginRight: 8 }} />
                    <Text style={styles.fallbackButtonText}>{formTexts.emailFallbackBtn}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.returnButton}
                  onPress={handleGoBack}
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
                    placeholderTextColor="rgba(255,255,255,0.55)"
                    value={name}
                    onChangeText={(val) => {
                      setName(val);
                      clearError('name');
                    }}
                  />
                  {errors.name && <Text style={styles.fieldError}>{errors.name}</Text>}
                </View>

                {/* Age */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.ageLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.age && styles.inputError]}
                    placeholder={formTexts.agePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.55)"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={(val) => {
                      setAge(val);
                      clearError('age');
                    }}
                  />
                  {errors.age && <Text style={styles.fieldError}>{errors.age}</Text>}
                </View>

                {/* WhatsApp Phone */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.phoneLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.phone && styles.inputError]}
                    placeholder={formTexts.phonePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.55)"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={(val) => {
                      setPhone(val);
                      clearError('phone');
                    }}
                  />
                  {errors.phone && <Text style={styles.fieldError}>{errors.phone}</Text>}
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.emailLabel}</Text>
                  <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder={formTexts.emailPlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.55)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(val) => {
                      setEmail(val);
                      clearError('email');
                    }}
                  />
                  {errors.email && <Text style={styles.fieldError}>{errors.email}</Text>}
                </View>

                {/* Source */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>{formTexts.sourceLabel}</Text>
                  <TextInput
                    style={[styles.input, styles.textArea, errors.source && styles.inputError]}
                    placeholder={formTexts.sourcePlaceholder}
                    placeholderTextColor="rgba(255,255,255,0.55)"
                    multiline
                    numberOfLines={3}
                    textAlignVertical="top"
                    value={source}
                    onChangeText={(val) => {
                      setSource(val);
                      clearError('source');
                    }}
                  />
                  {errors.source && <Text style={styles.fieldError}>{errors.source}</Text>}
                </View>

                {/* Mandatory GDPR / AVG Consent Checkbox */}
                <View style={styles.inputGroup}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.consentRow, errors.consent && styles.consentRowError]}
                    onPress={() => {
                      setConsent((prev) => !prev);
                      clearError('consent');
                    }}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: consent }}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        consent && styles.checkboxChecked,
                        errors.consent && !consent && styles.checkboxError
                      ]}
                    >
                      {consent && <Check size={15} color="#fff" />}
                    </View>
                    <Text style={styles.consentText}>{formTexts.consentLabel}</Text>
                  </TouchableOpacity>
                  {errors.consent && <Text style={styles.fieldError}>{errors.consent}</Text>}
                </View>

                {/* Submit button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.submitBtnWrap}
                  onPress={handleSubmit}
                  accessibilityRole="button"
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
    paddingTop: Platform.OS === 'web' ? 20 : Platform.OS === 'android' ? 40 : 18,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
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
    textAlign: 'center',
    flex: 1,
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
    color: '#ff9c9e',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
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
  fieldError: {
    color: '#ff8a8c',
    fontSize: 13,
    marginTop: 6,
  },
  textArea: {
    minHeight: 90,
  },
  consentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  consentRowError: {
    borderColor: '#ff4d4f',
    backgroundColor: 'rgba(255, 77, 79, 0.08)',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  checkboxChecked: {
    backgroundColor: '#25D366',
    borderColor: '#25D366',
  },
  checkboxError: {
    borderColor: '#ff4d4f',
  },
  consentText: {
    color: '#e5e7eb',
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  submitBtnWrap: {
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 30,
    overflow: 'hidden',
    width: '100%',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  safetyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    gap: 8,
  },
  safetyText: {
    color: '#b0b8c5',
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
    marginVertical: 30,
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
    marginBottom: 20,
  },
  fallbackBox: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 22,
  },
  fallbackPrompt: {
    color: '#b0b8c5',
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  fallbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 201, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 201, 255, 0.35)',
  },
  fallbackButtonText: {
    color: '#7ce7ff',
    fontSize: 14,
    fontWeight: '600',
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
    textAlign: 'center',
  },
  // Business contact card styles
  businessCard: {
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 201, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    maxWidth: 650,
    alignSelf: 'center',
    width: '100%',
    marginVertical: 20,
  },
  businessIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(0, 201, 255, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  businessTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  businessSubtitle: {
    color: '#d1d5db',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  officialInfoBox: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 18,
    marginTop: 6,
    marginBottom: 20,
  },
  officialInfoTitle: {
    color: '#00C9FF',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  officialInfoText: {
    color: '#e5e7eb',
    fontSize: 15,
    lineHeight: 22,
  },
  switchLinkBtn: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  switchLinkText: {
    color: '#9ca3af',
    fontSize: 13,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
