import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class ComentariosCard extends Component {
  render() {
    const comentario = this.props.comentario
    var utcDate = comentario.createdAt;  // ISO-8601 formatted date returned from server
    var localDate = new Date(utcDate);
    return (
      <View>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://jesusmaestro.escuelateresiana.com/wp-content/uploads/2015/03/user-default.png'}} />
                <Body>
                  <Text>{comentario.user_id}</Text>
                  <Text note>{localDate.toLocaleDateString()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <Text>{comentario.text}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="heart" />
                </Button>
              </Left>
            </CardItem>
          </Card>
       </View>
    );
  }
}