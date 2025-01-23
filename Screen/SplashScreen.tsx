import { View, Text, useColorScheme, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
export default function SplashScreen() {
  const isDarkMode = useColorScheme() == 'dark';
  console.log(isDarkMode);
    const {navigate,replace} = useNavigation<any>();
  
   useEffect(()=>{
        setTimeout(()=>{
          navigate('Home')
        },2000)
      },[])
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
      <View style={{position:'absolute',bottom:80,gap:5}}>
        <Text style={{color:isDarkMode ? 'white' : 'black',fontSize:16,opacity:0.5}}>From</Text>
        <Text style={{color:'red',fontSize:18}}>Meta</Text>
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