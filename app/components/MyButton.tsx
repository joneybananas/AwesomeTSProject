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
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

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
    const favoritesIdx: number[] =
      favoritesIdxStr != null ? JSON.parse(favoritesIdxStr) : []
    return favoritesIdx
  } catch (error) {
    console.error(error)

    return []
  }
}

interface OwnProps {
  charID: number
  setIsFavoriteButttonChecked?: (IsFavoriteButttonChecked: boolean) => void
  update?: boolean
}

const MyButton = ({
  charID,
  setIsFavoriteButttonChecked,
  update
}: OwnProps): ReactElement => {
  const [ischeckedButton, setCheckedButton] = useState(false)

  const [favoritesIdx, setFavoritesIdx] = useState<number[]>([])
  useEffect(() => {
    console.log(update)
    getStorageData().then((ch) => {
      if (ch.indexOf(charID) != -1) {
        setCheckedButton(true)
      } else {
        setCheckedButton(false)
      }
    })
  })

  const onPressLike = (): void => {
    //favoriteCheck(charID)

    if (ischeckedButton) {
      favoriteChange(charID).then((iter) => {
        setCheckedButton(false)
        setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(false)
      })
    } else {
      favoriteChange(charID).then((iter) => {
        setCheckedButton(true)
        setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(true)
      })
    }
  }

  if (ischeckedButton) {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='#6C67C7'
        onPress={onPressLike}
        style={{ alignContent: 'stretch' }}
      />
    )
  } else {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='#93A9BF'
        onPress={onPressLike}
        style={{ alignContent: 'stretch' }}
      />
    )
  }
}

const favoriteChange = async (charID: number) => {
  // проверяет есть ли элемент в избранном и добавляет или удаляет

  let arr: number[]

  arr = await AsyncStorage.getItem('arr').then((response) => {
    return JSON.parse(response || '[]')
  })

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
      console.log('add', arr)
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
