import React from 'react'

import { IconButton } from 'react-native-paper'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { color } from 'react-native-reanimated'
import { Props } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ReactElement } from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'

// const getData = async (): Promise<number[]> => {
//   var arr: number[]

//   arr = await AsyncStorage.getItem('arr').then((response) => {
//     if (response != null) return JSON.parse(response)
//   }).catch(error){
//     console.log(error);
//     )

//   }
//   return arr
// }

const getStorageData = async (): Promise<number[]> => {
  try {
    const favoritesIdxStr = await AsyncStorage.getItem('arr')
    const favoritesIdx: number[] = favoritesIdxStr
      ? JSON.parse(favoritesIdxStr)
      : []
    return favoritesIdx
  } catch (error) {
    console.error(error)

    return []
  }
}

interface OwnProps {
  charID: number
  setIsFavoriteButttonChecked?: (IsFavoriteButttonChecked: boolean) => void
}

const MyButton = ({
  charID,
  setIsFavoriteButttonChecked
}: OwnProps): ReactElement => {
  const [ischeckedButton, setCheckedButton] = useState(false)

  const [favoritesIdx, setFavoritesIdx] = useState<number[]>([])

  getStorageData().then((ch) => {
    setFavoritesIdx(ch)
    setCheckedButton(ch.indexOf(charID) != -1)
  })

  const onPressLike = (): void => {
    // favoriteCheck(charID)

    if (ischeckedButton) {
      setCheckedButton(false)
      setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(false)
    } else {
      setCheckedButton(true)
      setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(true)
    }
  }

  if (ischeckedButton) {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='red'
        onPress={onPressLike}
        style={{ alignContent: 'stretch' }}
      />
    )
  } else {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='white'
        onPress={onPressLike}
        style={{ alignContent: 'stretch' }}
      />
    )
  }
}

const favoriteCheck = async (charID: number) => {
  // проверяет есть ли элемент в избранном и добавляет или удаляет

  let arr: number[]

  arr = await AsyncStorage.getItem('arr').then((response) => {
    return JSON.parse(response || '[]')
  })

  if (arr == undefined) {
    arr = []
  }

  if (arr.indexOf(charID) != -1) {
    arr = arrayRemove(arr, charID)
    try {
      console.log('REMOVE', arr)

      await AsyncStorage.setItem('arr', JSON.stringify(arr))
    } catch (error) {
      console.log(error)
    }
  } else {
    arr.push(charID)
    try {
      await AsyncStorage.setItem('arr', JSON.stringify(arr))
    } catch (error) {
      console.log(error)
    }
  }
}

function arrayRemove(arr: number[], value: number) {
  return arr.filter((innerItem) => innerItem !== value) // not for object {} !== {}
}

export default MyButton
