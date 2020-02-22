import React, { Component } from 'react';
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

  const {pet} = props;

 return (
   <View>
     <Card
       featuredTitle={pet.name}
       image={pet.image}>
        <Text style={{fontWeight: bold}}>{pet.info}</Text>
        <Text>{pet.description}</Text>
     </Card>
   </View>
 )
}

class Adopt extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <RenderPet pet={pet} />
      </ScrollView>
    )
  }
  
};


export default Adopt;