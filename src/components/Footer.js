import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MapPin, Mail, Globe } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useLanguage } from '../context/LanguageContext';
import HuiskamerLogo from './HuiskamerLogo';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const { t } = useLanguage();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
        <MapPin color="#8E2DE2" size={24} />
        <View style={styles.addressBox}>
          <Text style={styles.addressBold}>{t.footer.building}</Text>
          <Text style={styles.addressText}>{t.footer.address1}</Text>
          <Text style={styles.addressText}>{t.footer.address2}</Text>
        </View>
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity 
          style={styles.socialIcon}
          onPress={() => Linking.openURL('https://huiskamerleiden.nl')}
          activeOpacity={0.7}
          accessibilityLabel="Website"
        >
          <Globe color="#FF0080" size={20} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialIcon}
          onPress={() => Linking.openURL('mailto:info@leidsehuiskamer.nl')}
          activeOpacity={0.7}
          accessibilityLabel="E-mail"
        >
          <Mail color="#00C9FF" size={20} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.socialIcon, styles.whatsappSocialIcon]}
          onPress={() => navigation.navigate('CommunityForm')}
          activeOpacity={0.7}
          accessibilityLabel="WhatsApp Community"
        >
          <WhatsAppIcon color="#25D366" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>{t.footer.copyright}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 40, backgroundColor: 'rgba(15, 12, 41, 0.8)', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },
  logoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  highlight: { color: '#00C9FF' },
  text: { color: '#b3b3b3', fontSize: 15, lineHeight: 24, marginBottom: 30 },
  contactRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 },
  addressBox: { marginLeft: 15 },
  addressBold: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  addressText: { color: '#b3b3b3', fontSize: 15, marginBottom: 2 },
  socialRow: { flexDirection: 'row', gap: 15, marginBottom: 40 },
  socialIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' },
  whatsappSocialIcon: { backgroundColor: 'rgba(37, 211, 102, 0.12)', borderWidth: 1, borderColor: 'rgba(37, 211, 102, 0.3)' },
  copyright: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 20 },
  copyrightText: { color: '#666', textAlign: 'center', fontSize: 14 }
});
