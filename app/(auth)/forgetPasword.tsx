import { authStyle } from '@/assets/style/authStyle'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const forgetPasword = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
    confirm_Password:"",
  });
  const handelSubmit = () =>{
      ToastAndroid.show(`Submitted successfully!${formData}`, ToastAndroid.SHORT);
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