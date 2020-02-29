import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROCESS } from '../shared/process';

function Foster() {
  return(
      <Card title='Become a Foster'>
          <Text>
          Foster homes provide a solid base for finding a wonderful forever home. Having our pets in foster homes gives us a true view of how the animal will react in their forever home. Most of the pets we take into our program would otherwise be euthanized due to shelter overcrowding, so if you foster, you are truly making a difference. 
          </Text>
      </Card>
  );
}

function Events() {
  return(
          <Card title='Events'>
          <Text>
          Underdog staffs tables at Underdog events (ie: Pints for Pups) and local events (Wisconsin Dog Fair, Fromm Pet Fest, etc). Volunteers are available to answer questions, provide information, and sell merchandise to people who stop by.  We ask for volunteers to serve for a few hours whenever one of these events come up. Volunteers are responsible for set up and take down of the table.  Supplies and training are provided.
          </Text>
      </Card>
  );
}
function Transports() {
  return(
      <Card title='Transports'>
          <Text>
          Many of our adoptable pets come from far away - usually from the South!  We rely on volunteers to drive the animals (in crates). These drives, also called "freedom rides," are done in legs, like a relay race. Underdog typically picks up pets in Beloit, Waukesha, or DeForest. Drivers are need to load crates into their vehicles and drive them back to Madison. Underdog provides crates and leashes.  Drivers need a vehicle large enough for at least one crate. Assistants are also needed, as they can help the loading and unloading of crates go much more quickly. Milage for transports is tax deductible.
          </Text>
      </Card>
  );
}

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            process: PROCESS
          };
    }

    static navigationOptions = {
        title: 'Volunteer Opportunities'
    };
    
  render () {
    return (
        <ScrollView>
               <Foster />
               <Image style={styles.image} source={require('./images/process4.jpg')} />
               <Events />
               <Transports />
         </ScrollView>
    );
}
}


const styles = StyleSheet.create({
    cardRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    cardItem: {
      flex: 1,
      margin: 10
    },
    modal: {
      justifyContent: 'center',
      margin: 20
    },
    container: {
      flex: 1
    },
    content: {
      flex: 1
    },
    list: {
      marginTop:10,
      flex: 1
    },
    image: {
      marginTop: 20,
    }
  });

export default Volunteer; 