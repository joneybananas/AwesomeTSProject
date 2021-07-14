import { useEffect, useState } from 'react'
import { ToastAndroid } from 'react-native'
import { Character, CharactersInformation } from '../Types/types'
import fetchData from './fetchData'

const useEffectPosts = () => {
  const [isLoading, setLoading] = useState(true)
  const [post, setPost] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  const [maxpages, setMaxpages] = useState<number>(1)

  useEffect(() => {
    fetchData<CharactersInformation>(page)
      .then((ch) => {
        setMaxpages(ch.info.pages)
        setPost((prevPost) => prevPost.concat(ch.results))
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
        ToastAndroid.showWithGravity('You reach end', 1000, ToastAndroid.CENTER)
      })
  }, [page])

  const onEndReached = () => {
    if (page <= maxpages) {
      setPage(page + 1)
      console.log('cur page ' + page)
    }
  }
  const Refresh = (): void => {
    if (page != 1) {
      setPost([])
      setPage(1)
    }
  }

  return { page, maxpages, isLoading, post, onEndReached, Refresh }
}

export default useEffectPosts
