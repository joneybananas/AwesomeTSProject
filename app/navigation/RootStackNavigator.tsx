import { createStackNavigator } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import CharacterScreen from '../screens/CharacterScreen'
import LaunchScreen from '../screens/LaunchScreen'
import { TabNavigator } from './AppNavigator'
import { RootStackParamList } from './types'

const RootStackNavigator = (): ReactElement => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator initialRouteName={'LaunchScreen'}>
      <Stack.Screen
        name={'LaunchScreen'}
        options={{ headerShown: false }}
        component={LaunchScreen}
      />
      <Stack.Screen name={'MainScreen'} options={{}} component={TabNavigator} />
      <Stack.Screen name={'CharacterScreen'} component={CharacterScreen} />
    </Stack.Navigator>
  )
}

export default RootStackNavigator
