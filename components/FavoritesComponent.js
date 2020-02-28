import React, { Component } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import {connect } from 'react-redux';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// import Swipeout from 'react-native-swipeout';
// import { deleteFavorite } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    pets: state.pets,
    favorites: state.favorites
  }
};

// const mapDispatchToProps = {
  // deletFavorite: petId => (deleteFavorite(petId))
// };


class Favorites extends Component {
  static navigationOptions = {
    title: 'My Favorites'
  }

  render() {

    //const { navigate } 
    return (
      <View>
        <Text></Text>
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