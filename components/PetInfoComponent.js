//NOT CURRENTLY USED
//NOT CONNECTED TO REDUX

import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';


function RenderPet(props) {

  const {pet} = props;

  if (pet) {
    return (
        <Card
          title={pet.name}
          image={require('./images/bella.jpg')}>
            <Text style={{margin: 10}}>{pet.info}</Text>
            <Text style={{margin: 10}}>{pet.description}</Text>
            <Icon
              name={props.favorite ? 'heart' : 'heart-o'}
              type='font-awesome'
              color='#F8633B'
              onPress={() => props.favorite ? 
                console.log('Already marked as a favorite.') : props.markFavorite()} /> 
        </Card>
    );
  }
  return <View />;
  }

class PetInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: PETS,
      favorite: false
    };
  }

  markFavorite() {
    this.setState({favorite: true});
  }

  static navigationOptions = {
    title: 'Pet Information'
  };

  render() {
    const petId = this.props.navigation.getParam('petId');
    const pet = this.state.pets.filter(pet => pet.id === petId)[0];
    return (
      <RenderPet pet={pet} 
        favorite={this.state.favorite} 
        markFavorite={() => this.markFavorite()} />
    )
  }
  
};

export default PetInfo;