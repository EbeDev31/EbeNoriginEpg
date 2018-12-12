import React, { Component } from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

import { daydd } from './jsonData';
import { daydate } from './jsonData';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: daydd,
      num: 0,
    };

    // this.renderItem=this.renderItem.bind(this);
  }

  renderItem(data) {
    let { item } = data;


ght=function(){this.props.navigation.navigate("progPage")};
    return (
      <TouchableOpacity
        onPress={ght}
        style={styles.listitems}>
        <Text>{item.prog}</Text>
        <Text>{item.time}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.dayProgram}>
        <TouchableOpacity style={styles.channel}>
          <Text>$$</Text>
        </TouchableOpacity>

        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            horizontal={true}
            data={this.state.data}
            renderItem={this.renderItem.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayProgram: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',

    //justifyContent: 'center',
    //alignItems:"center",
  },

  channel: {
    flex: 3.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  programs: {
    flex: 8,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    //alignItems:"center",
  },
  listitems: {
    backgroundColor: 'orange',
    // flex:1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    // height:100,
    width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
});
