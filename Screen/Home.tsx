/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, useColorScheme, Image, Dimensions, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
// import Video, { VideoRef } from 'react-native-video';
import Video from 'react-native-video';
import { users } from '../User';
import { useScrollToTop } from '@react-navigation/native';
export default function Home() {
  const { navigate } = useNavigation<any>();
  const isDarkMode = useColorScheme() === 'dark';
  const ref = React.useRef<any>(null);
  const videoRef = useRef<VideoRef>(null);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo({ y: 0, animated: true, });
    }, 5000)
  }, [])

  const color = ['#FBAA47', '#D91A46', '#A60F93'];
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "black" : 'white' }]}>
      <ScrollView ref={ref} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Instagrm Logo And likes,Chat Part Top */}
        <View style={[styles.paddingContainer, { flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }]}>
          {
            isDarkMode ?
              <Image source={require('../assets/Images/DarkInstagramLogo.png')}
                style={[styles.Instalogo, { width: 125 }]}
              /> :
              <Image source={require('../assets/Images/InstagramLogo.png')}
                style={[styles.Instalogo, { width: 125 }]}
              />
          }
          {
            isDarkMode ?
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity>
                  <Octicons name='heart' size={24} color='white' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../assets/Images/DarkChat.png')}
                    style={{ width: 25, height: 22 }}
                  />
                </TouchableOpacity>
              </View> :
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <TouchableOpacity>
                  <Octicons name='heart' size={24} color='black' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../assets/Images/ChatImg.png')}
                    style={{ width: 25, height: 22 }}
                  />
                </TouchableOpacity>
              </View>
          }
        </View>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 10,
            gap: 10,
            height: 80,
            paddingRight: 10,
            marginBottom: 20
          }}
        >
          <TouchableOpacity style={{}}>
            <View style={[styles.Storys]}>
              <Image source={require('../assets/Images/userTab.png')}
                style={[styles.userStory, { borderColor: isDarkMode ? 'black' : 'white' }]}
              />
            </View>
            <View style={[styles.youreStory, { borderColor: isDarkMode ? 'black' : 'white' }]}>
              <AntDesign name='plus' size={15} color='white' />
            </View>
            <Text style={{ color: isDarkMode ? 'white' : 'black', textAlign: 'center', fontSize: 12 }}>Your story</Text>
          </TouchableOpacity>
          {
            users.map((el, inx) => {
              return (
                <TouchableOpacity key={inx}>
                  <LinearGradient style={[styles.Storys]} colors={color}>
                    <Image source={{ uri: el.img }}
                      style={[styles.userStory, { borderColor: isDarkMode ? 'black' : 'white' }]}
                    />
                  </LinearGradient>
                  <Text style={{ color: isDarkMode ? 'white' : 'black', textAlign: 'center', fontSize: 10, marginTop: 5 }}>{el.name.length > 10 ? el.name.slice(0, 15) + '...' : el.name}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

        {/* Instagrm Story User Complates*/}

        {
          users.map((el, inx) => {
            return (
              <View key={inx}>
                {
                  el.Video !== "" ? (
                    <View style={styles.userPost} key={inx}>
                      <View style={[styles.userDetails, { width: width }]}>
                        <View style={styles.mainUser}>
                          <Image source={{ uri: el.img }}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 50,
                            }}
                          />
                          <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                              <Text style={{ fontSize: 12, color: isDarkMode ? 'white' : 'black' }}>{el.name}</Text>
                              <Image source={require('../assets/Images/Blustcik.png')}
                                style={{ width: 15, height: 15 }}
                              />
                            </View>
                            <Text style={{ fontSize: 12, color: isDarkMode ? 'white' : 'black' }}>{el.title}</Text>
                          </View>
                        </View>
                        <TouchableOpacity>
                          <Feather name='more-horizontal' size={24} color={isDarkMode ? 'white' : 'black'} />
                        </TouchableOpacity>
                        <View style={styles.userMore}></View>
                      </View>
                      <View>
                        <Video
                          ref={videoRef}
                          source={{ uri: el.Video }}
                          controls={true}
                          muted
                          style={{ width: width, height: height * 0.70, resizeMode: 'contain' }}
                          repeat={true}
                        />
                        <View style={styles.LikeArea}>
                          {
                            isDarkMode ?
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <TouchableOpacity>
                                    <Octicons name='heart' size={24} color='white' />
                                  </TouchableOpacity>
                                  <Text style={{ color: 'white' }}>{el.Like}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                  <TouchableOpacity>
                                    <Image source={require('../assets/Images/DarkComment.png')}
                                      style={{ width: 25, height: 25 }}
                                    />
                                  </TouchableOpacity>
                                  <Text style={{ color: 'white' }}>{el.Comments}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                  <TouchableOpacity>
                                    <Image source={require('../assets/Images/DarkChat.png')}
                                      style={{ width: 25, height: 22 }}
                                    />
                                  </TouchableOpacity>
                                  <Text style={{ color: 'white' }}>{el.Share}</Text>
                                </View>

                              </View> :
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <TouchableOpacity>
                                    <Octicons name='heart' size={24} color='#1a1717' />
                                  </TouchableOpacity>
                                  <Text>{el.Like}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <TouchableOpacity>
                                    <Image source={require('../assets/Images/Comment.png')}
                                      style={{ width: 25, height: 25 }}
                                    />
                                  </TouchableOpacity>
                                  <Text>{el.Comments}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                  <TouchableOpacity>
                                    <Image source={require('../assets/Images/ChatImg.png')}
                                      style={{ width: 25, height: 22 }}
                                    />
                                  </TouchableOpacity>
                                  <Text>{el.Share}</Text>
                                </View>

                              </View>
                          }

                          {
                            isDarkMode ?
                              <TouchableOpacity>
                                <FontAwesome name={el.Save ? 'bookmark' : 'bookmark-o'} size={24} color='white' />
                              </TouchableOpacity> :
                              <TouchableOpacity>
                                <FontAwesome name={el.Save ? 'bookmark' : 'bookmark-o'} size={24} color='black' />
                              </TouchableOpacity>
                          }

                        </View>
                      </View>
                    </View>
                  ) :
                    (
                      <View style={styles.userPost} key={inx}>
                        <View style={[styles.userDetails, { width: width }]}>
                          <View style={styles.mainUser}>
                            <Image source={{ uri: el.img }}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 50,
                              }}
                            />
                            <View>
                              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Text style={{ fontSize: 12, color: isDarkMode ? 'white' : 'black' }}>{el.name}</Text>
                                <Image source={require('../assets/Images/Blustcik.png')}
                                  style={{ width: 15, height: 15 }}
                                />
                              </View>
                              <Text style={{ fontSize: 12, color: isDarkMode ? 'white' : 'black' }}>{el.title}</Text>
                            </View>
                          </View>
                          <TouchableOpacity>
                            <Feather name='more-horizontal' size={24} color={isDarkMode ? 'white' : 'black'} />
                          </TouchableOpacity>
                          <View style={styles.userMore}></View>
                        </View>
                        <View>
                          <Image source={{ uri: el.big }}
                            style={styles.imagePost}
                          />
                          <View style={styles.LikeArea}>
                            {
                              isDarkMode ?
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <TouchableOpacity>
                                      <Octicons name='heart' size={24} color='white' />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white' }}>{el.Like}</Text>
                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <TouchableOpacity>
                                      <Image source={require('../assets/Images/DarkComment.png')}
                                        style={{ width: 25, height: 25 }}
                                      />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white' }}>{el.Comments}</Text>
                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <TouchableOpacity>
                                      <Image source={require('../assets/Images/DarkChat.png')}
                                        style={{ width: 25, height: 22 }}
                                      />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white' }}>{el.Share}</Text>
                                  </View>

                                </View> :
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <TouchableOpacity>
                                      <Octicons name='heart' size={24} color='#1a1717' />
                                    </TouchableOpacity>
                                    <Text>{el.Like}</Text>
                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <TouchableOpacity>
                                      <Image source={require('../assets/Images/Comment.png')}
                                        style={{ width: 25, height: 25 }}
                                      />
                                    </TouchableOpacity>
                                    <Text>{el.Comments}</Text>
                                  </View>

                                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <TouchableOpacity>
                                      <Image source={require('../assets/Images/ChatImg.png')}
                                        style={{ width: 25, height: 22 }}
                                      />
                                    </TouchableOpacity>
                                    <Text>{el.Share}</Text>
                                  </View>

                                </View>
                            }

                            {
                              isDarkMode ?
                                <TouchableOpacity>
                                  <FontAwesome name={el.Save ? 'bookmark' : 'bookmark-o'} size={24} color='white' />
                                </TouchableOpacity> :
                                <TouchableOpacity>
                                  <FontAwesome name={el.Save ? 'bookmark' : 'bookmark-o'} size={24} color='black' />
                                </TouchableOpacity>
                            }

                          </View>
                        </View>
                      </View>
                    )
                }
              </View>
            )
          })
        }

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingContainer: {
    padding: 15
  },
  Instalogo: {
    height: 34
  },
  Storys: {
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 4,
  },
  youreStory: {
    width: 25,
    height: 25,
    backgroundColor: '#3797EF',
    borderRadius: 50,
    position: 'absolute',
    borderWidth: 2,
    top: '60%',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userPost: {
    marginVertical: 10
  },
  userDetails: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  mainUser: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userMore: {

  },
  imagePost: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10
  },
  LikeArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

})