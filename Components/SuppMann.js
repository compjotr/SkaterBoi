import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Button from './Button.js';
import TheList from './TheList.js';

import SuppStore from './SuppStore.js';
const store = new SuppStore();

export default class SuppMan extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      textShow:'asssd',
    };
  }
  onChange(text){
    this.setState({text});
  }
  onPressButton(){
    this.setState({textShow: this.state.text});
    store.addSupp(this.state.text, new Date().getTime());
  }
  render() {
    return (
      <View style={styles.container}>
        <TheList store={store}/>
        <TextInput
          style={styles.textStyle}
          value={this.state.text}
          onChangeText={(text) => this.onChange(text)}
        />
        <Button onPress={()=>this.onPressButton()}>
          Halla
        </Button>
        <Text>{this.state.textShow}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    height: 40,
    width: 300
  },
});
