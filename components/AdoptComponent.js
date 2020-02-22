import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

// USE REDUX??
// const mapStateToProps = state => {
//   return {
//     pets: state.pets,
//   };
// };

function RenderPet(props) {

 return (
   <View>
     <Card
       featuredTitle={props.name}
       image={props.image}>
        <Text style={{fontWeight: 'bold'}}>{props.info}</Text>
        <Text>{props.description}</Text>
     </Card>
   </View>
 )
}

class Adopt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: PETS
    }
  }

  render() {
    return (
      <ScrollView>
        <RenderPet />
      </ScrollView>
    )
  }
  
};


export default Adopt;