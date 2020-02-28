import React, { Component } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
// import {connect } from 'react-redux';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// import Swipeout from 'react-native-swipeout';
// import { deleteFavorite } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

class Favorites extends Component {
  render() {
    return (
      <View>
        <Text>My Favorites</Text>
        <FlatList>
          
        </FlatList>
      </View>
    )
  }
}

export default Favorites;

// FROM MAIN COMPONENT
// constructor(props) {
//   super(props);
//   this.state = {
//     pets: PETS,
//     selectedPet: null
//   };
// }

// onPetSelect(petId) {
//   this.setState({selectedPet: petId});
// }