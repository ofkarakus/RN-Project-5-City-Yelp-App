import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Cities, Restaurants} from './pages';

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
          name="CityList" 
          component={Cities}          
        />
        <Stack.Screen 
          name="RestaurantList" 
          component={Restaurants} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
