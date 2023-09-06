import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Close from '../components/Close';
import {Divider} from '@rneui/base';
import CheckBoxFilter from '../components/CheckBoxFilter';
import DrawOptions from '../components/DrawOptions';

type SortOption = {
  id: number;
  label: string;
};

type Filter = {
  id: number;
  label: string;
  value: string[];
};

const SortOptions: SortOption[] = [
  {id: 1, label: 'Newest Items'},
  {id: 2, label: 'Best Selling'},
  {id: 3, label: 'Featured Items'},
  {id: 4, label: 'Name: A to Z'},
  {id: 5, label: 'Name: Z to A'},
  {id: 6, label: 'By Review'},
  {id: 7, label: 'Price: Low to High'},
  {id: 8, label: 'Price: High to Low'},
];

const FilterName: Filter[] = [
  {id: 1, label: 'Availble', value: ['CA', 'SC']},
  {id: 2, label: 'Color', value: ['BLACK', 'BLUE']},
  {id: 3, label: 'Width', value: ['1', '2']},
  {id: 4, label: 'Height', value: ['3', '4']},
  {id: 5, label: 'Material', value: ['BANANA', 'BRASS']},
  {id: 6, label: 'New', value: ['Yes', 'No']},
  {id: 7, label: 'Case Pack', value: ['1', '2']},
  {id: 8, label: 'Length', value: ['3', '4']},
];

const FilterScreen = () => {
  const navigation = useNavigation();

  const [selectedSort, setSelectedSort] = useState<number | null>(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<
    {id: number; value: string}[]
  >([]);

  const [selectedFilterValues, setSelectedFilterValues] = useState<string[]>(
    [],
  );

  const clearAll = () => {
    setSelectedSort(null);
    setSelectedCheckboxes([]);
    setSelectedFilterValues([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Sort & Filter</Text>
          <Close />
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.sectionHeader}>Sort by</Text>
          {SortOptions.map(option => (
            <CheckBoxFilter
              key={option.id}
              id={option.id}
              label={option.label}
              isSelected={selectedSort === option.id}
              onPress={() => setSelectedSort(option.id)}
            />
          ))}
          <Divider />
          {selectedFilterValues.length > 0 && (
            <View>
              {/* Display selected filter values here */}
              {selectedFilterValues.map((value, index) => (
                <Text key={index}>{value}</Text>
              ))}
            </View>
          )}
          {FilterName.map(filter => (
            <View key={filter.id}>
              <DrawOptions
                id={filter.id}
                label={filter.label}
                value={filter.value}
                selectedCheckboxes={selectedCheckboxes}
                setSelectedCheckboxes={setSelectedCheckboxes}
                onSelect={value => {
                  // Add the selected value to the list of selected filter values
                  setSelectedFilterValues([...selectedFilterValues, value]);
                }}
                onDeselect={value => {
                  // Remove the deselected value from the list of selected filter values
                  setSelectedFilterValues(
                    selectedFilterValues.filter(v => v !== value),
                  );
                }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Divider />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={clearAll}>
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 30,
  },
  sectionHeader: {
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'black',
    minWidth: 160,
    paddingVertical: 15,
    borderRadius: 100,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FilterScreen;
