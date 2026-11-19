import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import EetkamerScreen from '../screens/EetkamerScreen';
import CrafthubScreen from '../screens/CrafthubScreen';
import QueerHuiskamerScreen from '../screens/QueerHuiskamerScreen';
import TransjongerenScreen from '../screens/TransjongerenScreen';
import CommunityFormScreen from '../screens/CommunityFormScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [
    'https://deleidsehuiskamer.nl',
    'https://www.deleidsehuiskamer.nl',
    'https://huiskamerleiden.vercel.app',
  ],
  config: {
    screens: {
      Intro: '',
      Home: 'home',
      Eetkamer: 'eetkamer',
      Crafthub: 'crafthub',
      QueerHuiskamer: 'queer-huiskamer',
      Transjongeren: 'transjongeren',
      CommunityForm: 'aanmelden',
    },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Eetkamer" component={EetkamerScreen} />
        <Stack.Screen name="Crafthub" component={CrafthubScreen} />
        <Stack.Screen name="QueerHuiskamer" component={QueerHuiskamerScreen} />
        <Stack.Screen name="Transjongeren" component={TransjongerenScreen} />
        <Stack.Screen name="CommunityForm" component={CommunityFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
