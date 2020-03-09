import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View, ScrollView } from 'react-native';
import ApiController from '../../controller/ApiController';
import ItemListaEventos from './ItemListaEventos'
import globalStyles, { globalStyle,footerContent } from '../../styles/globalStyles'
import { Divider } from 'react-native-elements';

export default class listaEventos extends Component {

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
              <ScrollView>
              <Text style={footerContent.titleStyle}>Eventos UADE</Text>
              <Divider style={{ backgroundColor: 'black' }} />
              {this.state.eventos.map((evento, i) => {
               
                return(

                  <ItemListaEventos key={i} backgroundImage={evento.img} evento={evento} navigation={this.props.navigation}/>

                  )
              })
              }</ScrollView>  )
          }else{
            return null;
          }
        }
    

}