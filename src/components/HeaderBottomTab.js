import React, { Component } from 'react';
import { Container, Header, Left, Body, Right,Title  } from 'native-base';
import {TouchableOpacity, Text} from 'react-native'
import SearchBar from './SearchBar'
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import {themeMainColor} from '../styles/globalStyles'

 class HeaderBottomTab extends Component {
  constructor(props){
    super(props);
   
  
  }
  render() {
    return (
        <Header style={{backgroundColor:themeMainColor, height:75}}>
          <Left></Left>
          <Body><SearchBar /></Body>
          <Right>

          </Right>
        </Header>

    );
  }
}
export default withNavigation(HeaderBottomTab);