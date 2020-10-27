import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import {Cities, Restaurants, Info, About} from './pages';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Main = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}>
      <Stack.Screen
        name="CityList"
        component={Cities}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Image
                style={{height: 15, width: 20, marginLeft: 10}}
                source={require('./assets/hamburger.png')}
              />
            </TouchableOpacity>
          ),
          title: 'RestaurantApp',
          headerTitleStyle: {
            justifyContent: 'center',
            textAlignVertical: 'center',
          },
          headerTitleContainerStyle: {
            alignItems: 'center',
            marginRight: 50,
          },
        }}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="RestaurantList"
        component={Restaurants}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="InfoPage"
        component={Info}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
