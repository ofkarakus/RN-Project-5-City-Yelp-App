import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const RestaurantCard = ({item, onSelect}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelect();
      }}>
      
      <Image source={{uri: item.image_url}} style={styles.image} />

      <View style={styles.namePrice}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          {"⭐".repeat(item.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef5350',
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5,
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.35,
  },
  namePrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  name: {
    color: '#fffde7',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    maxWidth: '70%'
  },
  price: {
    fontWeight: 'bold',
    fontSize: 12,
    alignSelf: 'flex-end',
    color: 'yellow',
    fontSize: 27
  }
});

export default RestaurantCard;
