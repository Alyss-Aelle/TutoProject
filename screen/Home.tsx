import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../common/HomeScreen';
import DetailScreen from '../common/DetailScreen';

const Stack = createNativeStackNavigator() ;
const Home = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name ='Home' component={HomeScreen}/>
        <Stack.Screen name ='Detail' component={DetailScreen}/>
    </Stack.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})