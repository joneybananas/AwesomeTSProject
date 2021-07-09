import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createNativeWrapper } from 'react-native-gesture-handler'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'
import { useNavigation } from '@react-navigation/core'

import startgif from '../../app/res/start.gif'
import { RootStackParamList } from '../navigation/types'

const LaunchScreen = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  setTimeout(() => {
    //navigation.reset({index: 0, routes: [{name: 'MainScreen'}]});
    navigation.navigate('MainScreen')
  }, 500)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
      }}>
      <Image source={startgif} style={{ flex: 1 }} />
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
export default LaunchScreen
