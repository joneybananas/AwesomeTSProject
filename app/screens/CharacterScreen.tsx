import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CharacterScreen = () => (
  
  <View style={styles.constainer}>
    <Text style={styles.textt}>Character</Text>
  </View>
);

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  textt: {
    textAlign: 'center',
  },
});
export default CharacterScreen;
