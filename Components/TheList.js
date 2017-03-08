import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {observer} from "mobx-react/native";


@observer
class TheList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render(){
    return(
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    )
  }

}
const styles = StyleSheet.create(
{
  list:{
    flex:1,
    backgroundColor: 'blue'
  }
});

export default TheList;
