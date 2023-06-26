import { ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

export default function ElevateCards() {
    const isDarkMode = useColorScheme()==='dark';
  return (
    <View>
      <Text style={isDarkMode?[styles.headingText,styles.whiteText]:[styles.headingText,styles.darkText]}>Media</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
            <Text style={styles.whiteText}>Tap</Text>
            <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.whiteText}>Photos</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.whiteText}>Videos</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.whiteText}>Memories</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.whiteText}>Memories</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.whiteText}>Memories</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.whiteText}>Memories</Text>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
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
    card:{
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        justifyContent: 'center',
        flex:1,  
        alignItems:'center',
    },
    cardOne:{
        backgroundColor: '#9027ec',
    },
    cardTwo:{
        backgroundColor: '#c2d6d0',
    },
    cardThree:{
        backgroundColor: '#e9e253',
    },

  })