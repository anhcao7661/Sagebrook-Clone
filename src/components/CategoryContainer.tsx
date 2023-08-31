import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

interface CategoryContainerProps {
  screenWidth: number;
  imageSource: ImageSourcePropType;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({
  screenWidth,
  imageSource,
}) => {
  return (
    <View style={{height: 130, marginBottom: 5}}>
      <TouchableOpacity>
        <Image
          source={imageSource}
          style={{width: screenWidth - 7, height: 130, marginHorizontal: 3}}
        />
        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            width: screenWidth,
            textAlign: 'center',
            fontSize: 15,
            color: 'white',
          }}>
          This is image
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryContainer;
