import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, 
  Modal, Button, StyleSheet, Alert, PanResponder } from 'react-native';
import { Card, Icon, Tile } from 'react-native-elements';
//import * as Animatable from 'react-native-animatable';


class Adopt extends Component {

  static navigationOptions = {
    title: 'Adopt'
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderAdoptItem = ({item}) => {
      return (
        <View>
          <Button
            title='Find a Match'
            color='#361D1E'
            onPress={() => navigate.navigate('Match')} />
        </View>
      )
    }

    return (
      <FlatList
        data={this.props.pets}
        renderItem={renderAdoptItem}
        keyExtractor={item => item.id.toString()}
        />
    )
  }
};


export default Adopt;