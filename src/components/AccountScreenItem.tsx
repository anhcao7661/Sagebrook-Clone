import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Divider} from '@rneui/themed';

type AccountScreenItemProps = {
  icon: string;
  text: string;
  screen: string;
  onPress: () => void;
};

const AccountScreenItem: React.FC<AccountScreenItemProps> = ({
  icon,
  text,
  screen,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.myInfo}>
        <View style={styles.myInfo}>
          <Icon name={icon} size={20} style={styles.icon} />
          <Text>{text}</Text>
        </View>
        <Icon name="chevron-right" size={15} />
      </TouchableOpacity>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  myInfo: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 5,
  },
  icon: {
    margin: 15,
    width: 30,
  },
});

export default AccountScreenItem;
