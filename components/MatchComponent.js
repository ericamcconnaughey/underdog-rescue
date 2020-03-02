import React, { Component } from 'react';
// import { PETS } from '../shared/pets';
import Swipe from './SwipeComponent';
import Loading from './LoadingComponent';
import { Text, View, Image, StyleSheet, SafeAreaView, Modal } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    pets: state.pets,
    favorites: state.favorites
  };
};

const mapDispatchToProps = {
  postFavorite: petId => (postFavorite(petId))
};

function RenderCards(props) {
  const {pet} = props;
  const { navigate } = this.props.navigation;

  if (this.props.pets.isLoading) {
    return <Loading />;
  }

  if (this.props.pets.errMess) {
    return (
      <View>
        <Text>{this.props.pets.errMess}</Text>
      </View>
    );
  }

  if (pet) {
      return (
        <Card
          title={pet.name}>
          <View style={{ height: 200 }}>
            {/* <Image source={require('./images/bella.jpg')} */}
            <Image source={{uri: baseUrl + pet.image}}
              style={{ width: '100%', height: 200 }} />
          </View>
          <View style={styles.details}>
            <Text style={{margin: 10}}>{pet.info} {pet.type}</Text>
            <Text style={{margin: 10}}>{pet.description}</Text>
          </View>
        </Card>
      );
    }
    return (
      <Card title="There are No More Adoptable Pets">
        <Button
          title="Go to My Favorites"
          large
          icon={{ name: 'heart', type: 'font-awesome', color: '#fff' }}
          buttonStyle={{ backgroundColor: '#F8633B', marginTop: 10 }}
          onPress={() => navigate('Favorites')} />
      </Card>
    );
  };
  

class Match extends Component {
  state = {
    likedPets: 0,
    passedPets: 0, 
    showModal: false,
    favorite: false
  };

  markFavorite(petId) {
    this.props.postFavorite(petId);
  }


  static navigationOptions = {
    title: 'Find a Pet Match'
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

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
  };

  // renderCards(pet) {
  //   return (
  //     <Card
  //       title={pet.name}>
  //       <View style={{ height: 200 }}>
  //         {/* <Image source={require('./images/bella.jpg')} */}
  //         <Image source={{uri: baseUrl + pet.image}}
  //           style={{ width: '100%', height: 200 }} />
  //       </View>
  //       <View style={styles.details}>
  //         <Text style={{margin: 10}}>{pet.info} {pet.type}</Text>
  //         <Text style={{margin: 10}}>{pet.description}</Text>
  //       </View>
  //     </Card>
  //   );
  // }

  // renderNoMoreCards = () => {
  //   const { navigate } = this.props.navigation;
    
  //   return (
  //     <Card title="There are No More Adoptable Pets">
  //       <Button
  //         title="Go to My Favorites"
  //         large
  //         icon={{ name: 'heart', type: 'font-awesome', color: '#fff' }}
  //         buttonStyle={{ backgroundColor: '#F8633B', marginTop: 10 }}
  //         onPress={() => navigate('Favorites')} />
  //     </Card>
  //   );
  // };
  

  render() {
    const petId = this.props.navigation.getParam('petId');
    const pet = this.props.pets.pets.filter( pet => pet.id === petId)[0];
    const pets = this.props.pets.pets;

    return (
      <SafeAreaView style={styles.container}>
        <Button
          buttonStyle={{ 
            backgroundColor: '#F8633B', 
            width: 50, 
            alignSelf: 'flex-end',
            marginRight: 25,
            marginTop: 25}}
          icon={{ name: 'question', type: 'font-awesome', color: '#fff'}}
          onPress={() => this.toggleModal()}
        />
        <View style={styles.status}>
          <Text>Passed: {this.state.passedPets}</Text>
          <Text>Liked: {this.state.likedPets}</Text>
        </View>
        <Swipe 
          onSwipeRight={this.handleLikedPet}
          onSwipeLeft={this.handlePassedPet}
          data={pets}
          keyProp="petId" 
          //renderCards={renderCards}
          //renderNoMoreCards={renderNoMoreCards}
          />
          <RenderCards pets={pets}
            favorite={this.props.favorites.includes(petId)}
            markFavorite={() => this.markFavorite(petId)} />
          <View>
          <Modal 
            animationType={'slide'}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.toggleModal()}>
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>How it Works</Text>
                <Text style={styles.modalText}>1. Read the info and decide if you are interested in the pet.</Text>
                <Text style={styles.modalText}>2. If interested, swipe right. If not, swipe left.</Text>
                <Text style={styles.modalText}>3. Go to Favorites to see which pets you liked.</Text>
                <Button 
                  onPress={() => {
                    this.toggleModal();
                  }}
                  buttonStyle={{backgroundColor: '#F8633B' }}
                  title='Close'
                />
              </View> 
          </Modal>
        </View>
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
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#361D1E',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20
  },
  modalText: {
    fontSize: 16,
    margin: 10
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Match);
