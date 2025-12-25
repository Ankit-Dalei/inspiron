import { authStyle } from '@/assets/style/authStyle'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username:"",
    phone:"",
    password: "",
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
      <Text style={authStyle.label}>Username</Text>
      <TextInput
        style={authStyle.input}
        placeholder='Username'
        value={formData.username}
        onChangeText={(e)=>setFormData({...formData,username:e})}
      />
      <Text style={authStyle.label}>Phone</Text>
      <TextInput
        style={authStyle.input}
        placeholder='Phone'
        value={formData.phone}
        onChangeText={(e)=>setFormData({...formData,phone:e})}
      />
      <Text style={authStyle.label}>Password</Text>
      <TextInput
        style={authStyle.input}
        placeholder='Password'
        value={formData.password}
        onChangeText={(e)=>setFormData({...formData,password:e})}
      />
      <TouchableOpacity style={authStyle.button} onPress={handelSubmit}>
        <Text style={authStyle.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={authStyle.footerText}>
        Go back to login
        <Link href="/login" asChild>
          <Text style={authStyle.link}> CLick Here</Text>
        </Link>
      </Text>
    </SafeAreaView>
  )
}

export default signup