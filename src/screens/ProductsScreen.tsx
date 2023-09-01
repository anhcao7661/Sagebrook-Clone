import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

type ProductsScreenProps = {
  categoryId: string;
  category: string;
};

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
  'Category 4',
  'Category 5',
  'Category 6',
];

const ProductsScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
        <TouchableOpacity>
          <Icon name="bars-staggered" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={selectedCategory !== ''}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[
              styles.categoryContainer,
              selectedCategory === category && styles.selectedCategory,
            ]}>
            <Text
              style={styles.categoryText}
              onPress={() => setSelectedCategory(category)}>
              {category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

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
    justifyContent: 'space-between',
  },
  categoryContainer: {
    padding: 10,
    backgroundColor: 'lightgray',
    marginRight: 10,
    borderRadius: 8,
  },
  selectedCategory: {
    backgroundColor: 'green',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
