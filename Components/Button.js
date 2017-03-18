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
        <TouchableHighlight onPress={() => this.props.onPress()}>
          <Text style={styles.button}>
            {this.props.children}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  onPress: React.PropTypes.func,
  children: React.PropTypes.any
};

const styles = StyleSheet.create(
{
  button:{
    height: 60,
    width: 210,
    backgroundColor: 'red'
  }
});
