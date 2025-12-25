import { homeStyle } from '@/assets/style/home'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headercom from '../../components/reuse/header'

const home = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
        <Headercom/>
    </SafeAreaView>
  )
}

export default home