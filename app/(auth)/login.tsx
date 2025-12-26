import { authStyle } from '@/assets/style/authStyle'
import { getAuthUsers, getUserByEmail, getUsers } from '@/database/dataStore'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
    const router=useRouter()
    // console.log('getusers',getUsers())
    // console.log('logsauthuser',getAuthUsers())
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const handelSubmit = () =>{
      if(formData.email==''){
        ToastAndroid.show(`Email require`, ToastAndroid.SHORT);
      }
      else if(formData.password==''){
        ToastAndroid.show(`Password require`, ToastAndroid.SHORT);
      }
      else if(formData.password.length==0 || formData.password.length<6){
        ToastAndroid.show(`Password length must be 6 or above`, ToastAndroid.SHORT);
      }
      else{
        const response=getUserByEmail(formData.email,formData.password)
        if (response==200) {
          ToastAndroid.show(`Login successfully!`, ToastAndroid.SHORT);
          router.replace('/(userDashboard)/home')
        }
        else if(response==404){
          ToastAndroid.show(`Dont have any account 😤`, ToastAndroid.SHORT);
          router.replace('/signup')
        }else{
          ToastAndroid.show(`Wrong Credential`, ToastAndroid.SHORT);
        }
      }
    }
    return (
      <SafeAreaView style={authStyle.container}>
          <View style={authStyle.branding}>
            <Image
              source={require("../../assets/logo/Logo.png")}
              style={authStyle.logo}
            />
            <Image
              source={require("../../assets/logo/Brand.png")}
              style={authStyle.logo2}
            />
          </View>
          <Text></Text>
          <Text style={authStyle.label}>Email</Text>
          <TextInput
            style={authStyle.input}
            placeholder='Email'
            value={formData.email}
            onChangeText={(e)=>setFormData({...formData,email:e})}
          />
          <Text style={authStyle.label}>Password</Text>
          <TextInput
            style={authStyle.input}
            placeholder='Password'
            value={formData.password}
            onChangeText={(e)=>setFormData({...formData,password:e})}
          />
          <Text style={authStyle.forgot}>
            <Link href="/forgetPasword" asChild>
              <Text>Forget Password</Text>
            </Link>
          </Text>
          <TouchableOpacity style={authStyle.button} onPress={handelSubmit}>
            <Text style={authStyle.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={authStyle.footerText}>
            If you dont have any account Please Create One 
            <Link href="/signup" asChild>
              <Text style={authStyle.link}> CLick Here</Text>
            </Link>
          </Text>
      </SafeAreaView>
    )
}

export default login