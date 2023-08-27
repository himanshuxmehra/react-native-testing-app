import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavouriteFolders from '../../components/FavouriteFolders'
import Albums from '../../components/Albums'

const Folders = () => {
  return (
    <View style={
      [ {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 35,
        backgroundColor: '#0e0f0f',
        flex:1,
      }]
    }>
      <ScrollView>
      {/* <Text>Folders</Text> */}
      <FavouriteFolders/>
      <Albums/>
      </ScrollView>
    </View>
  )
}

export default Folders

const styles = StyleSheet.create({})