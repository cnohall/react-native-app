import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HotelScreen from './screens/HotelScreen';
import FlightScreen from './screens/FlightScreen';
import CarScreen from './screens/CarScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <div></div>
    );
  }
}

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  HotelScreen: {screen: HotelScreen},
  FlightScreen: {screen: FlightScreen},
  CarScreen: {screen: CarScreen}
});

export default createAppContainer(MainNavigator);
