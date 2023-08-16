import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';


export default function App() {
  return (
    <>
      <HeaderComp />
      <Navigation />
      <View style={styles.container}>
     
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      
      </View>
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
