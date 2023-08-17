import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import KnappComp from './KnappComp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MoviePage from '../screens/MoviePage';
import MoviePage2 from '../screens/MoviePage2';
import MovieAPI from './MovieAPI';


export default function Navigation() {

  const Stack = createStackNavigator();

  return (
   
      
      <Stack.Navigator screenOptions={{
        
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Movie-page" component={MoviePage} options={{
          title: 'Hej - movie page',
          headerShown: false,
    
        }}/>
        <Stack.Screen name="Movie-page2" component={MoviePage2} options={{
          title: 'Hej - movie page 2',
          headerShown: false,
    
        }}/>

        <Stack.Screen name="Button" component={KnappComp} options={{
          title: 'Hej - movie page',
          headerShown: false,
    
        }}/>

          <Stack.Screen name="Movie-API" component={MovieAPI} options={{
          title: 'Hej - movie page',
          headerShown: false,
    
        }}/>

       
    
      </Stack.Navigator>
   
    
  )
}
