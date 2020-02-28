import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { FEATURES } from '../shared/features';

function Mission() {
    return(
        <Card title='Our Mission'>
            <Text>
            Underdog Rescue, MN is a 501(c)(3) non-profit, foster-based, rescue group dedicated to the rehabilitation and permanent placement of homeless dogs and cats of all ages and all breeds.  We believe that all animals deserve caring, responsible homes and if there is one common bond between us and our foster volunteers, it is this:
            We are genuinely moved by each of the amazing animals who come into our care and we believe we are their advocates.
            </Text>
        </Card>
    );
}

function History() {
    return(
            <Card title='Our History'>
            <Text>
            Underdog Rescue, MN was founded in 2000 by Shannon McKenzie. We have placed more than 2,100 dogs and cats into loving homes. We could not have done so without the help of our wonderful fosters, veterinary care partners, and community partnerships. Our organization does not have a facility to hold these animals while they wait for forever homes. It is because of the generosity of these people opening their homes, offering their resources and skills that we are able to work together to save the Underdog!
            </Text>
        </Card>
    );
}


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: FEATURES
          };
    }

    static navigationOptions = {
        title: 'About Us'
    };
    
  render () {
    return (
        <ScrollView>
               <Mission />
               <Image style={styles.image} source={require('./images/Animal2.jpg')} />
               <History />
         </ScrollView>
    );
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

export default About;