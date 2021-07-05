import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView, ActivityIndicator, Image} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { Post } from '../components/post';

import fetchData from '../services/fetchData';
import useFetch from '../services/useFetch';
import { Character, CharactersInformation } from '../Types/types';




const FeedScreen = () => {
 
  const{isLoading,post,onEndReached} = useFetch()
  const keyExtractor = useCallback((mama: { id: any; }) => mama.id,[]);
  const renderItem = useCallback(({item})=>(
    <Post {...item}/>
    ),[]);
  //const keyExtractor = ch => post[ch].id.toString()
//   ({item})=><View>
//   <Image source={{uri:item.image}} style ={{width:40,height:40}} />
//  </View> 
  
  return (
    <SafeAreaView>
      <FlatList data={post}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.25}
          renderItem={renderItem}
             >

      </FlatList>


    </SafeAreaView>
  )
};

// app->services->fetchData.tsx

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
export default FeedScreen;
function id<T>(id: any) {
  throw new Error('Function not implemented.');
}

function getArr(post: Character[] | undefined) {
  throw new Error('Function not implemented.');
}

