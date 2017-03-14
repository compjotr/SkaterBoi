import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
  render(){
    return(
      <View>
        <TouchableHighlight onPress={() => this.props.onPressPenis()}>
          <Text style={styles.button}>
              PikkPANIS
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

}
const styles = StyleSheet.create(
{
  button:{
    height: 60,
    width: 210,
    backgroundColor: 'red'
  }
});
