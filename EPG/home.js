/**
 * EPG App
 *
 *This Home component serves as 
 *the main Screen of the App
 * 
 *UI composition:
 * 
 * *Day of the Week=>Days
 *
 * 
 * *Time of the Day=>DayTime
 *
 *
 * *List of Chanels=>Flatlist
 *                  *
 *                  *=>Each child component (channel) containing a list of Programs=>Flatlist
 *
 */
import React, { Component } from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

//Local Imports from App directory
import Days from './HomePage/daysitem';
import DayTime from './HomePage/timeDay';

// Personal Data for simulation
import { daydd } from './HomePage/jsonData';
import { daydate } from './HomePage/jsonData';
//import {guideData} from './HomePage/jsonData';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
              newData:[],
            };
     }


 componentDidMount() {
    this.getChannels();
  }


/**
 * This fucnctoin is in charge of Fetching 
 * the channels Api 
 *
 */
 getChannels=()=> {

   fetch("http://192.168.68.105:1337/epg")
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.channels);
       this.setState({
                   newData : responseJson.channels
                  });
        
    })
    .catch((error) => {
      console.error(error);
    });
}


/**
 * This fucnctoin is in charge of putting 
 * together the schedule of a given channel 
 *
 */
 channelShedule = (schedules) => {
    //let schedule=this.state.ebeProg[index];
    console.log("Eff Geenesis");
    console.log(schedules);
    let flatGen = schedules.map((progObject,i) => {
      return (
        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            key={i}
            horizontal={true}
            data={progObject}
            keyExtractor={(item, index) => index.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('paddy')}
                  style={styles.listitems}>
                  <Text>{item.title}</Text>
                  <Text>{item.start}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      );
    });

    return flatGen;
  };
 
  render() {
    
    return (
      <View style={styles.mainform}>

        <View style={styles.days}>
          <Days />
        </View>

        <View style={styles.timeOfDay}>
          <DayTime />
        </View>

        <View style={styles.dayProgram}>
          <View style={styles.programs}>
            <FlatList
              //style={styles.listitems}
              // horizontal={true}
              data={this.state.newData}
              keyExtractor={(item, index) => index.id}
              renderItem={({ item, index }) => {
                return (
                    <View
                        style={{ backgroundColor: 'pink', flexDirection: 'row' }}>
                          <TouchableOpacity style={styles.channel}>
                            <Text>{item.title}</Text>
                          </TouchableOpacity>
                           <View style={styles.dayProgram}>
                              {this.channelShedule(item.schedules)}
                           </View>
                    </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    backgroundColor: 'orange',
    flex: 1,
    // justifyContent:'flex-start',

    // alignItems:"center",
  },
  programs: {
    flex: 8,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    //alignItems:"center",
  },
  days: {
    backgroundColor: 'red',
    flex: 2,
    justifyContent: 'center',
  },
  timeOfDay: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
  },
  dayProgram: {
    flex: 7,
    backgroundColor: 'blue',

    justifyContent: 'center',
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
