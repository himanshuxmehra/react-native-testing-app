import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Photo from './Photo'

export default class Gallery extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Gallery</Text>
        <Photo/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading : {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
    }
})