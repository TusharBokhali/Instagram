import { StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Screen/TabNavigation';
export default function App() {
  const Stack = createStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        translucent={true}
      />
      <NavigationContainer >
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='TabNavigation' component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}