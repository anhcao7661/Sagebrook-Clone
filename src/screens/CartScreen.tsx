import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const CartScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'space-between',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Shopping Cart
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="qrcode" size={15} style={{margin: 10}} />
          <Text
            style={{
              fontSize: 15,
            }}>
            Scan Barcode
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const style = StyleSheet.create({
  header: {},
});
