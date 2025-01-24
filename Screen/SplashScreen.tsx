/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, useColorScheme, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
export default function SplashScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  const { replace } = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      replace('TabNavigation');
    }, 1000);
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
      <View>
        <Image source={require('../assets/Images/instagram.png')}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 80, gap: 10 }}>
        <Text style={{ color: isDarkMode ? 'white' : "#4E575E", fontSize: 16, opacity: 0.5, textAlign: 'center', fontFamily: 'Roboto-Bold' }}>from</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Image source={require('../assets/Images/Meta.png.png')}
            style={{ width: 42, height: 28 }}
          />
          <Text style={{ color: '#B8126B', fontSize: 18, fontWeight: '700' }}>Meta</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})