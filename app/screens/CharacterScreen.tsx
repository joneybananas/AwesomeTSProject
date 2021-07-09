import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RootStackParamList } from '../navigation/types'
import { Character } from '../Types/types'

interface OwnProps {
  person: Character
  //   //setIsFavoriteButttonChecked?: (IsFavoriteButttonChecked: boolean) => void
}

const CharacterScreen = () => {
  const {
    params: { charID }
  } = useRoute<RouteProp<RootStackParamList, 'CharacterScreen'>>()

  return (
    <View style={styles.constainer}>
      <Text style={styles.textt}>{charID}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
  },
  textt: {
    textAlign: 'center'
  }
})
export default CharacterScreen
