import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';

function RenderPet(props) {

  const {pet} = props;
  
 return (
   <View>
     <Card
       featuredTitle={pet.name}
       image={pet.image}>
        <Text style={{fontWeight: 'bold'}}>{pet.info}</Text>
        <Text>{pet.description}</Text>
     </Card>
   </View>
 )
}

class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: PETS
    }
  }

  static navigationOptions = {
    title: 'Match'
  };

  render() {
    return (
      <ScrollView>
        <RenderPet pet={this.props} />
      </ScrollView>
    )
  }
  
};


export default Match;