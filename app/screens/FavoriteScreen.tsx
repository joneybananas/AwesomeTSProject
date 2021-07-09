import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { onChange } from 'react-native-reanimated'
import { Post } from '../components/post'
import fetchData from '../services/fetchData'
import { Character } from '../Types/types'

const FavoriteScreen = () => {
  const [post, setPost] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isFavoriteButttonChecked, setIsFavoriteButttonChecked] =
    useState(false)

  const isFocused = useIsFocused()

  //AsyncStorage.

  const keyExtractor = useCallback((mama: { id: any }) => mama.id, [])
  const getStorageData = async (): Promise<number[]> => {
    try {
      const favoritesIdxStr = await AsyncStorage.getItem('arr')
      const favoritesIdx: number[] = favoritesIdxStr
        ? JSON.parse(favoritesIdxStr)
        : []
      setLoading(false)
      return favoritesIdx
    } catch (error) {
      setLoading(false)
      console.error(error)

      return []
    }
  }

  const renderItem = useCallback(
    ({ item }: { item: Character }) => (
      <Post
        person={item}
        setIsFavoriteButttonChecked={setIsFavoriteButttonChecked}
      />
    ),
    []
  )

  useEffect(() => {
    console.log(isFavoriteButttonChecked, isFocused)

    const getFavoritesIdx = async () => {
      try {
        const favoritesIdx = await getStorageData()
        console.log('GET', favoritesIdx)

        const favoritesChs = await fetchData<Character[]>(favoritesIdx)
        setPost(favoritesChs)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error)
        setPost([])
      }
    }

    isFocused && getFavoritesIdx()
  }, [isFocused, isFavoriteButttonChecked])

  //const arr: number[] = getArr<number>(qwe.arguments)

  // useEffect(() => {
  //   getStorageData()
  //     .then((res) => {
  //       b = res
  //     })
  //     .then(() => {
  //       console.log(b)

  //       fetchData<Character[]>(b).then((ch) => {
  //         setPost(ch)
  //       })
  //     })
  // }, [])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={post}
        keyExtractor={keyExtractor}
        refreshing={false}
        onRefresh={() => {
          //
        }}
        //onEndReached={onEndReached}
        //onEndReachedThreshold={0.25}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

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
export default FavoriteScreen

const getArr = <T,>(elem: T): T[] => {
  return [elem]
}
