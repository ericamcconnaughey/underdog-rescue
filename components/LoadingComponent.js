import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
  return (
      <View style={styles.loadingView}>
        <ActivityIndicator size='large' color='#664441' />
        <Text style={styles.loadingText}>Loading . . .</Text>
      </View>
  );
}

const styles = StyleSheet.create(
  {
    loadingView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    loadingText: {
      color: '#361D1E',
      fontSize: 14,
      fontWeight: 'bold'
    }
  }
)

export default Loading;