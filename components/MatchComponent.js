import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';

class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: PETS
    };
  }

  static navigationOptions = {
    title: 'Pet Match'
  };

  render() {
    const { navigate } = this.props.navigation;
    // const petId = this.props.navigation.getParam('petId');
    // const pet = this.state.pets.filter(pet => pet.id === petId)[0];
    const renderAdoptItem = ({item}) => {
      return (
          <ListItem
              title={item.name}
              subtitle={item.type}
              onPress={() => navigate('PetInfo', {petId: item.id})}
              leftAvatar={{ source: require('./images/bella.jpg')}}
          />
      );
    };


    return (
      <View>
        <Text style={styles.headerText}>Our Adoptables</Text>
        <FlatList
          data={this.state.pets}
          renderItem={renderAdoptItem}
          keyExtractor={item => item.id.toString()}
          />
        </View>
    );
  };
}

const styles = StyleSheet.create({
  headerText: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default Match;