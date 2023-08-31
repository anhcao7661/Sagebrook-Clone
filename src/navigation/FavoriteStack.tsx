import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
