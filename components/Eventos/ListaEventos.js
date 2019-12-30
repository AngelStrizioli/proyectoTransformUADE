import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import ApiController from '../../controller/ApiController';
import BotonEvento from './BotonEvento'

export default class ListaEventos extends Component {

    constructor(props){
        super(props);
        this.state={eventos: [], cargado: false};
    }

    componentDidMount(){
        ApiController.getEventos(this.handleEventos.bind(this));
    }

    handleEventos(listaEventos){
        this.setState({eventos: listaEventos, cargado: true});
    }

    render(){
      
        if(this.state.cargado){
            return(
              this.state.eventos.map((evento) => {
                return(
                  <BotonEvento key={evento._id} evento={evento}></BotonEvento>
                )
              })
            )
          }else{
            return null;
          }
        }
    

}