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
import SearchBar from '../../components/SearchBar';

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>;


function Home({navigation}:HomeProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return(
    <View
      style={[
        isDarkMode ? {backgroundColor: '#0e0f0f'} : {backgroundColor: '#0e0f0f'},
        {
          flex: 1,
          overflow: "hidden",
        },
      ]}>
        <StatusBar
        animated={true}
        backgroundColor="#415e67"
        barStyle={'light-content'}
        hidden={false}
      />
      <ScrollView>
        <Text
          style={
            [styles.headingText, styles.darkText, {
              paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35, alignSelf:'center'
            }]
          }>
          SOIDH
        </Text>
        {/* <FlatCards /> */}
        <ElevateCards />
        <SearchBar/>
        {/* <Button 
            title='Go to that screen'
            // onPress={()=> 
            //     navigation.navigate("ImageDetail", {
            //         imageUri:'test'
            //     })
            // }
            onPress={()=> 
                navigation.push("PhotoEditor2")
            }
        /> */}
        <Gallery navigation={ navigation }/>
        

      </ScrollView>
    </View>);
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
    color: '#FFF',
  },
  headingText: {
    fontSize: 26,
    fontWeight: '200',
    paddingHorizontal: 10,
    margin:4
  },
});

export default Home;
