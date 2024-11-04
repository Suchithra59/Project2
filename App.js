// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import DjPage from './components/DjPage';
import PhotographyPage from './components/PhotographyPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="DjPage" component={DjPage} options={{ title: 'DJ Page' }} />
        <Stack.Screen name="PhotographyPage" component={PhotographyPage} options={{ title: 'Photography Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
