import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screen/Home';
import Profil from './screen/Profil';
import{ NavigationContainer} from '@react-navigation/native'


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
<Tab.Navigator> 
      <Tab.Screen name='Homes' component={Home} />
      <Tab.Screen name='Profil' component={Profil} />
    </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})