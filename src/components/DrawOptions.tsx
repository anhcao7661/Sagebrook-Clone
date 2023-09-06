import React, {useState} from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {CheckBox, Divider, ListItem} from '@rneui/themed';

type CheckboxOption = {
  id: number;
  value: string;
};

type DrawOptionsProps = {
  id: number;
  label: string;
  value: string[];
  selectedCheckboxes: CheckboxOption[];
  setSelectedCheckboxes: React.Dispatch<React.SetStateAction<CheckboxOption[]>>;
  onSelect: (value: string) => void;
  onDeselect: (value: string) => void;
};

const DrawOptions: React.FC<DrawOptionsProps> = ({
  id,
  label,
  value,
  selectedCheckboxes,
  setSelectedCheckboxes,
  onSelect,
  onDeselect,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const animationDuration = 300;
  const dividerOpacity = new Animated.Value(1);

  const toggleAccordion = () => {
    setExpanded(!expanded);

    Animated.timing(dividerOpacity, {
      toValue: expanded ? 1 : 0,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const toggleCheckbox = (option: string, filterId: number) => {
    if (
      selectedCheckboxes.some(
        checkbox => checkbox.id === filterId && checkbox.value === option,
      )
    ) {
      setSelectedCheckboxes(prevSelected =>
        prevSelected.filter(
          checkbox => !(checkbox.id === filterId && checkbox.value === option),
        ),
      );
      onDeselect(option);
      console.log('Deselected:', option); // Log deselection
    } else {
      setSelectedCheckboxes(prevSelected => [
        ...prevSelected,
        {id: filterId, value: option},
      ]);
      onSelect(option);
      console.log('Selected:', option); // Log selection
    }
  };

  return (
    <>
      <ListItem.Accordion
        animation={{type: 'timing', duration: animationDuration}}
        content={
          <ListItem.Content>
            <ListItem.Title style={{marginHorizontal: 10}}>
              {label}
            </ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={toggleAccordion}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {value.map(option => (
            <ListItem key={`${id}_${option}`} style={{minWidth: 130}}>
              {/* Use a unique key combining 'id' and 'option' */}
              <ListItem.Content>
                <CheckBox
                  containerStyle={{margin: 0, padding: 0}}
                  title={option}
                  checked={selectedCheckboxes.some(
                    checkbox => checkbox.id === id && checkbox.value === option,
                  )}
                  checkedIcon={
                    <Icon name="square-check" solid color="black" size={20} />
                  }
                  uncheckedIcon={<Icon name="square" color="gray" size={20} />}
                  onPress={() => toggleCheckbox(option, id)}
                />
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </ListItem.Accordion>
      <Divider style={{marginHorizontal: 20}} />
    </>
  );
};

export default DrawOptions;
