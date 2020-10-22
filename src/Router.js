import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Countries, Metropolis} from './pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true
        }}
      >
        <Stack.Screen 
          name="CountryList" 
          component={Countries}          
        />
        <Stack.Screen 
          name="MetropolisList" 
          component={Metropolis} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
