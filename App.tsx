

import React, { useEffect } from 'react';
import AppNavigator from './navigation/AppNavigator';
import {
  SafeAreaView,
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function Main () {

  const navigation = useNavigation()
  useEffect(()=>{
      setTimeout(() => {
          navigation.reset({index: 0, routes: [{name: "Feed"}]})
      }, 3000);
  },[])

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

  return  <Main/>//<AppNavigator/>

};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 36,
    color:"#DDDDDD",
    textAlign : 'center'
    
    
  },
});




export default App;
