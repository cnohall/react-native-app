
import React from 'react';
import { View, Text, Button, Alert} from 'react-native';
import Styles from './ScreenStyles';
const styles = Styles();

export default class HotelScreen extends React.Component {
  state = { styles: [Styles().common, Styles().secondary] };
  constructor() {
    super();
    this.state = { styles: [Styles().common, Styles().secondary] };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(){
      this.setState({ styles: [Styles().common, Styles().primary] });
  };
    render() {
      return (
        <View style={this.state.styles}>
            <Button color="transparent" title="Hotels" onPress={this.handlePress}/>
        </View>
      );
    }

}
