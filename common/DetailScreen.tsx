import { Button,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailScreen = ({route,navigation}) => {
    const{id} = route.params;
  return (
    <View>
      <Text>DetailScreen{id}</Text>
      <Button title='go profile' 
      onPress={() => navigation.navigate('Profile',{id: 330})} />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})