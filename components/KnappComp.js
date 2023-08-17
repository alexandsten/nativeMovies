import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import MoviePage from '../screens/MoviePage';


const KnappComp = ({item, navigation}) => {

  const buttonClick = () => {
    console.log("hello world")
}





  return (
    <View style={styles.container}>
    
      <TouchableOpacity onPress={() => buttonClick() }>
        <View style={styles.button}>
            
        <TextInput 
                
                value={item.Title}
               
            />
        </View>
      </TouchableOpacity>
      
     
      <Button
        title="Go to Movie page"
        onPress={() => navigation.navigate('MoviePage')}
      />


    </View>
  )
}

export default KnappComp

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
    },
  });
