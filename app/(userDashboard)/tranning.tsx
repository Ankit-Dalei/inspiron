import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headercom from '../../components/reuse/header'
import { FlatList, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { traininglist } from '@/assets/data/tranningList'
import { cardStyle } from '@/assets/style/cardStyle'
import { Ionicons } from '@expo/vector-icons'

const tranning = () => {
    const [numColumns,setNewColumns] = useState(1)
    const [search,setSearch] = useState("")
    const filteredData = traininglist.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <Headercom/>
            <SafeAreaView>
                <View style={cardStyle.searchRow}>
                  <TextInput
                    style={cardStyle.input}
                    placeholder="Search..."
                    value={search}
                    onChangeText={setSearch}
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                  />
                  {
                    numColumns==1?
                    <TouchableOpacity onPress={() => setNewColumns(2)}>
                    <Ionicons
                      name="list-outline"
                      size={24}
                      color={numColumns === 1 ? '#2563eb' : '#94a3b8'}
                    />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => setNewColumns(1)}>
                    <Ionicons
                      name="grid-outline"
                      size={24}
                      color={numColumns === 2 ? '#2563eb' : '#94a3b8'}
                    />
                  </TouchableOpacity>
                  }
                </View>
                  {numColumns==1?
                      <FlatList
                        key={numColumns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={1}
                        contentContainerStyle={{ paddingVertical: 12, paddingBottom: 100   }}
                        renderItem={({ item }) => (
                          <View style={cardStyle.card}>
                            <Text style={cardStyle.title}>{item.title}</Text>
                            <Text style={cardStyle.company}>Company: {item.company}</Text>
                            <Text style={cardStyle.duration}>Duration: {item.duration}</Text>
                            <Text style={cardStyle.date}>Posted on: {item.date}</Text>
                          </View>
                        )}
                      />:
                      <FlatList
                        key={numColumns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={{ paddingVertical: 12, paddingBottom: 100   }}
                        renderItem={({ item }) => (
                          <View style={cardStyle.card2}>
                            <Text style={cardStyle.title}>{item.title}</Text>
                            <Text style={cardStyle.company}>Company: {item.company}</Text>
                            <Text style={cardStyle.duration}>Duration: {item.duration}</Text>
                            <Text style={cardStyle.date}>Posted on: {item.date}</Text>
                          </View>
                        )}
                      />
                  }
            </SafeAreaView>
        </>
  )
}

export default tranning