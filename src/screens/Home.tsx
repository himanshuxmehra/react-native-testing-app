import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Platform,
  StatusBar,
  Button,
} from 'react-native';
import FlatCards from '../../components/FlatCards';
import ElevateCards from '../../components/ElevateCards';
import Gallery from '../../components/Gallery';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>;


function Home({navigation}:HomeProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return(
    <SafeAreaView
      style={[
        isDarkMode ? {backgroundColor: 'black'} : {backgroundColor: 'white'},
        {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      ]}>
      <ScrollView>
        <Text
          style={
            isDarkMode
              ? [styles.headingText, styles.whiteText]
              : [styles.headingText, styles.darkText]
          }>
          SOIDH
        </Text>
        <FlatCards />
        <ElevateCards />
        <Gallery navigation={ navigation }/>
        <Button 
            title='Go to that screen'
            // onPress={()=> 
            //     navigation.navigate("ImageDetail", {
            //         imageUri:'test'
            //     })
            // }
            onPress={()=> 
                navigation.push("ImageDetail", {
                    imageUri:'test'
                })
            }
        />

      </ScrollView>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

export default Home;
