import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ItemListaIdeas from './ItemListaIdeas'
import ApiController from '../../controller/ApiController'
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardIdeas from './CardIdeas'
import { CardItem } from 'native-base';



export default class ListaIdeas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ideas: [] }
  }

  //Leo los productos de la API BD
  componentDidMount() {
    let data = {
      id: this.props.id
    }
    ApiController.getPosteosByProd(this.okBusqueda2.bind(this), data);
  }
  //transformo los datos recibidos de la BD en un array de productos
  okBusqueda2(newData) {
    this.setState({ ideas: newData });
  }

  _renderItems() {
    return this.state.ideas.map((item) => <CardIdeas key={item.id} idea={item} navigation={this.props.navigation}></CardIdeas>);
  }

  render() {
    if (this.state.ideas.length > 1) {
      return (
        <ScrollView horizontal>
          <Row>
            {this._renderItems()}
          </Row>
        </ScrollView>
      )
    } else {
      if (this.state.ideas.length == 1) {
        return (<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                  <ItemListaIdeas idea={this.state.ideas[0]} navigation={this.props.navigation}></ItemListaIdeas>
              </View>)
      } else {
        return <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: '5%' }} >Cargando Ideas...</Text>
      }
    }
  }
}
