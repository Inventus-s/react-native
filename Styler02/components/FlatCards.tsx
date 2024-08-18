import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading} >FlatCard</Text>
      <View style={styles.cardContainer} >
        <View style={[styles.card, styles.cardOne]} >
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]} >
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]} >
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]} >
          <Text>Red2</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '20%', 
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
})