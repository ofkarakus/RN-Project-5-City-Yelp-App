import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const RestaurantCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={{uri: item.image_url}} style={styles.image} />
      </View>

      <Text style={styles.text}>{item.name}</Text>
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
    backgroundColor: '#dc2f02',
    margin: 10,
    elevation: 5,
    borderRadius: 5,
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.4,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginVertical: 5
  }
});

export default RestaurantCard;
