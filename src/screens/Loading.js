import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import * as firebase from 'firebase';

import { firebaseAuth } from '../environment/config';

export default class Loading extends React.Component {
  componentDidMount() {
      console.log(firebase.auth().currentUser);
      firebaseAuth.onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'Main')
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LOADING...</Text>
        <ActivityIndicator size="large"/>
      </View>
  
    )
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
