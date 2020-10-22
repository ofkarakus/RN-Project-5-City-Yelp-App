import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const MetropolisCard = ({metropolis}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{metropolis}</Text>
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

export default MetropolisCard;
