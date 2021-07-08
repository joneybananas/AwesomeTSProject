import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import { onChange } from 'react-native-reanimated';
import { Post } from '../components/post';
import fetchData from '../services/fetchData';
import {Character} from '../Types/types';

const FavoriteScreen =  () => {
  const [post,setPost] = useState<Character[]>()

  //AsyncStorage.

  const keyExtractor = useCallback((mama: { id: any; }) => mama.id,[]);
  const qwe = async ():Promise<number[]> =>{
    var arr:number[]
    
     arr = await AsyncStorage.getItem('arr').then(response => {
    if (response != null) return JSON.parse(response);
  }) 
    return arr

};

const renderItem = useCallback(({item}:{item:Character})=>(
  <Post {...item}/>
  ),[]);
 

   //const arr: number[] = getArr<number>(qwe.arguments)
   var b :number[]
   useEffect(()=>{
   qwe().then(res=>{b=res}).then( ()=>{
    console.log(b)
  
    fetchData<Character[]>(b).then(ch=>{
     setPost(ch)
   }) })
  },[])
   

  return (
    <SafeAreaView>
      <FlatList data={post}
          keyExtractor={keyExtractor}
          //onEndReached={onEndReached}
          //onEndReachedThreshold={0.25}
          renderItem={renderItem}
             >

      </FlatList>


    </SafeAreaView>
  );
};

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
export default FavoriteScreen;



const getArr = <T,>(elem: T): T[] => {
  return [elem];
};
