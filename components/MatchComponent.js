import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';

function RenderPet({pet}) {

  if (pet) {
    return (
        <Card
          featuredTitle={pet.name}
          image={require('./images/bella.jpg')}>
            <Text style={{margin: 10}}>{pet.info}</Text>
            <Text style={{margin: 10}}>{pet.description}</Text>
        </Card>
    );
  }
  return <View />;
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
    const petId = this.props.navigation.getParam('petId');
    const pet = this.state.pets.filter(pet => pet.id === petId)[0];
    return (
      // <ScrollView>
      //   <RenderPet pet={this.props} />
      // </ScrollView>
      <RenderPet pet={pet} />
    )
  }
  
};


export default Match;