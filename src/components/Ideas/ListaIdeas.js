import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import ItemListaIdeas from './ItemListaIdeas'
import ApiController from '../../controller/ApiController'


export default class ListaIdeas extends React.Component {
    constructor (props) {
        super(props)
        this.state = { ideas : [] }
    }

   componentDidMount() {
    ApiController.getPosteos(this.okBusqueda.bind(this));
  }

  okBusqueda(newData) {
    this.setState({ ideas: newData });
  }

    _renderItems(){
        return this.state.ideas.map((item) => <ItemListaIdeas key={item.id} idea={item} navigation={this.props.navigation}></ItemListaIdeas> );
        {/* <ItemListaIdeas idea={item}></ItemListaIdeas> */}


    }

    render() {
            if (this.state.ideas.length > 0) {
              return (
                <View style={{flex:1}}>
                 {this._renderItems()}
                </View>
              )
            } else {
              return <Text style={{textAlign:'center', fontSize:18, marginBottom:'2%'}}>Cargando Ideas...</Text>
            }
          }



}
