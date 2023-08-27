import {
    FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import ElevateCards from './ElevateCards';
import FlatCards from './FlatCards';

const Albums = () => {
  const data = [
    {
      name: 'Test1',
      coverImage:
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77',
    },
    {
      name: 'Test2',
      coverImage: 'https://images.unsplash.com/photo-1555538995-7181cc10e079',
    },
    {
      name: 'Test3',
      coverImage:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
    },
    {
      name: 'Test4',
      coverImage:
        'https://images.unsplash.com/photo-1689795256983-2c32abfce175',
    },
    {
      name: 'Test5',
      coverImage:
        'https://plus.unsplash.com/premium_photo-1684706280999-258da773970f',
    },
  ];

  return (
    <View>
      <View style={styles.albumHeading}>
        <Text style={styles.textAlbum}>Albums</Text>
      </View>
      <View style={[styles.hr, {flex:1,flexDirection:'row'}]}></View>
      <ScrollView horizontal>
            <View>
            <Image
            style={{
                margin:10,
            }}
            source={{
                uri:        'https://plus.unsplash.com/premium_photo-1684706280999-258da773970f',
                width:150,
                height:150,
            }}/> 

            <Image
            style={{
                margin:10,
            }}
            source={{
                uri:        'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60',
                width:150,
                height:150,
            }}/>
            </View>
            <View>
            <Image
            style={{
                margin:10,
            }}
            source={{
                uri:        'https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
                width:150,
                height:150,
            }}/>
            <Image
            style={{
                margin:10,
            }}
            source={{
                uri:'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
                width:150,
                height:150,
            }}/>
            </View>
            <View>
            <Image
            style={{
                margin:10,
            }}
            source={{
                uri: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2462&q=80',
                width:150,
                height:150,
            }}/>
            <Image
            style={{
                margin:10,
            }}
            source={{
                uri:'https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
                width:150,
                height:150,
            }}/>
            </View>
            </ScrollView>
        {/* <FlatGrid 
            itemDimension={100}
            data={data}
            spacing={10}
            renderItem={({ item,index }) => (
                <TouchableOpacity>
                <View style={styles.container}>
                <View style={{width: 200, height: 200}}>
                  <ImageBackground
                    source={{
                      uri: item.coverImage,
                    }}
                    style={{
                      height: '100%',
                      padding: 0,
                      borderRadius: 10,
                      width:200,
                    }}>
                      <Text style={{}}>{item.name}</Text>
                  </ImageBackground>
                </View>
              </View>
              </TouchableOpacity>
          )}
          /> */}
    </View>
    
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#26220a',
    paddingTop: 0,
    width: 104,
    height: 150,
    justifyContent: 'center',
    elevation: 20,
    shadowRadius: 20,
    margin: 10,
    shadowColor: 'rgba(1, 1, 0, 0.4)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    borderRadius: 22,
    overflow: 'hidden',
  },
  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1 * 0.5,
    marginHorizontal: 8,
    marginBottom:5,
  },
  albumHeading: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  textAlbum: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '300',
  },
  card: {
    width: 200,
    height: 200,
    borderRadius: 4,
    margin: 8,
    flex: 1,
  },
  cardOne: {
    backgroundColor: '#3B3B98',
  },
  cardTwo: {
    backgroundColor: '#FD7272',
  },
  cardThree: {
    backgroundColor: '#9AECDB',
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginHorizontal: 8,
    marginTop: 5,
  },
});
