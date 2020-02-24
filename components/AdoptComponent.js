import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList,
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon, Tile, ListItem } from 'react-native-elements';
import { PETS } from '../shared/pets';
//import * as Animatable from 'react-native-animatable';


class Adopt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: PETS
    };
  }

  static navigationOptions = {
    title: 'Adopt'
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderAdoptItem = ({item}) => {
      return (
        //<View>
          <ListItem
              title={item.name}
              subtitle={item.type}
              onPress={() => navigate('Match', { petId: item.id})}
              leftAvatar={{ source: require('./images/bella.jpg')}}
          />
          /* <Button
            title='Find a Match'
            color='#361D1E'
            onPress={() => navigate.navigate('Match')} /> */
        //</View>
      );
    };


    return (
      <FlatList
        data={this.state.pets}
        renderItem={renderAdoptItem}
        keyExtractor={item => item.id.toString()}
        />
    );
  };
}



export default Adopt;