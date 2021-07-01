

import React, { ReactElement, useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import {
  SafeAreaView,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const App = ({}) => {  
  
 return(
   <AppNavigator></AppNavigator>
 );

};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 36,
    color:"#DDDDDD",
    textAlign : 'center'
    
    
  },
});




export default App;
