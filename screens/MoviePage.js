import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MovieAPI from '../components/MovieAPI';



export default function MoviePage({navigation}) {
  return (
    <View>
        
        <Text>Movie Page 1 - här ska en film visas</Text>
        <Button
        title="Open movie page 2"
        onPress={() => navigation.navigate('Movie-page2')}
      />
     <MovieAPI />
    </View>
  )
}
