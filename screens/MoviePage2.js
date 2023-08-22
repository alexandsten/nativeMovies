import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TextInput, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';



export default function MoviePage2({navigation}) {
  const route = useRoute();
  const item = route.params?.item; 

  const [movieItems, setmovieItems] = useState(""); // hook för movie
  const [movieResponse, setmovieResponse] = useState("")  // hook för bil API
  const [error, setError] = useState('');   // hook för error

const getMovies = async () => {
  try {

    const response =  await fetch(
      `https://www.omdbapi.com/?apikey=b726c748&i=${item.imdbID}`
    );
   const movieApi= await response.json();
   
    setmovieResponse(movieApi)
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
    <View>
        <TextInput value={movieResponse.Title} />


        <View>
        <Image style={styles.logo} source={{ uri: movieResponse.Poster }} />
          <TextInput value={movieResponse.Type} />
          <TextInput value={movieResponse.Year} />
          <TextInput value={movieResponse.Genre} />

        </View>
        
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#999',
      borderStyle: 'dashed',
      padding: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#b8bff7',
    justifyContent: 'space-between',
    width: 60,
    height: 40
  }, logo: {
    width: 150, // Set the desired width for the image
    height: 150, // Set the desired height for the image
  },
});