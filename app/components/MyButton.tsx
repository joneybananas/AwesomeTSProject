import React from 'react'

import { IconButton } from 'react-native-paper'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { color } from 'react-native-reanimated'
import { Props } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonItem'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ReactElement } from 'react'
import { useState } from 'react'

const getData = async (): Promise<number[]> => {
  var arr: number[]

  arr = await AsyncStorage.getItem('arr').then((response) => {
    if (response != null) return JSON.parse(response)
  })
  return arr
}

const MyButton = (props: { charID: number }): ReactElement => {
  const [checkedButton, setCheckedButton] = useState(false)
  
  getData().then((ch) => {
    if (ch != null && ch.indexOf(props.charID) != -1) {
      setCheckedButton(true)
    } else {
      setCheckedButton(false)
    }
  })

  if (checkedButton) {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='red'
        onPress={() => {
          favoriteCheck(props.charID)
          setCheckedButton(false)
        }}
        style={{ alignContent: 'stretch' }}
      />
    )
  } else {
    return (
      <IconButton
        icon='heart'
        size={40}
        color='white'
        onPress={() => {
          favoriteCheck(props.charID)
          setCheckedButton(true)
        }}
        style={{ alignContent: 'stretch' }}
      />
    )
  }
}

const favoriteCheck = async (charID: number) => {
  console.log(charID)

  var arr: number[] 

  arr = await AsyncStorage.getItem('arr').then((response) => {
    if (response != null) return JSON.parse(response)
  })
  if (arr == undefined){arr = []}
  console.log(arr)

  if (arr != undefined && arr.indexOf(charID) != -1) {
    arr = arrayRemove(arr,charID)
    await AsyncStorage.setItem('arr', JSON.stringify(arr)).then((ch) => {
      console.log('remove from favorite')
    })
  } else {
    arr.push(Number(charID))

    await AsyncStorage.setItem('arr', JSON.stringify(arr)).then((ch) => {
      console.log('add to favorite' + charID.toString())
    })
  }
}

function arrayRemove(arr:number[], value:number) { 
    
  return arr.filter(function(ele){ 
      return ele != value; 
  });
}

export default MyButton
