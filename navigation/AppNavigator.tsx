import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from '../screens/FeedScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import React, {Component} from 'react';


function AppNavigator(){
    return (<NavigationContainer> 
        
            <Tab.Navigator>
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
            
        
    </NavigationContainer>)
}

export default AppNavigator
