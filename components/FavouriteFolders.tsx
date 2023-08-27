import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BlurView} from 'expo-blur';

const FavouriteFolders = () => {
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
    <View style={{}}>
      <View style={[styles.favoriteHeading]}>
        <Text style={[styles.favoriteHeading, styles.textFavorite]}>
          <Icon name="favorite" size={15} />
          &nbsp; Favorites
        </Text>
      </View>
      <ScrollView horizontal>
        {data.map((item, _index) => {
          return (
            <View style={styles.container}>
              <View style={[styles.cont]}>
                <ImageBackground
                  source={{
                    uri: item.coverImage,
                  }}
                  style={{
                    height: '100%',
                    padding: 0,
                    borderRadius: 10,
                    width: '100%',
                  }}>
                  <BlurView intensity={10} style={{height:'100%'}}>
                    <Text style={styles.textInCard}>{item.name}</Text>
                  </BlurView>
                </ImageBackground>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavouriteFolders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card1bg: {
    borderRadius: 22,
    position: 'absolute',
    width: 200,
    height: 200,
    margin: 8,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  cont: {
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
  textInCard: {
    color: '#FFF',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    fontWeight: 500,
  },
  favoriteHeading: {
    alignSelf: 'center',
  },
  textFavorite: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '200',
  },
});
