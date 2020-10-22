// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {First, Second} from '../pages'


const Stack = createStackNavigator();

function Router () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='SecondPage'
        headerMode={'none'}
        screenOptions={{
          gestureEnabled:true
        }}
      >
        <Stack.Screen 
          name="HomePage" 
          component={First} 
          options={{title:'Gonderiler'}} 
        />
        <Stack.Screen 
          name="SecondPage" 
          component={Second} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;