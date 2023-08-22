import React from 'react'


import { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Image,Button, TextInput } from 'react-native';
import KnappComp from './KnappComp';

export default function MovieAPI({navigation}) {

    
        const [searchName, setSearchName]= useState("");
        const [movieItems, setmovieItems] = useState(""); // hook för movie
        const [movieResponse, setmovieResponse] = useState("")  // hook för bil API
        const [error, setError] = useState('');   // hook för error

    const getMovies = async () => {
        try {
      
          const response =  await fetch(
            `https://www.omdbapi.com/?apikey=21adb06f&s=${searchName}`
          );
         const movieApi= await response.json();
         
          setmovieResponse(movieApi.Search)
          console.log("filmer")
        } catch (error) {
          console.log(error);
          setError("An error occurred while fetching the data");
        }
      };

      useEffect(() => {
        getMovies();
      }, []);
  return (
    <View >
        <Text>Sök här...</Text>
        <TextInput 
          value={searchName}
          style={styles.input} 
          placeholder="batman"      
          onChangeText={(value) => setSearchName(value)}    
        />
         <Button
      title="Sök artiklar"
     onPress={() => getMovies()}/>
        <FlatList  
        data={movieResponse}
        keyExtractor={item => item.imdbID}
        renderItem={({item}) => ( 
         <KnappComp  item={item} />
  )}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      backgroundColor: '#fdeca6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
    },
  });

