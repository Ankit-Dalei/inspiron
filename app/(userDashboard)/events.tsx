import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headercom from '@/components/reuse/header'
import { homeStyle } from '@/assets/style/home'

const events = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
        <Headercom/>
    </SafeAreaView>
  )
}

export default events