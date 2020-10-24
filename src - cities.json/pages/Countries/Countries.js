import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Button,
} from 'react-native';

import cities from '../../../cities.json';
import CountryCard from './components/CountryCard';

import styles from './styles/styles';

// ===== sorted country list =====

function compare(a, b) {
  if (a.country < b.country) {
    return -1;
  }
  if (a.country > b.country) {
    return 1;
  }
  return 0;
}

let countryList = [];
cities.forEach((x) => {
  if (countryList.findIndex((y) => x.country == y.country) == -1) {
    countryList.push(x);
  }
});

countryList = countryList.sort(compare);

// ================================

const Countries = (props) => {
  const renderCountries = ({item}) => (
    <CountryCard country={item.country} navigation={props.navigation} />
  );

  const [inputValue, setInputValue] = useState('');
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  useEffect(() => {
    setFilteredCountryList(countryList);
  }, []);
  useEffect(() => {
    setFilteredCountryList(
      countryList.filter((x) => {
        let lowercaseCountry = x.country.toLowerCase();
        let lowercaseInputValue = inputValue.toLowerCase();
        return lowercaseCountry.startsWith(lowercaseInputValue);
      }),
    );
  }, [inputValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose a country</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Search a country.."
          onChangeText={(value) => {
            setInputValue(value);
          }}
        />
      </View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={filteredCountryList}
        renderItem={renderCountries}
      />
    </SafeAreaView>
  );
};

export {Countries, countryList};
