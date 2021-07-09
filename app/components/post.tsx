import React, { useCallback } from 'react'
import { Character } from '../Types/types'

import { View, Text, StyleSheet, Image } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { IconButton } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MyButton from './MyButton'
import { Value } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootStackParamList } from '../navigation/types'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

// interface {person, (checkedButton)=>void }

interface OwnProps {
  person: Character
  setIsFavoriteButttonChecked?: (IsFavoriteButttonChecked: boolean) => void
}

export const Post = React.memo(
  ({ setIsFavoriteButttonChecked, person }: OwnProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    //
    const getSingleCharacter = () => {
      navigation.navigate('CharacterScreen', { charID: person.id })
    }
    const [btn, btnch] = useState()

    return (
      <TouchableOpacity onPress={getSingleCharacter}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            marginBottom: 10,
            backgroundColor: '#67c26e',
            display: 'flex'
          }}>
          <Image
            source={{ uri: person.image }}
            style={{ width: 80, height: 80, borderRadius: 80 }}
          />

          <View style={{ width: 200, flex: 1 }}>
            <Text style={{ fontSize: 20 }}>{person.name} </Text>
            <Text> {person.status}</Text>
          </View>

          <MyButton
            charID={person.id}
            setIsFavoriteButttonChecked={setIsFavoriteButttonChecked}
          />
        </View>
      </TouchableOpacity>
    )
  }
)
