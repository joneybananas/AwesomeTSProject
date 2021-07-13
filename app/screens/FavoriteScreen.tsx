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
import { Character, CharactersInformation, Information } from '../Types/types'

const isCharactersInformation = (obj: any): obj is CharactersInformation => {
  return obj.info
}

const FavoriteScreen = () => {
  const [post, setPost] = useState<Character[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isEmpty, setIsempty] = useState<boolean>(true)
  const [isFavoriteButttonChecked, setIsFavoriteButttonChecked] =
    useState(false)

  const keyExtractor = (item: Character, index: number): string =>
    `${item.id}/${index}`

  const isFocused = useIsFocused()
  const getFavoritesIdx = async () => {
    try {
      const favoritesIdx = await getStorageData()
      console.log('GET', favoritesIdx)
      const favoritesChs = await fetchData<Character[]>(favoritesIdx)
      if (isCharactersInformation(favoritesChs)) {
        setIsempty(true)
      } else {
        setIsempty(false)
        if (Array.isArray(favoritesChs)) {
          setPost(favoritesChs)
        } else {
          console.log(favoritesChs)
          setPost([favoritesChs])
        }
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
      setPost([])
    }
  }

  useEffect(() => {
    console.log(isFavoriteButttonChecked, isFocused)
    getFavoritesIdx
    ;(isFocused || isFavoriteButttonChecked) && getFavoritesIdx()
  }, [isFocused, isFavoriteButttonChecked])

  const getStorageData = async (): Promise<number[]> => {
    try {
      const favoritesIdxStr = await AsyncStorage.getItem('arr')
      const favoritesIdx: number[] = favoritesIdxStr
        ? JSON.parse(favoritesIdxStr)
        : []
      //setLoading(false)
      return favoritesIdx
    } catch (error) {
      //setLoading(false)
      console.error(error)

      return []
    }
  }

  const renderItem = ({ item }: { item: Character }) => (
    <Post
      person={item}
      //setIsFavoriteButttonChecked={setIsFavoriteButttonChecked}
    />
  )

  if (isEmpty) {
    return (
      <SafeAreaView style={styles.emptyView}>
        <Text style={styles.emptyText}>Favorites empty</Text>
      </SafeAreaView>
    )
  } else {
    if (loading) {
      return <ActivityIndicator />
    } else {
      return (
        <SafeAreaView style={styles.background}>
          <FlatList
            style={styles.list}
            data={post}
            keyExtractor={keyExtractor}
            refreshing={false}
            onRefresh={getFavoritesIdx}
            renderItem={renderItem}
          />
        </SafeAreaView>
      )
    }
  }
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
  },
  list: {
    //marginTop: 5,

    padding: 5,

    flex: 1,
    backgroundColor: '#1A2E41'
  },
  background: {
    flex: 1,
    backgroundColor: '#1A2E41'
  },
  emptyText: {
    fontSize: 40,
    color: '#6C67C7'
  },
  emptyView: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#777777',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#1A2E41'
  }
})
export default FavoriteScreen

const getArr = <T,>(elem: T): T[] => {
  return [elem]
}
