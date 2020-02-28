import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FEATURES } from '../shared/features';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      features: FEATURES
    };
  }

  static navigationOptions = {
    title: 'Home'
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
          <Image source={require('./images/Animal1.png')} />
          <Button
            title='Pet Match'
            color='#F8633B'
            onPress={() => navigate('Match')} 
          />
          <View style={styles.list}>
            <FlatList
                data={this.state.features}
                renderItem={renderAdoptItem}
                keyExtractor={item => item.id.toString()} />
            <Image style={styles.image} source={require('./images/Animal5.jpg')} />
          </View>
        </View>
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
  container: {
    flex: 1
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


export default Home;