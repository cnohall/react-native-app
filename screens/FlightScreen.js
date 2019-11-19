import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class FlightScreen extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text>FlightScreen</Text>
            </View>
        )
    }
}

export default FlightScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})