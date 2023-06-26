import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Photo() {
  return (
    <View>
      <Text>Image</Text>
      <Image source={{
        uri: 'https://images.unsplash.com/photo-1687259564825-1050611d715c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
      }} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height: 280,
  } 
})