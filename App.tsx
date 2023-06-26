import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme
} from 'react-native';
import FlatCards from "./components/FlatCards";
import ElevateCards from "./components/ElevateCards";
import Gallery from "./components/Gallery";

function App(){
  const isDarkMode = useColorScheme()==='dark';

  return <SafeAreaView>
    <ScrollView>
      <Text style={isDarkMode?[styles.headingText,styles.whiteText]:[styles.headingText,styles.darkText]}>SOIDH</Text>
      <FlatCards/>
      <ElevateCards/>
      <Gallery/>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
      flex: 0,
      alignItems: 'center'
  },
  whiteText: {
      color:'#FFFFFF'
  },
  darkText: {
      color:'#000'
  },
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal: 10,
},
})

export default App;