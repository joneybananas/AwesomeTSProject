import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '../screens/FeedScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import LaunchScreen from '../screens/LaunchScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import React, {Component, ReactElement, useEffect} from 'react';
import { RectButton } from 'react-native-gesture-handler';


const AppNavigator = ():ReactElement=>{


    return (<NavigationContainer> 
        <Stack.Navigator initialRouteName={'Launch'}>
            <Stack.Screen name={'Launch'} component={LaunchScreen}/>
            <Stack.Screen name={'Feed'} component={TabNavigator}/>
        </Stack.Navigator>
        </NavigationContainer>)
}

const TabNavigator=():ReactElement=>{
    return <Tab.Navigator initialRouteName='Feed'>
    <Tab.Screen
    
    name = "Feed"
    component ={FeedScreen}
    options ={{title: 'feed'}}
    />
    <Tab.Screen
    name ="Favorite"
    component ={FavoriteScreen}
    options={{title:'favorite'}}
    />



    </Tab.Navigator>
}

export default AppNavigator
