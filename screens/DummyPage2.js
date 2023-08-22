import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function DummyPage2({navigation}) {
  return (
    <View>
      <Text>Dummy page 2</Text>
      <Button
        title="Open dummy page 1"
        onPress={() => navigation.navigate('Dummy page 1')}
      />
       <Text>Vet ej vad som ska var här</Text>
    </View>
  )
}
