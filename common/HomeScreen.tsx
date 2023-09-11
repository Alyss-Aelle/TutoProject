import { Button,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='go details' 
      onPress={() => navigation.navigate('Detail',{id: 25})} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})