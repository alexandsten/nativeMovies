import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const HeaderComp = () => {
  return (
    <View >
      <Text>Header</Text>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
    header: {
      flex: 1,
     
      backgroundColor: '#b8bff7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });