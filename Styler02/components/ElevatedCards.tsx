import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading} >ElevatedCards</Text>
      <ScrollView horizontal={true} >
        <View style={[styles.card, styles.cardElevated]} >
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>on</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]} >
          <Text>😁</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 8,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
  }
})