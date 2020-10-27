import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, FlatList, ActivityIndicator} from 'react-native';

import CityCard from './components/CityCard';
import styles from './styles/styles';

const displayInitialList = (arr) => {
  let cityList = [];

  function compare(a, b) {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  }
  arr.forEach((x) => {
    if (cityList.findIndex((y) => x.city == y.city) == -1) {
      cityList.push(x);
    }
  });
  return cityList.sort(compare);
};

let originalList = [];

const Cities = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const itemSeperator = () => (
    <View style={{borderColor: 'lightgray', borderWidth: 1}} />
  );

  const fetchData = () => {
    axios
      .get('https://opentable.herokuapp.com/api/restaurants?country=US')
      .then((response) => {
        originalList = [...displayInitialList(response.data.restaurants)];
        setFilteredData(displayInitialList(response.data.restaurants));
        setIsLoading(false)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCities = ({item}) => (
    <CityCard
      item={item}
      onSelect={() =>
        props.navigation.navigate('RestaurantList', {selectedCity: item.city})
      }
    />
  );

  useEffect(() => {
    setFilteredData(
      originalList.filter((x) => {
        let lowercaseCity = x.city.toLowerCase();
        let lowercaseInputValue = inputValue.toLowerCase();
        return lowercaseCity.startsWith(lowercaseInputValue);
      }),
    );
  }, [inputValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose a city</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search a city.."
          onChangeText={(value) => {
            setInputValue(value);
          }}
        />
      </View>

      {   
        isLoading ? 
          <ActivityIndicator color='gray' size='large' style={{alignItems: 'center', marginTop: 200 }} /> : 
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={filteredData}
            renderItem={renderCities}
            ItemSeparatorComponent={itemSeperator}
          />
      }
    </SafeAreaView>
  );
};

export {Cities};
