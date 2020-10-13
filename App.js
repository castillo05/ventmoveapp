import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/Home';
import LoginScreen from './screen/Login';
import SearchScreen from './screen/Search';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Title
import Titleheader from './components/titles/Titleheader';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown:false }} component={HomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown:false }} component={LoginScreen} />
        <Stack.Screen name="Search" options={
          { 
            headerShown:true,
            headerTitle:props=><Titleheader title='Ventmove'></Titleheader>,
             headerTintColor:'#000', 
             headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft:60
          }, 
        }
          } component={SearchScreen} />
      </Stack.Navigator>
           
            <StatusBar style="auto" />
      </View>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
