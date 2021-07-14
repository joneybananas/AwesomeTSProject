import { useIsFocused } from '@react-navigation/native'
import React, { useState } from 'react'
import { useMemo } from 'react'
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

  const keyExtractor = (item: Character, index: number): string =>
    `${item.id}${index}`

  const renderItem = ({ item }: ListRenderItemInfo<Character>) => (
    <Post person={item} update={isFocused} />
  )

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView style={styles.constainer}>
      <FlatList
        style={styles.list}
        data={post}
        updateCellsBatchingPeriod={50}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.25}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

// app->services->fetchData.tsx

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: '#1A2E41'
  },
  list: {
    paddingTop: 5,
    //paddingEnd:5,
    padding: 5,
    backgroundColor: '#1A2E41'
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
