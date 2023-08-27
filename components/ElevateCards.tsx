import {ScrollView, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';

export default function ElevateCards() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      {/* <Text style={isDarkMode?[styles.headingText,styles.whiteText]:[styles.headingText,styles.darkText]}>Albums</Text> */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.whiteText}>Photos</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.whiteText}>Videos</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.whiteText}>Memories</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={styles.whiteText}>Trip</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text style={styles.whiteText}>Birthday</Text>
          </View>
          <View style={[styles.card, styles.cardSix]}>
            <Text style={styles.whiteText}>Woah!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  whiteText: {
    color: '#FFFFFF',
    fontWeight: '300',
  },
  darkText: {
    color: '#000',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    // position: "absolute",
  },
  cardOne: {
    backgroundColor: '#6D214F',
  },
  cardTwo: {
    backgroundColor: '#182C61',
  },
  cardThree: {
    backgroundColor: '#FC427B',
  },
  cardFour: {
    backgroundColor: '#FEA47F',
  },
  cardFive: {
    backgroundColor: '#82589F',
  },
  cardSix: {
    backgroundColor: '#F97F51',
  },
});
