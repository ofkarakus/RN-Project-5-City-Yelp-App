import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
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

        <TouchableOpacity style={styles.location}>
          <Image
            source={require('../../assets/pin.png')}
            style={styles.locationImg}
          />
          <Text style={styles.locationText}>{selectedRestaurant.area}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.location}>
          <Image
            source={require('../../assets/home.png')}
            style={styles.locationImg}
          />
          <Text style={styles.locationText}>{selectedRestaurant.address}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.location}>
          <Image
            style={styles.locationImg}
            source={require('../../assets/phone-call.png')}
          />
          <Text style={styles.locationText}>{selectedRestaurant.phone}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={()=> {Linking.openURL(selectedRestaurant.reserve_url)}}
        style={styles.reserveBtn}
      >
        <Text style={styles.reservation}>Reserve Now</Text>
      </TouchableOpacity>
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
    flex: 1,
    justifyContent:'space-between'
  },
  reservation: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  reserveBtn: {
    alignSelf: 'center',
    backgroundColor: '#ef5350',
    marginBottom: 20,
    width: 140,
    padding: 5,
    borderRadius: 10
  }
});
