import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Divider} from '@rneui/themed';

type SearchCategoryOptionProps = {
  category: string;
  screen: string;
  onPress: () => void;
};

const SearchCategoryOption: React.FC<SearchCategoryOptionProps> = ({
  category,
  screen,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.myInfo}>
        <View style={styles.myInfo}>
          <Text>{category}</Text>
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
    marginVertical: 10,
  },
  icon: {
    margin: 15,
    width: 30,
  },
});

export default SearchCategoryOption;
