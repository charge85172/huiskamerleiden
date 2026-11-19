import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { MapPin, Mail, Globe, Instagram } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import HuiskamerLogo from './HuiskamerLogo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ version = 'Jongeren' }) {
  const { t } = useLanguage();
  const navigation = useNavigation();
  const isBusiness = version === 'Bedrijven' || version === 'business';

  const openLink = (url) => {
    if (Platform.OS === 'web' && url.startsWith('https://') && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoRow}>
          <View style={{ marginRight: 10 }}>
            <HuiskamerLogo size={26} color="#fff" animated={false} />
          </View>
          <Text style={styles.title}>
            {t.ui.logoFirst}<Text style={styles.highlight}>{t.ui.logoHighlight}</Text>
          </Text>
        </View>

        <Text style={styles.text}>{t.footer.text}</Text>

        <View style={styles.contactRow}>
          <MapPin color="#8E2DE2" size={24} style={{ marginTop: 2 }} />
          <View style={styles.addressBox}>
            <Text style={styles.addressBold}>{t.footer.organization}</Text>
            <Text style={styles.addressText}>
              {t.footer.building}, {t.footer.address1}, {t.footer.address2}
            </Text>
            <Text style={styles.addressText}>{t.footer.kvk}</Text>
            <TouchableOpacity
              onPress={() => openLink('mailto:leidsehuiskamer@gmail.com')}
              activeOpacity={0.7}
            >
              <Text style={styles.emailLinkText}>{t.footer.email}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => openLink('https://deleidsehuiskamer.nl')}
            activeOpacity={0.7}
            accessibilityLabel="Website"
            accessibilityRole="link"
          >
            <Globe color="#FF0080" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => openLink('mailto:leidsehuiskamer@gmail.com')}
            activeOpacity={0.7}
            accessibilityLabel="E-mail"
            accessibilityRole="link"
          >
            <Mail color="#00C9FF" size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialIcon}
            onPress={() => openLink('https://www.instagram.com/deleidsehuiskamer?bqrl=M2Z1Y3MzdWdpdDZn')}
            activeOpacity={0.7}
            accessibilityLabel="Instagram"
            accessibilityRole="link"
          >
            <Instagram color="#E1306C" size={20} />
          </TouchableOpacity>

          {!isBusiness && (
            <TouchableOpacity
              style={[styles.socialIcon, styles.whatsappSocialIcon]}
              onPress={() => navigation.navigate('CommunityForm', { version: 'Jongeren' })}
              activeOpacity={0.7}
              accessibilityLabel="WhatsApp Community"
              accessibilityRole="button"
            >
              <WhatsAppIcon color="#25D366" size={20} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>{t.footer.copyright}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, backgroundColor: 'rgba(15, 12, 41, 0.8)', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', width: '100%' },
  innerContainer: { width: '100%', maxWidth: 1200, alignSelf: 'center' },
  logoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  highlight: { color: '#00C9FF' },
  text: { color: '#b3b3b3', fontSize: 15, lineHeight: 24, marginBottom: 30 },
  contactRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 },
  addressBox: { marginLeft: 15, flex: 1 },
  addressBold: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  addressText: { color: '#c4c7d4', fontSize: 15, marginBottom: 3 },
  emailLinkText: { color: '#00C9FF', fontSize: 15, marginTop: 4, textDecorationLine: 'underline' },
  socialRow: { flexDirection: 'row', gap: 15, marginBottom: 40, flexWrap: 'wrap' },
  socialIcon: { width: 42, height: 42, borderRadius: 21, backgroundColor: 'rgba(255,255,255,0.06)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  whatsappSocialIcon: { backgroundColor: 'rgba(37, 211, 102, 0.12)', borderWidth: 1, borderColor: 'rgba(37, 211, 102, 0.3)' },
  copyright: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 20 },
  copyrightText: { color: '#A0A0B8', textAlign: 'center', fontSize: 14 }
});
