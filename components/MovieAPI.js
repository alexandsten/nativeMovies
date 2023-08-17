import React from 'react'


import { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';

export default function MovieAPI() {

    

        const [movieItems, setmovieItems] = useState(""); // hook för movie
        const [movieResponse, setmovieResponse] = useState("")  // hook för bil API
        const [error, setError] = useState('');   // hook för error

    const getMovies = async () => {
        try {
      
          const response =  await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=21adb06f&s=batman&type=movie`
          );
         const movieApi= await response.json();
         
          setmovieResponse(movieApi.Search)
          console.log(movieApi)
        } catch (error) {
          console.log(error);
          setError("An error occurred while fetching the data");
        }
      };

      useEffect(() => {
        getMovies();
      }, []);
  return (
    <View>
         <FlatList  
                data={movieItems}
                keyExtractor={item => item.imdbID}
                renderItem={({item}) => ( 
                                 
                  <KnappComp  item={item} />
               
                )}
            />
    </View>
  )
}

