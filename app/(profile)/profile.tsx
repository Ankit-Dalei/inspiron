import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { logoutUser } from '@/database/dataStore'

const profile = () => {
  const router=useRouter()
  const handellogout=()=>{
    logoutUser()
    router.replace('/login')
  }
  return (
    <SafeAreaView>
      <Text onPress={handellogout}>Logout</Text>
    </SafeAreaView>
  )
}

export default profile