import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import RestaurantCard from './components/RestaurantCard';

import styles from './styles/styles';

const Restaurants = (props) => {

  const [myData, setMyData] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  const renderRestaurants = ({item}) => <RestaurantCard item={item} />;

  const selectedCity = props.route.params.selectedCity;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('https://opentable.herokuapp.com/api/restaurants?country=US')
      .then((response) => response.json())
      .then((response) => {
        const data = response.restaurants.filter((x) => x.city == selectedCity);
        setMyData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {

    setFilteredData(
      myData.filter((x) => {
        let lowercaseRestaurant = x.name.toLowerCase();
        let lowercaseInputValue = inputValue.toLowerCase();
        return lowercaseRestaurant.indexOf(lowercaseInputValue) > -1
      }),
    );
  }, [inputValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            props.navigation.navigate('CityList');
          }}>
          <Text style={styles.backBtnText}>Cities</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{selectedCity} Restaurants</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search a restaurant.."
          onChangeText={(value)=> {setInputValue(value)}}
        />
      </View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={filteredData}
        renderItem={renderRestaurants}
      />
    </SafeAreaView>
  );
};

export {Restaurants};