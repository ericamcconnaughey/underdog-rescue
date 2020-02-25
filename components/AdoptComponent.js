import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { PROCESS } from '../shared/process';
//import * as Animatable from 'react-native-animatable';

class Adopt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      process: PROCESS
    };
  }

  static navigationOptions = {
    title: 'Adopt'
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderAdoptItem = ({item}) => {
      return (
        <View>
          <Card title={item.title}>
            <Text>{item.info}</Text>
          </Card>
        </View>
      )
    };

    return (
      <ScrollView>
        <Text style={styles.headerText}>Our Adoption Process</Text>
        <Image source={require('./images/process1.jpg')} />
        <Button
          title='Pet Match'
          color='#F8633B'
          onPress={() => navigate('Match')} 
        />
        <FlatList
            data={this.state.process}
            renderItem={renderAdoptItem}
            keyExtractor={item => item.id.toString()} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  cardRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  cardItem: {
    flex: 1,
    margin: 10
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  headerText: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});




export default Adopt;