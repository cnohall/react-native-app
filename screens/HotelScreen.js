import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class HotelScreen extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text>HotelScreen</Text>
            </View>
        )
    }
}

export default HotelScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})