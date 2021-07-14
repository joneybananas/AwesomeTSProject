import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicatorComponent,
  ActivityIndicator
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { RootStackParamList } from '../navigation/types'
import fetchData from '../services/fetchData'
import { Character } from '../Types/types'

const CharacterScreen = () => {
  const {
    params: { charID }
  } = useRoute<RouteProp<RootStackParamList, 'CharacterScreen'>>()

  const [char, setChar] = useState<Character>()

  const getData = async (charID: number) => {
    try {
      const favoritesChs = await fetchData<Character>([charID])
      setChar(favoritesChs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData(charID)
  }, [])
  if (char) {
    return (
      <ScrollView style={styles.mainView}>
        <Text style={styles.nameText}>{char.name}</Text>
        <View style={styles.constainer}>
          <Image source={{ uri: char.image }} style={styles.imagestyle}></Image>
          <Text style={styles.statusText}> {char.status}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.headerText}>{'Species: '}</Text>
          <Text style={styles.propertyText}>{char.species}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.headerText}>{'Type: '}</Text>
          <Text style={styles.propertyText}>{char.type}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.headerText}>{'Gender : '}</Text>
          <Text style={styles.propertyText}>{char.gender}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.headerText}>{'Origin : '}</Text>
          <Text style={styles.propertyText}>{char.origin.name}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.headerText}>{'Location : '}</Text>
          <Text style={styles.propertyText}>{char.location.name}</Text>
        </View>
      </ScrollView>
    )
  } else {
    return <ActivityIndicator />
  }
}

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    //flexGrow: 1,
    padding: 10,

    backgroundColor: '#1A2E41',
    //borderRadius: 50,
    display: 'flex'
  },
  charHead: {
    flexGrow: 1,
    flex: 1
  },
  statusText: {
    color: 'white',
    flex: 1,
    //backgroundColor: '#15105E',
    textAlignVertical: 'center',
    textAlign: 'right',
    alignItems: 'flex-end',
    fontSize: 30,
    marginEnd: 20
  },
  propertyView: {
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: 60,
    backgroundColor: '#1A2E41',
    borderWidth: 2,

    borderTopColor: '#123456',
    borderBottomColor: '#123456'
  },
  headerText: {
    marginLeft: 5,
    fontSize: 18,
    color: 'white',
    fontFamily: 'lucida grande'
  },
  propertyText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'lucida grande'
  },
  imagestyle: {
    width: 120,
    height: 120
  },
  nameText: {
    height: 50,
    color: 'white',
    textAlignVertical: 'center',
    borderWidth: 2,
    padding: 10,
    borderBottomColor: '#123456',

    textAlign: 'center',
    backgroundColor: '#1A2E41',
    fontFamily: 'lucida grande',
    fontSize: 20

    // alignItems: 'flex-end'
  },
  mainView: {
    flex: 1,

    backgroundColor: '#1A2E41'
  }
})
export default CharacterScreen
