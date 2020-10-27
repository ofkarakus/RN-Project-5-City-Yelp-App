import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import RestaurantCard from './components/RestaurantCard';

import styles from './styles/styles';

let originalData = []

const Restaurants = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const {selectedCity} = props.route.params;
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const renderRestaurants = ({item}) => (
    <RestaurantCard
      item={item}
      onSelect={() => {
        props.navigation.navigate('InfoPage', {selectedRestaurant: item});
      }}
    />
  );

  const fetchData = async () => {
    const response = await axios.get('https://opentable.herokuapp.com/api/restaurants?country=US', {params : { city : selectedCity }})

    originalData = [...response.data.restaurants]
    setFilteredData(response.data.restaurants)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    setFilteredData(
      originalData.filter((x) => {
        let lowercaseRestaurant = x.name.toLowerCase();
        let lowercaseInputValue = inputValue.toLowerCase();
        return lowercaseRestaurant.indexOf(lowercaseInputValue) > -1;
      }),
    );
  }, [inputValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{selectedCity} Restaurants</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search a restaurant.."
          onChangeText={(value) => {
            setInputValue(value);
          }}
        />
      </View>
      {
        isLoading ?
          <ActivityIndicator size='large' color='gray' style={{alignItems: 'center', marginTop: 200}} />
          :
          <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={filteredData}
          renderItem={renderRestaurants}
        />
      }
    </SafeAreaView>
  );
};

export {Restaurants};
