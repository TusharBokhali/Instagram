import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import SplashScreen from './Screen/SplashScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <>
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
          <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}