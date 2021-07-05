import React from "react";
import { Character } from "../Types/types";

import {View,Text, StyleSheet, Image} from 'react-native'
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { IconButton } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  export const Post = React.memo((person:Character) =>(
    <View style={{flexDirection:'row',padding:10,marginBottom:10,backgroundColor:'#67c26e',display:'flex'}}>
       <Image source={{uri:person.image}} style ={{width:80,height:80,borderRadius:80}} />
       
        <View style={{width:200,flex:1}}> 
          <Text style={{fontSize:20}}>{person.name} </Text>
          <Text> {person.status}</Text>
        </View>
        <IconButton icon ='heart' 
        color={'red'}
        size={40}
        style={{alignContent:"stretch"}}
        onPress={() => console.log('Pressed')}/>
          

        
    </View>
 ));
