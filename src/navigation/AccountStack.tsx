import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import LoginScreen from '../screens/LoginScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CustomerServiceScreen from '../screens/CustomerServiceScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AddressBookScreen from '../screens/AddressBookScreen';
import RecentlyViewScreen from '../screens/RecentlyViewScreen';
import OrderScreen from '../screens/OrderScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import ClaimScreen from '../screens/ClaimScreen';

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
    </Stack.Navigator>
  );
};

export default AccountStack;
