import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreens/AccountScreen';
import LoginScreen from '../screens/AccountScreens/LoginScreen';
import EditProfileScreen from '../screens/AccountScreens/EditProfileScreen';
import CustomerServiceScreen from '../screens/AccountScreens/CustomerServiceScreen';
import NotificationScreen from '../screens/AccountScreens/NotificationScreen';
import AddressBookScreen from '../screens/AccountScreens/AddressBookScreen';
import RecentlyViewScreen from '../screens/AccountScreens/RecentlyViewScreen';
import OrderScreen from '../screens/AccountScreens/OrderScreen';
import InvoiceScreen from '../screens/AccountScreens/InvoiceScreen';
import ClaimScreen from '../screens/AccountScreens/ClaimScreen';
import SignUpScreen from '../screens/AccountScreens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'fullScreenModal'}}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} />
      <Stack.Screen name="ClaimScreen" component={ClaimScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen
        name="CustomerServiceScreen"
        component={CustomerServiceScreen}
      />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="AddressBookScreen" component={AddressBookScreen} />
      <Stack.Screen name="RecentlyViewScreen" component={RecentlyViewScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
