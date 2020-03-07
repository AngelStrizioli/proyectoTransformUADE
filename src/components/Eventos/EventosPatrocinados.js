import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import ApiController from '../../controller/ApiController';
import ItemListaEventos from './ItemListaEventos'

export default class EventosPatrocinados extends Component {

    constructor(props){
        super(props);
        this.state={eventos: [], cargado: false};
    }

    componentDidMount(){
        ApiController.getEventos(this.handleEventos.bind(this));
    }

    handleEventos(listaEventos){
      if (listaEventos !== undefined){
        this.setState({ eventos: listaEventos, cargado: true });
      }    
    }

    render(){
      
        if(this.state.cargado){
            return(
              this.state.eventos.map((evento, i) => {
                return(
                  <ItemListaEventos key={i} backgroundImage={evento.image} evento={evento} navigation={this.props.navigation}/>
                  )
              })
            )
          }else{
            return null;
          }
        }
    

}