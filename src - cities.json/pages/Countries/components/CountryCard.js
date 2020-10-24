import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const CountryCard = (props) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={
        () => props.navigation.navigate('MetropolisList', {countryText: props.country})
      }
  
    >
      <Text>{props.country}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CountryCard;
