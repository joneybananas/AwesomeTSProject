import React from 'react'

import { IconButton } from 'react-native-paper'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { call, color } from 'react-native-reanimated'
import { Props } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ReactElement } from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

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

  getStorageData().then((ch) => {
    if (ch.indexOf(charID) != -1) {
      setCheckedButton(true)
    } else {
      setCheckedButton(false)
    }
  })

  const onPressLike = (): void => {
    if (ischeckedButton) {
      favoriteChange(charID, (isSucces) => {
        setCheckedButton(false)
        setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(false)
      })
    } else {
      favoriteChange(charID, (isSucces) => {
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
        style={styles.MyButton}
      />
    )
  } else {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='#93A9BF'
        onPress={onPressLike}
        style={styles.MyButton}
      />
    )
  }
}

const favoriteChange = async (
  charID: number,
  callback: (isSuccesed: boolean) => void
) => {
  // проверяет есть ли элемент в избранном и добавляет или удаляет

  let arr: number[] = []
  arr = await getStorageData()

  if (arr.indexOf(charID) != -1) {
    arr = arrayRemove(arr, charID)
    console.log('remove ', arr)
    await wtightToStorage(arr)
    callback(true)
  } else {
    arr.push(charID)
    console.log('add', arr)
    await wtightToStorage(arr)
    callback(true)
  }
}

const arrayRemove = (arr: number[], value: number) => {
  return arr.filter((innerItem) => innerItem !== value) // not for object {} !== {}
}
const wtightToStorage = async (arr: number[]) => {
  await AsyncStorage.setItem('arr', JSON.stringify(arr))
}

const styles = StyleSheet.create({
  MyButton: {
    alignContent: 'stretch'
  }
})

export default MyButton
