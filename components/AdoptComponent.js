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
    title: 'Adoption Process'
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
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Image source={require('./images/process2.jpg')} />
          <Button
            title='Pet Match'
            color='#F8633B'
            onPress={() => navigate('Match')} 
          />
          <View style={styles.list}>
            <FlatList
                data={this.state.process}
                renderItem={renderAdoptItem}
                keyExtractor={item => item.id.toString()} />
            <Image style={styles.image} source={require('./images/process1.jpg')} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFE4',
  },
  cardRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  content: {
    flex: 1
  },
  list: {
    marginTop:10,
    flex: 1
  },
  image: {
    marginTop: 20,
  }
});




export default Adopt;