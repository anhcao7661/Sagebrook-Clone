import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Divider} from '@rneui/themed';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AccountScreenItem from '../../components/AccountScreenItem';
const AccountScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <View style={{marginVertical: 15}}>
            <Icon name="circle-user" size={80} />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text style={{marginHorizontal: 5}}>Log In</Text>
            <Icon name="chevron-right" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderScreen')}
          style={styles.myInfo}>
          <Icon name="list-ul" size={20} style={styles.icon} />
          <Text>My Orders</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" style={{margin: 10}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('InvoiceScreen')}
          style={styles.myInfo}>
          <Icon name="file-invoice-dollar" size={20} style={styles.icon} />
          <Text>My Invoices</Text>
        </TouchableOpacity>
        <Divider orientation="vertical" style={{margin: 10}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ClaimScreen')}
          style={styles.myInfo}>
          <Icon name="sack-dollar" size={20} style={styles.icon} />
          <Text>My Claims</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View
        style={{
          backgroundColor: '#ffffff',
          height: '100%',
        }}>
        <AccountScreenItem
          icon="user-pen"
          text="Edit Profile"
          screen="EditProfileScreen"
          onPress={() => navigation.navigate('EditProfileScreen')}
        />
        <AccountScreenItem
          icon="headphones-simple"
          text="Customer Service"
          screen="CustomerServiceScreen"
          onPress={() => navigation.navigate('CustomerServiceScreen')}
        />
        <AccountScreenItem
          icon="bell"
          text="My Notifications"
          screen="NotificationScreen"
          onPress={() => navigation.navigate('NotificationScreen')}
        />
        <AccountScreenItem
          icon="heart"
          text="My Favorites"
          screen=""
          onPress={() => {}}
        />
        <AccountScreenItem
          icon="address-book"
          text="Address Book"
          screen="AddressBookScreen"
          onPress={() => navigation.navigate('AddressBookScreen')}
        />
        <AccountScreenItem
          icon="clock-rotate-left"
          text="Recently Viewed"
          screen="RecentlyViewScreen"
          onPress={() => navigation.navigate('RecentlyViewScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myInfo: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 15,
  },
});
