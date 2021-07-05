import {
  Character,
  Information,
  Location,
  Origin,
  CharactersInformation,
} from '../Types/types';

const requestInit: RequestInit = {
  method: 'GET', // POST PUT PATCH
};

const fetchData = <T,>(getParam: '' | number | number[]| string): Promise<T> => {
  let url: string = 'https://rickandmortyapi.com/api/character/';
  //Number(getParam)
   if(typeof getParam === 'number'){
     url+='?page='+getParam.toString();
   }else{
  url += String(getParam);}

  console.log(url);
  return fetch(url, requestInit) // Promise
    .then(response => response.json() as Promise<T>) // response->Promise
    .then(responseJSON => {
      // good response {}
      //  console.log(responseJSON )
      return responseJSON ;
    })
    .catch(error => {
      // {message: string}
      console.log(error.message);
      return Promise.reject(error);
    });

     
};

export default fetchData
