import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import Swipe from './SwipeComponent';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
// import SafeAreaView from 'react-native-safe-area-view';

class Match extends Component {
  state = {
    likedPets: 0,
    passedPets: 0
  };

  handleLikedPet = () => {
    this.setState(({ likedPets }) => ({
      likedPets: likedPets + 1
    }));
  };

  handlePassedPet = () => {
    this.setState(({ passedPets }) => ({
      passedPets: passedPets + 1
    }));
  };

  renderCards(pet) {
    return (
      <Card
        title={pet.name}>
        <View style={{ height: 200 }}>
          <Image source={require('./images/bella.jpg')}
            style={{ width: '100%', height: 200 }} />
        </View>
        <View style={styles.details}>
          <Text style={{margin: 10}}>{pet.info} {pet.type}</Text>
          <Text style={{margin: 10}}>{pet.description}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="There are No More Adoptable Pets">
        <Button
          title="Do Something"
          large
          icon={{ name: 'my-location' }}
          backgroundColor='#03A9F4' />
      </Card>
    );
  };
  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.status}>
          <Text>Passed: {this.state.passedPets}</Text>
          <Text>Liked: {this.state.likedPets}</Text>
        </View>
        <Swipe 
          onSwipeRight={this.handleLikedPet}
          onSwipeLeft={this.handlePassedPet}
          data={PETS}
          keyProp="petId"
          renderCard={this.renderCards}
          renderNoMoreCards={this.renderNoMoreCards} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFE4',
  },
  status: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  // details: {

  // }
});

export default Match;








// OLD MATCH COMPONENT
// class Match extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       pets: PETS
//     };
//   }

//   static navigationOptions = {
//     title: 'Pet Match'
//   };

//   render() {
//     const { navigate } = this.props.navigation;
//     const renderAdoptItem = ({item}) => {
//       return (
//           <ListItem
//               title={item.name}
//               subtitle={item.type}
//               onPress={() => navigate('PetInfo', {petId: item.id})}
//               leftAvatar={{ source: require('./images/bella.jpg')}}
//           />
//       );
//     };


//     return (
//       <View>
//         <Text style={styles.headerText}>Our Adoptables</Text>
//         <FlatList
//           data={this.state.pets}
//           renderItem={renderAdoptItem}
//           keyExtractor={item => item.id.toString()}
//           />
//         </View>
//     );
//   };
// }

// const styles = StyleSheet.create({
//   headerText: {
//     justifyContent: 'center',
//     alignContent: 'center',
//     margin: 20,
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
// })

