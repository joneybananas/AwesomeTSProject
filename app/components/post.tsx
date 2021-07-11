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
  update?: boolean
}

export const Post = React.memo(
  ({ setIsFavoriteButttonChecked, person, update }: OwnProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
    //
    const getSingleCharacter = () => {
      navigation.navigate('CharacterScreen', { charID: person.id })
    }
    const [btn, btnch] = useState()

    return (
      <TouchableOpacity style={styles.background} onPress={getSingleCharacter}>
        <View style={styles.constainer}>
          <Image source={{ uri: person.image }} style={styles.imagestyle} />

          <View style={styles.viewStyle}>
            <Text style={styles.nameText}>{person.name} </Text>
            <Text style={styles.statusText}>{person.status}</Text>
          </View>

          {
            <MyButton
              charID={person.id}
              setIsFavoriteButttonChecked={setIsFavoriteButttonChecked}
              update={update}
            />
          }
        </View>
      </TouchableOpacity>
    )
  }
)

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#15105E'
  },
  constainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#9ee7ff',
    borderRadius: 50,
    display: 'flex'
  },
  imagestyle: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  viewStyle: {
    width: 200,
    flex: 1
  },
  nameText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: 'serif'
  },
  statusText: { marginLeft: 10 }
})
