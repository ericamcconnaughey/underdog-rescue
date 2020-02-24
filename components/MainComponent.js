import React, { Component } from 'react';
import Adopt from './AdoptComponent';
import Match from './MatchComponent';
import { PETS } from '../shared/pets';
import { View, Platform, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator, createDrawerNavigator, 
  DrawerItems } from 'react-navigation';

const AdoptNavigator = createStackNavigator(
  {
    Adopt: { screen: Adopt, 
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#F8BC3C'
      },
      headerTintColor: '#664441',
      headerTitleStyle: {
        color: '#F6EFE4'
      },
      headerLeft: <Icon
        name='dog'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}/>
    })
  },
    Match: { screen: Match }
  },
  {
    initialRouteName: 'Adopt',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F8633B'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);



const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView 
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex: 1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Underdog Rescue</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

const MainNavigator = createDrawerNavigator(
  {
    Adopt: {
      screen: AdoptNavigator,
      navigationOptions: {
        drawerIcon: () => (
          <Icon 
              name='cat'
              type='font-awesome'
              size={24}
              color= '#F6EFE4' />
        )
      },
    }
  },
  {
    drawerBackgroundColor: '#F8633B',
    contentComponent: CustomDrawerContentComponent
  }
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: PETS,
      selectedPet: null
    };
  }

  onPetSelect(petId) {
    this.setState({selectedPet: petId});
  }

  render() {
    return (
      <View style={{flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <MainNavigator />
        {/* <Adopt 
          pets={this.state.pets} 
          onPress={petId => this.onPetSelect(petId)} 
        />
        <Match 
          pet={this.state.pets.filter(pet => pet.id === this.state.selectedCampsite)[0]} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#361D1E',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#F6EFE4',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60
  },
  stackIcon: {
    marginLeft: 10,
    color: '#F6EFE4',
    fontSize: 24
  }
});

export default Main;