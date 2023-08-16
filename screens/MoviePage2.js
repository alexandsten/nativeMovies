import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';



export default function MoviePage2({navigation}) {
  return (
    <View>
        <Text>Movie Page 2</Text>
        <Button
        title="Open movie page 1"
        onPress={() => navigation.navigate('Movie-page')}
      />
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
    </View>
  )
}
