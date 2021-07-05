import {useEffect} from 'react';
import {useState} from 'react';
import { concat } from 'react-native-reanimated';
import {Character, CharactersInformation} from '../Types/types';
import fetchData from './fetchData';
const getArr = <T,>(elem: T): T[] => {
  return [elem];
};


const useEffectPosts = () => {
  const [isLoading, setLoading] = useState(true);
  const [post,setPost] = useState<Character[]>()
  const [page,setPage] = useState<number>(0)
  
  

  useEffect(() => {
    fetchData<CharactersInformation>('')
      .then(ch => {
          setLoading(false)
          setPost(ch.results)}
          )        
      
    setPage(1)
    }
        
  ,[]);
    
    const onEndReached =  ()=>{
      if (page<=35){
    const newPost =  fetchData<CharactersInformation>(page+1).then(ch=>{
      setPost(post?.concat(ch.results));
      setPage(page+1)
      
    })
    }
    }
  

   return {isLoading,post,onEndReached};
};

export default useEffectPosts;
