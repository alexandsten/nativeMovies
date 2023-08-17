import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MovieAPI from '../components/MovieAPI';

export default function DummyPage1({navigation}) {
  return (
    <View>
      
      <Text>Dummy page 1 - vill ha list med filmer här</Text>
      <Button
        title="Open dummy page 2"
        onPress={() => navigation.navigate('Dummy page 2')}
      />
      <MovieAPI />
    </View>
  )
}
