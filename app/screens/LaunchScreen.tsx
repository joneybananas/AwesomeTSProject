import { createStackNavigator } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'
import { createNativeWrapper } from 'react-native-gesture-handler'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions'
import { useNavigation } from '@react-navigation/core'


import startgif from '../../app/res/start.gif'

const LaunchScreen = ():ReactElement=> {
const navigation = useNavigation();
setTimeout(()=>{
    navigation.reset({index: 0, routes: [{name: "Feed"}]})
},4500);
  

return(
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
    <Image source = {startgif} style={{width: 100, height: 100}}/>
</View>)


}

const styles = StyleSheet.create({

constainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
},
textt:{
textAlign : 'center'
}


})
export default  LaunchScreen
