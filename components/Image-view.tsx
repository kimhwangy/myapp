import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Image_view() {
  return (
    <View>
      <Text style={styles.headingText}>Regions Captured</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardA]}>
            <Text> Images here </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    marginHorizontal: 8,
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  cardA: {
    backgroundColor: '#50dbb4'
  }
})