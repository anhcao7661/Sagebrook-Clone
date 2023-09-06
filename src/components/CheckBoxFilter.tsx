// CheckBoxFilter.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

type CheckBoxFilterProps = {
  id: number;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

const CheckBoxFilter: React.FC<CheckBoxFilterProps> = ({
  id,
  label,
  isSelected,
  onPress,
}) => (
  <View style={styles.checkbox}>
    <CheckBox
      containerStyle={{margin: 0}}
      checked={isSelected}
      onPress={onPress}
      checkedIcon={
        <Icon
          name="radio-button-checked"
          type="material"
          color="black"
          size={20}
        />
      }
      uncheckedIcon={
        <Icon
          name="radio-button-unchecked"
          type="material"
          color="black"
          size={20}
        />
      }
    />
    <Text>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CheckBoxFilter;
