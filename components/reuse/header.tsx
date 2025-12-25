import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { homeStyle } from '@/assets/style/home'

const Headercom = () => {
  return (
    <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.header}>
          <Image
            style={homeStyle.logo}
            source={require('../../assets/logo/Brand.png')}
          />
          <TouchableOpacity onPress={() => console.log('Profile clicked')}>
            <Ionicons name="person-circle-outline" size={36} color="#0f172a" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Headercom