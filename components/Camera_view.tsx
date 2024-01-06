import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { useCameraPermission } from 'react-native-vision-camera'

// const { hasPermission, requestPermission } = useCameraPermission()
// const usbCamera = useCameraDevice('external')


export default function camera_view() {
  return (
    <View>
      <Text style={styles.headingText}>Camera</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardA]}>
            <Text> Camera Here </Text>
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
    padding: 8,
    alignItems: 'center'

  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
    borderRadius: 4,
    margin: 8
  },
  cardA: {
    backgroundColor: '#50dbb4'
  }
})