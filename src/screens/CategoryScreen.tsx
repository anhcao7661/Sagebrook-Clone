import React from 'react';
import {View, Text} from 'react-native';
import {CategoryScreenProps} from '../types/categoryScreenProps';

const CategoryScreen: React.FC<CategoryScreenProps> = ({category}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{category}</Text>
    </View>
  );
};

export default CategoryScreen;
