import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';

import cities from '../../../cities.json'
import MetropolisCard from './components/MetropolisCard'

import styles from './styles/styles'

// ===== sorted country list =====

function compare ( a, b ) {
  if ( a.subcountry < b.subcountry ){ return -1; }
  if ( a.subcountry > b.subcountry ){ return 1; }
  return 0;
}

let countryList = []
cities.forEach(x => {
  if(countryList.findIndex(y => x.subcountry == y.subcountry) == -1) {
    countryList.push(x)
  }
})

countryList = countryList.sort(compare)

// ================================

const Metropolis = (props) => {

  const renderMetropolises = ({item}) => <MetropolisCard metropolis={item.subcountry}/>

  const country = props.route.params.countryText
  
  const [inputValue, setInputValue] = useState('')
  const [metropolisList, setMetropolisList] = useState(countryList.filter(x => x.country == country))
  const [filteredMetropolisList, setFilteredMetropolisList] = useState([])

  useEffect(() => { setFilteredMetropolisList(metropolisList)}, [])

  useEffect(() => { setFilteredMetropolisList (
    metropolisList.filter((x) => {
      let lowercaseMetropolis = x.subcountry.toLowerCase()
      let lowercaseInputValue = inputValue.toLowerCase()
      return lowercaseMetropolis.startsWith(lowercaseInputValue)
    }))}, [inputValue])

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backBtn}
          onPress={()=>{props.navigation.navigate('CountryList')}}
        >
          <Text style={styles.backBtnText}>Countries</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Choose a city</Text>
      </View>
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Search a city..'
          onChangeText={(value)=> {setInputValue(value)}}
        />
      </View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={filteredMetropolisList}
        renderItem={renderMetropolises}
      />
    </SafeAreaView>
  );
};

export {Metropolis};
