import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePost() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "black" : 'white' }]}>
        <Text>Search</Text>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  })