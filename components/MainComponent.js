import React, { Component } from 'react';
import Adopt from './AdoptComponent';
import Match from './MatchComponent';
import Favorites from './FavoritesComponent';
import { PETS } from '../shared/pets';
import { View, Platform, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { createStackNavigator, createDrawerNavigator, 
  DrawerItems } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from 'react-redux';
import { fetchPets, fetchProcess } from '../redux/ActionCreators';

const mapDispatchToProps = {
  fetchPets,
  fetchProcess
};

const AdoptNavigator = createStackNavigator(
  {
    Adopt: { 
    screen: Adopt, 
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#F8BC3C'
      },
      headerTintColor: '#664441',
      headerTitleStyle: {
        color: '#F6EFE4'
      },
      headerLeft: <Icon
        name='cat'
        type='font-awesome'
        style={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()} />
    })
  },
    Match: { screen: Match },
    Favorites: { screen: Favorites }
  },

  {
    initialRouteName: 'Adopt',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F8BC3C'
      },
      headerTintColor: '#F6EFE4',
      headerTitleStyle: {
        color: '#F6EFE4'
      }
    }
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { 
    screen: Favorites, 
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#F8BC3C'
      },
      headerTintColor: '#664441',
      headerTitleStyle: {
        color: '#F6EFE4'
      },
      headerLeft: <Icon
        name='heart'
        type='font-awesome'
        style={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()} />
    })
  },
    Favorites: { screen: Favorites }
  },

  {
    initialRouteName: 'Favorites',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F8BC3C'
      },
      headerTintColor: '#F6EFE4',
      headerTitleStyle: {
        color: '#F6EFE4'
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
      <DrawerItems {...props} style={styles.drawerItemText} />
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
      }
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerIcon: () => (
          <Icon 
            name='heart'
            type='font-awesome'
            size={24}
            color= '#F6EFE4' />
        )
      }
    },

  },
  {
    drawerBackgroundColor: '#F8633B',
    contentComponent: CustomDrawerContentComponent
  }
)

class Main extends Component {
  componentDidMount() {
    this.props.fetchPets();
    this.props.fetchProcess();
  }

  render() {
    return (
      <View style={{flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#F6EFE4'
  },
  drawerHeader: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#F6EFE4',
    fontSize: 20,
    fontWeight: 'bold'
  },
  drawerItemText: {
    color: '#F6EFE4',
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

export default connect(null, mapDispatchToProps)(Main);