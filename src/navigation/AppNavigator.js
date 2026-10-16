import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import EetkamerScreen from '../screens/EetkamerScreen';
import CrafthubScreen from '../screens/CrafthubScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
