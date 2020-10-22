import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const First = (props) => {

  const number = 105

  return (
    <SafeAreaView>
      <View>
        <Text>FirstPage</Text>
        <Text>{number}</Text>
        <Button
          title='Go'
          onPress={() => {
            props.navigation.navigate('SecondPage', {
              myNumber : number
            }
          )}}
        />
      </View>
    </SafeAreaView>
  )
}


export {First};