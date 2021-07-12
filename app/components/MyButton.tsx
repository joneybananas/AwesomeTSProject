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
  useEffect(() => {
    getStorageData().then((request) => {
      if (checkIdxInArr(request, charID)) {
        setCheckedButton(true)
      }
      setFavoritesIdx(request)
    })
    console.log('start ' + favoritesIdxx)
  }, [])

  const [ischeckedButton, setCheckedButton] = useState(false)

  const [favoritesIdxx, setFavoritesIdx] = useState<number[]>([])

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

  const checkIdxInArr = (arr: number[], Id: number): boolean => {
    if (arr.indexOf(charID) != -1) {
      return true
    } else {
      return false
    }
  }
  const addArrElem = (Id: number): number[] => {
    const arr = favoritesIdxx.concat(Id)

    return arr
  }
  function arrayRemoveItem(arr: number[], value: number) {
    return arr.filter(function (ele) {
      return ele != value
    })
  }
  const wrightToStorage = async (
    arr: number[]
    // callback: (isSuccesed: boolean) => void
  ) => {
    console.log('wright ' + arr)
    try {
      await AsyncStorage.setItem('arr', JSON.stringify(arr))
      // callback(true)
    } catch (error) {
      // callback(false)
      console.log(error)
    }
  }

  const favoriteChange = () => {
    if (checkIdxInArr(favoritesIdxx, charID)) {
      wrightToStorage(arrayRemoveItem(favoritesIdxx, charID))
    } else {
      wrightToStorage([...favoritesIdxx, charID])
    }
    getStorageData().then((request) => {
      setFavoritesIdx(request)
    })
  }

  const onPressLike = (): void => {
    console.log(favoritesIdxx)
    //favoriteCheck(charID)

    if (ischeckedButton) {
      favoriteChange()
      setCheckedButton(false)
      console.log('massiv ' + favoritesIdxx)
      setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(false)
    } else {
      favoriteChange()
      setCheckedButton(true)
      console.log('massiv ' + favoritesIdxx)
      setIsFavoriteButttonChecked && setIsFavoriteButttonChecked(true)
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

export default MyButton
