import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { users } from "../User";

export default function Search() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "black" : 'white' }]}>
      <ScrollView></ScrollView>
      <View style={[styles.MainSearch, { backgroundColor: isDarkMode ? '#333131' : '#76768024', }]}>
        <AntDesign name="search1" size={20} color={isDarkMode ? 'white' : 'black'} />
        <TextInput
          style={{
            width: '95%',
            paddingHorizontal: 10,
          }}
          placeholder="Search"
          placeholderTextColor={isDarkMode ? 'white' : 'black'}
        />
      </View>
      <View>
          {
            users.map((el,inx)=>{
              return (
                <Image 
                key={inx}
                source={{uri:el.img}}
                resizeMode="stretch"
                style={{
                  width: 200,
                  height:200
                }}
                />
              )
            })
          }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MainSearch: {
    marginTop: 20,
    width: '90%',
    marginHorizontal: 'auto',
    paddingLeft: 10,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: 'center'
  }
})