import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function DummyPage1({navigation}) {
  return (
    <View>
      <Text>Dummy page 1</Text>
      <Button
        title="Open dummy page 2"
        onPress={() => navigation.navigate('Dummy page 2')}
      />
    </View>
  )
}
