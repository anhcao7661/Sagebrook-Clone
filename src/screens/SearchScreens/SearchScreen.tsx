import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import SearchCategoryOption from '../../components/SearchCategoryOption';

const categories = [
  {
    id: '1',
    name: 'Electronics',
  },
  {
    id: '2',
    name: 'Clothing',
  },
  {
    id: '3',
    name: 'Home Appliances',
  },
  {
    id: '4',
    name: 'Books',
  },
  {
    id: '5',
    name: 'Sports',
  },
  {
    id: '6',
    name: 'Electronics',
  },
  {
    id: '7',
    name: 'Clothing',
  },
  {
    id: '8',
    name: 'Home Appliances',
  },
  {
    id: '9',
    name: 'Books',
  },
  {
    id: '10',
    name: 'Sports',
  },
  // Add more categories as needed
];

const SearchScreen = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleSearchFocus = () => {
    setSearchFocused(true);
    setShowFilter(true);
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
    setShowFilter(false);
    Keyboard.dismiss();
  };

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {searchFocused ? (
          <TouchableOpacity onPress={handleSearchBlur}>
            <Icon name="arrow-left" size={20} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View>
            <Icon name="magnifying-glass" size={20} style={styles.icon} />
          </View>
        )}
        <TextInput
          showSoftInputOnFocus={true}
          placeholder="Search Products..."
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </View>
      {showFilter ? (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <SafeAreaView
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{top: 50}}>Filter Screen</Text>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      ) : (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}>
            <Text>Shop</Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            {categories.map(category => (
              <SearchCategoryOption
                key={category.id}
                category={category.name}
                screen={''}
                onPress={() => {}}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
