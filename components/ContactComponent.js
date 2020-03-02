//NOT CONNECTED TO REDUX

import React, { Component } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    };
    
  render () {
    return (
        <ScrollView>
            <Card title='Contact Information' wrapperStyle={{ margin: 20, marginBottom: 10}}>
                <Text>Underdog Rescue </Text>
                <Text>P.O. Box 16453 </Text>
                <Text style={{ marginBottom: 20}}>St. Louis Park, MN 55416 </Text>
                

                <Button
                    title="Volunteer with us"
                    color='#F8633B'
                />
            </Card>
            </ScrollView>
         
    );
}
}

export default Contact;