import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';



export default function MoviePage({navigation}) {
  return (
    <View>
        
        <Text>Movie Page 1</Text>
        <Button
        title="Open movie page 2"
        onPress={() => navigation.navigate('Movie-page2')}
      />
     
    </View>
  )
}
