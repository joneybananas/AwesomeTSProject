import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FeedScreen from '../screens/FeedScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import LaunchScreen from '../screens/LaunchScreen';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
import React, {Component, ReactElement, useEffect} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CharacterScreen from '../screens/CharacterScreen';

const AppNavigator = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Launch'}>
        <Stack.Screen
          name={'Launch'}
          options={{headerShown: false}}
          component={LaunchScreen}
        />
        <Stack.Screen name={'Feed'} options={{}} component={TabNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator = (): ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      // barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favorite',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
