import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { color } from 'react-native-reanimated';

const Info = (props) => {
  const selectedRestaurant = props.route.params.selectedRestaurant;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{uri: selectedRestaurant.image_url}}
          />
        </View>

        <Text style={styles.name}>{selectedRestaurant.name}</Text>

        <View style={styles.location}>
          <Image
            source={require('../../assets/pin.png')}
            style={styles.locationImg}
          />
          <Text style={styles.locationText}>{selectedRestaurant.area}</Text>
        </View>

        <View style={styles.location}>
          <Image
            source={require('../../assets/home.png')}
            style={styles.locationImg}
          />
          <Text style={styles.locationText}>{selectedRestaurant.address}</Text>
        </View>

        <View style={styles.location}>
          <Image
            style={styles.locationImg}
            source={require('../../assets/phone-call.png')}
          />
          <Text style={styles.locationText}>{selectedRestaurant.phone}</Text>
        </View>
      </View>

      <View style={styles.blank}></View>
      <Text style={styles.reservation}>Make Reservation</Text>
    </SafeAreaView>
  );
};

export {Info};

const styles = StyleSheet.create({
  imageView: {
    height: Dimensions.get('window').height * 0.4,
  },
  image: {
    height: '100%',
  },
  name: {
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f5f5f5',
    elevation: 1,
    fontSize: 21,
    marginBottom: 5,
  },
  location: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 3,
    backgroundColor: '#0091ea',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  locationImg: {
    width: 15,
    height: 20,
    tintColor: 'whitesmoke',
  },
  locationText: {
    color: 'whitesmoke',
    marginLeft: 15,
  },
  reservation: {
    alignSelf: 'center',
  },
  container: {
    justifyContent:'space-between'
  },
  reservation: {
    alignSelf: 'center',
    marginTop: 90,
    color: '#ef5350',
    fontWeight: 'bold'
  }
});
