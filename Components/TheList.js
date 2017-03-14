import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import {observer} from 'mobx-react/native'

class Row extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.rowData.timestamp}</Text>
      </View>
    )
  }
};

@observer
class TheList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const store = this.props.store;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return(
      <ListView
        style={styles.list}
        enableEmptySections={true}
        dataSource={ds.cloneWithRows(store.supps.slice())}
        renderRow={(rowData) => <Row rowData={rowData}/>}
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
