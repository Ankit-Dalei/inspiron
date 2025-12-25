import { authStyle } from '@/assets/style/authStyle'
import { insertUser } from '@/database/dataStore'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, View, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    email: "",
    username:"",
    phone:"",
    password: "",
  });
  const handelSubmit = () =>{
      if(formData.email==''){
        ToastAndroid.show(`Email require`, ToastAndroid.SHORT);
      }
      else if(formData.username==''){
        ToastAndroid.show(`Username require`, ToastAndroid.SHORT);
      }
      else if(formData.phone==''){
        ToastAndroid.show(`Phone require`, ToastAndroid.SHORT);
      }
      else if(formData.phone.length==0 || formData.phone.length!=10){
        ToastAndroid.show(`Enter 10 digit`, ToastAndroid.SHORT);
      }
      else if(formData.password==''){
        ToastAndroid.show(`Password require`, ToastAndroid.SHORT);
      }
      else if(formData.password.length==0 || formData.password.length<6){
        ToastAndroid.show(`Password length must be 6 or above`, ToastAndroid.SHORT);
      }
      else{
        const response = insertUser(formData.username,formData.email,formData.phone,formData.password)
        ToastAndroid.show(`Submitted successfully!`, ToastAndroid.SHORT);  
        if (response==200) {
          router.push('/login')
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