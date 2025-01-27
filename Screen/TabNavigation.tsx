/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import CreatePost from './CreatePost';
import Reels from './Reels';
import Profile from './Profile';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image, TouchableOpacity, useColorScheme } from 'react-native';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false, tabBarActiveTintColor: isDarkMode ? 'white' : 'black',tabBarHideOnKeyboard:true,tabBarShowLabel: false, tabBarStyle: {
        position: 'absolute',
        height: 60,
        paddingTop: 10,
        backgroundColor: isDarkMode ? '#222' : '#fff',
        borderTopWidth: 0,
        elevation: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0,
      },
      tabBarButton: (props: any) => <TouchableOpacity {...props} activeOpacity={1} />,
    }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }: any) => {
            return (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }: any) => {
            return (
              <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="CreatePost" component={CreatePost}
        options={{
          tabBarIcon: ({ color, size, focused }: any) => {
            return (
              <FontAwesome name={focused ? 'plus-square' : 'plus-square-o'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Reels" component={Reels}
        options={{
          tabBarIcon: ({ color, size }: any) => {
            return (
              <MaterialCommunityIcons name='movie-outline' size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Image source={require('../assets/Images/userTab.png')} style={{ width: 24, height: 24, borderRadius: 50 }} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
