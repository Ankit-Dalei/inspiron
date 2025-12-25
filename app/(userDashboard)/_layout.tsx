import { Stack, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

export default function AuthLayout() {
	return(
    <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#427bffff',
        tabBarInactiveTintColor: '#2e3033ff',
    }}>
      <Tabs.Screen name='home' 
        options={{
          title:'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name='events' 
        options={{
          title:"Event",
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name='tranning' 
        options={{
          title:"Tranning",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
    )
}
