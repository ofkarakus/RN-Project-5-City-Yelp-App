import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';

import CityCard from './components/CityCard';
import styles from './styles/styles';


const displayInitialList = (arr) => {

  let cityList = []

  function compare(a, b) {
    if (a.city < b.city) {return -1;}
    if (a.city > b.city) {return 1;}
    return 0;
  }
  arr.forEach((x) => {
    if (cityList.findIndex((y) => x.city == y.city) == -1) {
      cityList.push(x);
    }
  });
  return cityList.sort(compare);
}


const Cities = (props) => {

  const [myData, setMyData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const [inputValue, setInputValue] = useState('');


  useEffect(()=> {
      fetch('https://opentable.herokuapp.com/api/restaurants?country=US')
        .then((response) => response.json())
        .then(response => {
          setMyData(displayInitialList(response.restaurants))
          setFilteredData(displayInitialList(response.restaurants))
        })
    },[])

    
  const renderCities = ({item}) => (
    <CityCard 
      item={item} 
      onSelect= {()=> props.navigation.navigate('RestaurantList', {selectedCity : item.city})}
    />
  );


  useEffect(() => {
    setFilteredData(
      myData.filter((x) => {
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
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={filteredData}
        renderItem={renderCities}
      />
    </SafeAreaView>
  );
};

export {Cities};
