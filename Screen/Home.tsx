/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const { navigate } = useNavigation<any>();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "black" : '' }]}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})