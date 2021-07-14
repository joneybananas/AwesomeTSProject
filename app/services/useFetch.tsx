import { useEffect, useState } from 'react'
import { Character, CharactersInformation } from '../Types/types'
import fetchData from './fetchData'

const useEffectPosts = () => {
  const [isLoading, setLoading] = useState(true)
  const [post, setPost] = useState<Character[]>([])
  const [page, setPage] = useState<number>(1)
  const [maxpages, setMaxpages] = useState<number>(1)

  useEffect(() => {
    fetchData<CharactersInformation>(page).then(({ info, results }) => {
      // ch -> ??? {} = ch
      setMaxpages(info.pages) //
      setPost((prevPost) => prevPost.concat(results))
      setLoading(false)
    }) // catch
  }, [page])

  const onEndReached = () => {
    if (page <= maxpages) {
      setPage(page + 1)
    }
  }

  return { isLoading, post, onEndReached }
}

export default useEffectPosts
