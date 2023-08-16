import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const FooterComp = () => {
  return (
   <View style={styles.footer}>
      <Text>Footer</Text>
   </View>
  )
}

export default FooterComp

const styles = StyleSheet.create({
    footer: {
      flex: 1,
      backgroundColor: '#b8bff7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
