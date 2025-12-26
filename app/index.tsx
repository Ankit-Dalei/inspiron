import { Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { splashScreenStyles } from '@/assets/style/splashScreenStyle'
import { getAuthUsers, getUsers } from '@/database/dataStore'

const index = () => {
  const router=useRouter()
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const opacityAnimLogo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimLogo, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
    const checker=getAuthUsers()
    // console.log(getUsers())
    if (checker.status==200) {
      const timer = setTimeout(() => {
        router.replace("/home");
      }, 4000);
      return () => clearTimeout(timer);
    }
    else{
      const timer = setTimeout(() => {
        router.replace("/login");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);
  return(
    <SafeAreaView style={splashScreenStyles.container}>
      <Animated.Image
        style={[
          splashScreenStyles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnimLogo,
          },
        ]}
        source={require("../assets/logo/Logo.png")}
      />
      <Animated.Image
        style={[
          splashScreenStyles.logo2,
          {
            opacity: opacityAnim,
          },
        ]}
        source={require("../assets/logo/Brand.png")}
      />
    </SafeAreaView>
  )
}

export default index