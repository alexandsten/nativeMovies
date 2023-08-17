import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigation from './components/Navigation';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import DrawerNav from './components/DrawerNav';
import BottomDrawer from './components/BottomDrawer';
import MovieAPI from './components/MovieAPI';


export default function App() {
  return (
    <>
      <HeaderComp />
      
      
      
      <View >
     
        
        <StatusBar style="auto" />
       <MovieAPI />
      </View>
      <NavigationContainer>
          <BottomDrawer />
      </NavigationContainer>
     
     <FooterComp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
