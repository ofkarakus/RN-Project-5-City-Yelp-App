import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const CityCard = ({item, onSelect}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={()=> onSelect()}
    >
      <Text>{item.city}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CityCard;
