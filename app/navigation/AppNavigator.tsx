import { createStackNavigator } from '@react-navigation/stack'
import {
  BottomTabBar,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import FeedScreen from '../screens/MainScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import LaunchScreen from '../screens/LaunchScreen'
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()
import React, { Component, ReactElement, useEffect } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CharacterScreen from '../screens/CharacterScreen'
import RootStackNavigator from './RootStackNavigator'
import { Icon } from 'react-native-vector-icons/Icon'
import { StyleSheet } from 'react-native'

//import { Item } from "react-native-paper/lib/typescript/components/List/List";

const AppNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export const TabNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      activeColor='#fff'
      barStyle={{ backgroundColor: '#123456' }}
      // barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name='Feed'
        component={FeedScreen}
        options={{
          tabBarLabel: 'Characters',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='format-list-bulleted'
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='heart' color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
