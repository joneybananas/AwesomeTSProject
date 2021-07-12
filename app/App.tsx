import React, { ReactElement, useEffect } from 'react'
import AppNavigator from './navigation/AppNavigator'
import { AppState, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = ({}) => {
  //AsyncStorage.setItem('arr', '[1,2,3]')
  return <AppNavigator />
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 36,
    color: '#DDDDDD',
    textAlign: 'center'
  }
})

export default App
