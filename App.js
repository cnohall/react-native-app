import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FlightScreen from './screens/FlightScreen';
import CarScreen from './screens/CarScreen';
import HotelScreen from './screens/HotelScreen'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.primary}>
      <HotelScreen/>
      <CarScreen />
      <FlightScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  primary: {
    // color: "gray",
  },
  secondary: {
    justifyContent: "center"
  },
  last: {
    justifyContent: "center"

  }
})
