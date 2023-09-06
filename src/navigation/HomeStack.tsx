import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import FilterScreen from '../screens/FilterScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{gestureDirection: 'vertical'}}
      />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          presentation: 'fullScreenModal',
          gestureEnabled: true, // Enable swipe gesture
          gestureDirection: 'horizontal',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
