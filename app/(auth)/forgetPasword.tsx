import { authStyle } from '@/assets/style/authStyle'
import { updateUsers } from '@/database/dataStore'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const forgetPasword = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirm_Password:"",
  });
  const handelSubmit = () =>{
    if(formData.email==''){
      ToastAndroid.show(`Email require 😒`, ToastAndroid.SHORT);
    }
    else if(formData.password==''){
      ToastAndroid.show(`Password require 😒`, ToastAndroid.SHORT);
    }
    else if(formData.password.length==0 || formData.password.length<6){
      ToastAndroid.show(`Password length must be 6 or above 😒`, ToastAndroid.SHORT);
    }
    else if(formData.confirm_Password.length==0 || formData.confirm_Password.length<6){
      ToastAndroid.show(`Password length must be 6 or above 😒`, ToastAndroid.SHORT);
    }
    else if(formData.password!==formData.confirm_Password){
      ToastAndroid.show(`Password length must be 6 or above 😒`, ToastAndroid.SHORT);
    }
    else{
      try {
        const response=updateUsers(formData.email,formData.password)
        if (response==200) {
          ToastAndroid.show(`Changeing successfully Done 😍!`, ToastAndroid.SHORT);
          router.replace('/login')
        } else {
          ToastAndroid.show(`Something went wrong 😔`, ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show(`Error 😡: ${error}`, ToastAndroid.SHORT);
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
      <Text style={authStyle.label}>Conform Password</Text>
      <TextInput
        style={authStyle.input}
        placeholder='Conform Password'
        value={formData.confirm_Password}
        onChangeText={(e)=>setFormData({...formData,confirm_Password:e})}
      />
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

export default forgetPasword