import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MyComponent from './components/Card';
import FlightScreen from './screens/FlightScreen';
import CarScreen from './screens/CarScreen';
import HotelScreen from './screens/HotelScreen'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <div>
      <HotelScreen style={styles.primary}/>
      <CarScreen style={styles.secondary}/>
      <FlightScreen style={styles.last}/>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  primary: {
    justifyContent: "center",
    top: "10% !important"
  },
  secondary: {
    justifyContent: "center"
  },
  last: {
    justifyContent: "center"

  }
})
