import React, { Component } from 'react';
import { Container, Header, Left, Body, Right,Title  } from 'native-base';
import {TouchableOpacity, Text} from 'react-native'
import SearchBar from './SearchBar'
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import {themeMainColor} from '../styles/globalStyles'

 class HeaderExample extends Component {
  constructor(props){
    super(props);
   
  
  }
  render() {
    return (
        <Header style={{backgroundColor:themeMainColor, height:75}}>
          <Left></Left>
          <Body><SearchBar /></Body>
          <Right>
            <TouchableOpacity onPress={() =>this.props.navigation.openDrawer()} style={{marginRight:10, marginTop:20, height:50}} >
                <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
            </TouchableOpacity>
          </Right>
        </Header>

    );
  }
}
export default withNavigation(HeaderExample);