import React, { Component } from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

import { daydd } from './jsonData';
import { daydate } from './jsonData';
import { channels } from './jsonData2';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
               whichChannel : this.props.chanNumber
            };
     }




/**
 * This fucnctoin is in charge of Fetching 
 * the channels Api 
 *
 */
/* getChannels=()=> {

   fetch("http://192.168.68.105:1337/epg")
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.channels);
       this.setState({
                   canli : responseJson.channels
                  });
        
    })
    .catch((error) => {
      console.error(error);
    });
}*/

  renderMyItem(data) {
    let { item } = data;


    return (
      <TouchableOpacity
        onPress={this.props.navigation.navigate("progPage")}
        style={styles.listitems}>
        <Text>{item.title}</Text>
        <Text>{item.start}</Text>
      </TouchableOpacity>
    );
  }

   render() {
    return (
      <View style={styles.dayProgram}>
        <View style={styles.channel}>
          <Text>{channels[this.state.whichChannel].title}</Text>
        </View>

        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            horizontal={true}
            data={channels[this.state.whichChannel].schedules}

               keyExtractor={(item, index) => index.toString()}
             renderItem={({ item, index }) => {
                return (
                               <TouchableOpacity
                               // when this module is used individually, the below statement allows you to navigate to the ProgDetails Screen
                               //onPress={() => this.props.navigation.navigate('progPage')}//
                                     style={styles.listitems}>
                                         <Text>{item.title}</Text>
                                     <Text>{item.start}</Text>
                               </TouchableOpacity>
                             );
              }}

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
