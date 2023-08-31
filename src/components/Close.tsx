import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const Close = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="x" size={25} color="gray" />
    </TouchableOpacity>
  );
};

export default Close;
