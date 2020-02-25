import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';

function RenderPet(props) {

  const {pet} = props;

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
    title: 'Pet Match'
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



//OLD WORKING ADOPT COMPONENT


// class Adopt extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       pets: PETS,
//       process: PROCESS
//     };
//   }

//   static navigationOptions = {
//     title: 'Adopt'
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     const renderAdoptItem = ({item}) => {
//       return (
//         //<View>
//           <ListItem
//               title={item.name}
//               subtitle={item.type}
//               onPress={() => navigate('Match', { petId: item.id})}
//               leftAvatar={{ source: require('./images/bella.jpg')}}
//           />
//           /* <Button
//             title='Find a Match'
//             color='#361D1E'
//             onPress={() => navigate.navigate('Match')} /> */
//         //</View>
//       );
//     };


//     return (
//       <FlatList
//         data={this.state.pets}
//         renderItem={renderAdoptItem}
//         keyExtractor={item => item.id.toString()}
//         />
//     );
//   };
// }