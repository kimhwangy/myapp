import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Camera_view from './components/Camera_view'
import Image_view from './components/Image-view'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Camera_view />
      <Image_view />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App