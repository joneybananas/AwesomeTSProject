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
//import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { RootStackParamList } from '../navigation/types'
import fetchData from '../services/fetchData'
import { Character } from '../Types/types'

interface OwnProps {
  person: Character
  //   //setIsFavoriteButttonChecked?: (IsFavoriteButttonChecked: boolean) => void
}

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
      <View style={styles.mainView}>
        <View style={styles.constainer}>
          <Image source={{ uri: char.image }} style={styles.imagestyle}></Image>
          <View style={styles.charHead}>
            <Text style={styles.nameText}>{char.name}</Text>
            <Text style={styles.statusText}> {char.status}</Text>
          </View>
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
      </View>
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

    backgroundColor: '#15105E',
    //borderRadius: 50,
    display: 'flex'
  },
  charHead: {
    flexGrow: 1
  },
  statusText: {
    color: 'white',
    //backgroundColor: '#15105E',
    textAlign: 'right',
    alignItems: 'flex-end',
    fontSize: 15,
    marginEnd: 20
  },
  propertyView: {
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: 60,
    backgroundColor: '#15105E',
    borderWidth: 2,
    borderColor: '#8058AD'
  },
  headerText: {
    marginLeft: 5,
    fontSize: 18,
    color: 'white'
  },
  propertyText: {
    fontSize: 18,
    color: 'white'
  },
  imagestyle: {
    width: 100,
    height: 100
  },
  nameText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20

    // alignItems: 'flex-end'
  },
  mainView: {
    flex: 1,

    backgroundColor: '#15105E'
  }
})
export default CharacterScreen
