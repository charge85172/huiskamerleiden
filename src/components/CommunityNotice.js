import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { BlurView } from 'expo-blur';
import { ArrowRight, Mail } from 'lucide-react-native';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function CommunityNotice({ navigation, isBusiness = false }) {
  const { t } = useLanguage();
  const isBiz = isBusiness === true;
  const notice = isBiz ? t.business.communityNotice : t.communityNotice;

  const CardWrapper = isBiz ? View : BlurView;
  const wrapperProps = isBiz
    ? { style: styles.businessContainer }
    : { intensity: 30, tint: 'dark', style: styles.container };

  const handlePress = () => {
    if (isBiz) {
      Linking.openURL('mailto:leidsehuiskamer@gmail.com');
    } else {
      navigation.navigate('CommunityForm', { version: 'Jongeren' });
    }
  };

  return (
    <CardWrapper {...wrapperProps}>
      <View style={styles.headerRow}>
        <View style={[styles.iconCircle, isBiz && styles.businessIconCircle]}>
          {isBiz ? (
            <Mail size={22} color="#00C9FF" />
          ) : (
            <WhatsAppIcon size={24} color="#25D366" />
          )}
        </View>
        <View style={styles.headerTitles}>
          <Text style={[styles.badge, isBiz && styles.businessBadge]}>{notice.badge}</Text>
          <Text style={styles.title}>{notice.title}</Text>
        </View>
      </View>

      <Text style={styles.text}>{notice.text}</Text>

      <TouchableOpacity
        style={[styles.actionContainer, isBiz && styles.businessActionContainer]}
        onPress={handlePress}
        activeOpacity={0.8}
        accessibilityRole="button"
      >
        <Text style={styles.promptText}>
          {notice.prompt}{' '}
          <Text style={[styles.linkText, isBiz && styles.businessLinkText]}>{notice.link}</Text>
        </Text>
        <ArrowRight color={isBiz ? '#00C9FF' : '#25D366'} size={18} style={styles.arrowIcon} />
      </TouchableOpacity>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(37, 211, 102, 0.3)',
    backgroundColor: 'rgba(37, 211, 102, 0.05)',
    marginVertical: 20,
    overflow: 'hidden',
  },
  businessContainer: {
    padding: 22,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 201, 255, 0.25)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    marginVertical: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(37, 211, 102, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  businessIconCircle: {
    backgroundColor: 'rgba(0, 201, 255, 0.14)',
  },
  headerTitles: {
    flex: 1,
  },
  badge: {
    color: '#25D366',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  businessBadge: {
    color: '#00C9FF',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#d1d5db',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(37, 211, 102, 0.12)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(37, 211, 102, 0.25)',
  },
  businessActionContainer: {
    backgroundColor: 'rgba(0, 201, 255, 0.1)',
    borderColor: 'rgba(0, 201, 255, 0.25)',
  },
  promptText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    lineHeight: 20,
  },
  linkText: {
    color: '#25D366',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  businessLinkText: {
    color: '#00C9FF',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});
