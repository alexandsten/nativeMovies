import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';



export default function MoviePage2({navigation}) {
  const route = useRoute();
  const item = route.params?.item; 

  return (
    <View>
        <TextInput value={item.Title} />
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
