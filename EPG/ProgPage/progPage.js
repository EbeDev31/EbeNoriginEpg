import React, { Component } from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

export default class ProgramDetails extends Component {
  render() {
    return (
      <View style={styles.mainform}>

              <View style={styles.trailer}>
                <Text>Trailer Video Maybe??e</Text>
              </View>

              <View style={styles.program}>
                    <View style={styles.channel}>
                       <Text>Channels Image</Text>
                    </View>

                    <View style={styles.progTitle}>
                      <Text>CENTRAL COMEDY</Text>
                      <Text>Downton Abbey</Text>

                      <View style={styles.progDetails}>
                        <Text>Yr 2015</Text>
                        <Text>Romance</Text>
                        <Text>Drama</Text>
                        <Text>Horror</Text>
                      </View>
                    </View>
                   
              </View>

              <View style={styles.description}>
                <Text>ncUpon a timesgyuigsuigu</Text>
              </View>

              <View style={styles.cast}>
                <Text>casting done byGoergeDe niroArnorldShuasi</Text>
              </View>

              <View style={styles.empty}>
                <Text>EMPTY BLACK  SPACE</Text>
              </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    backgroundColor: 'red',
    flex: 1,
    // justifyContent:'flex-start',

    // alignItems:"center",
  },

  trailer: {
    flex: 4,
    backgroundColor: 'green',
    //flex: 2,
    justifyContent: 'center',
  },

  program: {
    backgroundColor: 'black',
    flexDirection:"row",
     flex: 1.5,
    //justifyContent: 'center',
  },

  channel: {
    flex: 1.5,
    backgroundColor: 'yellow',

    // justifyContent: 'center',
    //alignItems:"center",
  },

  progTitle: {
      flex: 3,
    backgroundColor: 'orange',
  },

  progDetails: {
    // flex: 7,
    
    flexDirection:"row",
    backgroundColor: 'blue',

    //justifyContent: 'center',
    //alignItems:"center",
  },

  description: {
     flex: 3,
    backgroundColor: 'white',

    // justifyContent: 'center',
    //alignItems:"center",
  },

  cast: {
    flex: 1,
    backgroundColor: 'pink',

    //justifyContent: 'center',
    //alignItems:"center",
  },

    empty: {
    flex: 1,
    backgroundColor: 'white',

    //justifyContent: 'center',
    //alignItems:"center",
  },
});