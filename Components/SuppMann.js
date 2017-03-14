import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Button from './Button.js'
import TheList from './TheList.js'

import SuppStore from './SuppStore.js'
store = new SuppStore();

export default class SuppMan extends Component {

  constructor(props){
    super(props);
    this.state={
      text:'',
      textShow:'asd'
    }
  }
  onChange(text){
    this.setState({text});
  }
  onPressButton(){
    console.log("pikk greia");
    this.setState({textShow: this.state.text})
    store.addSupp(this.state.text, new Date().getTime())
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
        <Button onPressPenis={()=>this.onPressButton()}/>
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
