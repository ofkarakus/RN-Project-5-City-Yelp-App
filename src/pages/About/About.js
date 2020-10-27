import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>ABOUT</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et
        pharetra pharetra massa massa ultricies mi. Viverra tellus in hac
        habitasse platea. Diam ut venenatis tellus in metus vulputate.
        Sollicitudin ac orci phasellus egestas tellus rutrum tellus
        pellentesque. Ac turpis egestas maecenas pharetra. Est ultricies integer
        quis auctor. Elementum nisi quis eleifend quam adipiscing vitae proin
        sagittis. Sagittis vitae et leo duis ut diam quam nulla porttitor. Sed
        felis eget velit aliquet. Imperdiet nulla malesuada pellentesque elit.
        Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
        nec. Non curabitur gravida arcu ac tortor dignissim convallis aenean et.
        Pulvinar etiam non quam lacus suspendisse faucibus interdum. Eros donec
        ac odio tempor. Suspendisse interdum consectetur libero id faucibus nisl
        tincidunt eget nullam. Sed enim ut sem viverra. Et leo duis ut diam
        quam. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.
        Justo eget magna fermentum iaculis. Nec ullamcorper sit amet risus
        nullam eget felis. Eu mi bibendum neque egestas congue. Vivamus arcu
        felis bibendum ut tristique et egestas quis. Et malesuada fames ac
        turpis egestas integer eget. Vel eros donec ac odio. Vitae justo eget
        magna fermentum iaculis eu non diam. 
      </Text>
    </View>
  );
};

export {About};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  text: {
    textAlign: 'center',
    marginTop: 5
  }
});
