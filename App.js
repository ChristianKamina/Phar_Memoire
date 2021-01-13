import React, {Component} from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Authentification from './Components/Connection/Authentification';
import {Provider as PaperProvider} from 'react-native-paper';
import R from './ressources/style.json';
import Inscription from './Components/Connection/Inscription'


const Stack=createStackNavigator();

export default function App (){
    return (
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerStyle:{
                      backgroundColor:R.color.primaryColor
                  },
                  headerTintColor:R.color.background
                  }}>
                    <Stack.Screen  name="AUTHENTIFICATION" component={Authentification} options={{title:'Authentification'}}/>
                    <Stack.Screen  name="INSCRIPTION" component={Inscription} options={{title:'Inscription'}}/>
                </Stack.Navigator>
              </NavigationContainer>
    )
  }