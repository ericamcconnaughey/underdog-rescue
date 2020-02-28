import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
  return {
    process: state.process
  }
};

class Adopt extends Component {

  static navigationOptions = {
    title: 'Adoption'
  }; 

  render() {
    const { navigate } = this.props.navigation;

    const renderProcessItem = ({item}) => {
      return (
          <Card title={item.title}>
            <Text>{item.info}</Text>
          </Card>
      )
    };

    if (this.props.process.isLoading) {
      return (
        <ScrollView>
        <Card
          title='Our Adoption Process'>
            <Loading />
        </Card>
      </ScrollView>
      );
    }

    if (this.props.process.errMess) {
      return (
        <ScrollView>
          <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Mission />
            <Card
              title='Our Adoption Process'>
                <Text>{this.props.process.errMess}</Text>
            </Card>
          </Animatable.View>
        </ScrollView>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Image source={require('./images/process2.jpg')} />
          <Button
            title='Find a Pet Match'
            buttonStyle={{ 
              backgroundColor: '#F8633B', 
              width: 200, 
              alignSelf: 'center',
              marginTop: 25 }}
            onPress={() => navigate('Match')} 
          />
          <View style={styles.list}>
            <FlatList
                data={this.props.process.process}
                renderItem={renderProcessItem}
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




export default connect(mapStateToProps)(Adopt);