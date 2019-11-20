
import React from 'react';
import { View, Text, Button, Alert} from 'react-native';
import Styles from './ScreenStyles';
const styles = Styles();

export default class CarScreen extends React.Component {
    state = { styles: [Styles().common, Styles().third] };
    constructor() {
        super();
        this.state = { styles: [Styles().common, Styles().third] };
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress() {
        this.setState({ styles: [Styles().common, Styles().primary] });
    };
    render() {
      return (
        <View style={this.state.styles}>
            <Button color="transparent" title="Cars" onPress={this.handlePress}/>
        </View>
      );
    }
  }