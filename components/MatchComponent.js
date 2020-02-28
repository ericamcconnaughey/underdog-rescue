import React, { Component } from 'react';
import { PETS } from '../shared/pets';
import Swipe from './SwipeComponent';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';

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
  }
});

export default Match;
