

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {
  SafeAreaView,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

function main () {
return(
  <View>
    <Text style ={styles.textstyle}>
      Мой загрузочный экран
    </Text>
  </View>
  );
};

const App = ({}) => {  
  
  // return(
  //   main())

  return (AppNavigator())

};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 36,
    color:"#DDDDDD",
    textAlign : 'center'
    
    
  },
});




export default App;
