import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import FavoriteStack from './FavoriteStack';
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

type TabConfiguration = {
  name: string;
  component: React.ComponentType<any>;
  iconName: string;
};

const tabConfigurations: TabConfiguration[] = [
  {
    name: 'Home',
    component: HomeStack,
    iconName: 'house',
  },
  {
    name: 'Search',
    component: SearchStack,
    iconName: 'magnifying-glass',
  },
  {
    name: 'Favorite',
    component: FavoriteStack,
    iconName: 'heart',
  },
  {
    name: 'Cart',
    component: CartStack,
    iconName: 'bag-shopping',
  },
  {
    name: 'Account',
    component: AccountStack,
    iconName: 'user',
  },
];

const renderTabIcon = (iconName: string, color: string, size: number) => (
  <Icon name={iconName} color={color} size={size} />
);

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {tabConfigurations.map(({name, component, iconName}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => renderTabIcon(iconName, color, size),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigation;
