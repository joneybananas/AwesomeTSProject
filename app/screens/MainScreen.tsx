import { useIsFocused } from '@react-navigation/native'
import React, { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { ListRenderItemInfo } from 'react-native'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  AsyncStorage
} from 'react-native'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import { Post } from '../components/post'
import fetchData from '../services/fetchData'
import useFetch from '../services/useFetch'
import { Character, CharactersInformation } from '../Types/types'

const MainScreen = () => {
  const isFocused = useIsFocused()
  const { isLoading, post, onEndReached } = useFetch()

  // const keyExtractor = useCallback((mama: { id: any }) => mama.id, [])
  const keyExtractor = (item: Character, index: number): string =>
    `${item.id}${index}`

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Character>) => <Post person={item} />,
    []
  )

  // const renderItem = useCallback(
  //   ({ item }: { item: Character }) => <Post {...item} />,
  //   []
  // )

  return (
    <SafeAreaView>
      <FlatList
        data={post}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.25}
        renderItem={renderItem}></FlatList>
    </SafeAreaView>
  )
}

// app->services->fetchData.tsx

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000'
  },
  textt: {
    textAlign: 'center'
  }
})
export default MainScreen
function id<T>(id: any) {
  throw new Error('Function not implemented.')
}

function getArr(post: Character[] | undefined) {
  throw new Error('Function not implemented.')
}
