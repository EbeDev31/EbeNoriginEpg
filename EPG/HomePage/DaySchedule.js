import React, { Component } from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';

import { daydd } from './jsonData';
import DayProg from './dayProg';

import { channels } from './jsonData2';



let indexChan= 0;
console.log("Length Number");
console.log(indexChan);
export default class DaySchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
             // canali:this.props.allChannels,
              //chanLength:this.props.allChannels.length,
            };
     }


   creatSked=()=>{

   // const {navigate}= this.props.navigation;
   //navigate={navigate}
   let chanNumber=indexChan;
    indexChan=indexChan+1;
         return(
            <View style={styles.listitems}>
               <DayProg chanNumber={chanNumber} />
            </View>
          )
   }


  render() {

   // const {navigate}= this.props.navigation;
    return (
        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            //horizontal={true}
           // data={this.state.canali}
            data={channels}

            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => { 
              return(
                       this.creatSked()
                     );
                                             
              }}

          />
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

  programs: {
    flex: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    //alignItems:"center",
  },
  listitems: {
    backgroundColor: 'orange',
   flex:1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    // height:100,
   // width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
});
