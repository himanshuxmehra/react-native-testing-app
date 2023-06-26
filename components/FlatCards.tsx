import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'

export default function FlatCards() {
    const isDarkMode = useColorScheme()==='dark';

  return (
    <View>
      {/* <Text style={isDarkMode?[styles.headingText,styles.whiteText]:[styles.headingText,styles.darkText]}>//Flat Cards</Text> */}
      <View style={styles.container}>
        <TouchableOpacity>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.whiteText}>Photos</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.whiteText}>Videos</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.card,styles.cardThree]}>
            <Text style={styles.whiteText}>Memories</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
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
        backgroundColor: '#EF0344',
    },
    cardTwo:{
        backgroundColor: '#50DBB4',
    },
    cardThree:{
        backgroundColor: '#5DA3FA',
    },

  })