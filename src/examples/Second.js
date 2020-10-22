import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Second = (props) => {

  const userNumber = props.route.params.myNumber

  return (
    <SafeAreaView>
      <View>
        <Text>SecondPage</Text>
        <Text>{userNumber}</Text>
        <Button
          title='Go Back!'
          onPress={() => {
            props.navigation.goBack()
          }}
        />
      </View>
    </SafeAreaView>
  )
}


export {Second};