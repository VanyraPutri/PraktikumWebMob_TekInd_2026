import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import HomeInspeksi from './screens/HomeInspeksi';
import DetailInspeksi from './screens/DetailInspeksi';

// Membuat Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeInspeksi">
        <Stack.Screen 
          name="HomeInspeksi" 
          component={HomeInspeksi} 
          options={{ title: 'QC Inspection System' }} 
        />
        <Stack.Screen 
          name="DetailInspeksi" 
          component={DetailInspeksi} 
          options={{ title: 'Detail Inspeksi' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}