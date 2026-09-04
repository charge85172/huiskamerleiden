import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin, Mail, Globe } from 'lucide-react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        De Leidse <Text style={styles.highlight}>Huiskamer</Text>
      </Text>
      
      <Text style={styles.text}>
        De huiskamer is die huiselijke plek waar niks moet en (bijna) alles mag. Geen ongemakkelijke stiltes, maar samen optrekken en doen waar jij energie van krijgt.
      </Text>

      <View style={styles.contactRow}>
        <MapPin color="#818cf8" size={24} />
        <View style={styles.addressBox}>
          <Text style={styles.addressBold}>Het Leidse Volkshuis</Text>
          <Text style={styles.addressText}>Apothekersdijk 33</Text>
          <Text style={styles.addressText}>2312 DD Leiden</Text>
        </View>
      </View>

      <View style={styles.socialRow}>
        <View style={styles.socialIcon}>
          <Globe color="#38bdf8" size={20} />
        </View>
        <View style={styles.socialIcon}>
          <Mail color="#34d399" size={20} />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.bottomText}>
          © {new Date().getFullYear()} De Leidse Huiskamer. Alle rechten voorbehouden.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  highlight: {
    color: '#38bdf8',
  },
  text: {
    color: '#b3b3b3',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 30,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
    marginBottom: 30,
  },
  addressBox: {
    flex: 1,
  },
  addressBold: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  addressText: {
    color: '#b3b3b3',
    fontSize: 15,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 40,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  bottomText: {
    color: '#666',
    fontSize: 12,
  }
});
